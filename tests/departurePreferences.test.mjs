import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { JSDOM } from 'jsdom'
import { createModuleLoader } from './helpers/loadVueModule.mjs'

const dom = new JSDOM('<!doctype html><body><div id="app"></div></body>', { url: 'https://example.com/?flightSearch=ORD2606DPS10071', pretendToBeVisual: true })
for (const name of ['window', 'document', 'Document', 'Element', 'HTMLElement', 'HTMLInputElement', 'HTMLFormElement', 'SVGElement', 'Node', 'MutationObserver', 'KeyboardEvent', 'Event']) globalThis[name] = dom.window[name]
const { ref, computed, createApp, nextTick } = await import('vue')
const catalog = JSON.parse(readFileSync(new URL('../public/data/airports.json', import.meta.url)))
globalThis.fetch = async () => ({ ok: true, json: async () => catalog })
const authUser = ref(null), visitor = ref(null)
const savedByUser = new Map()
let loads = 0
const repository = {
  async load(uid) { loads++; return savedByUser.get(uid) ?? null },
  async save(uid, preferences) { savedByUser.set(uid, structuredClone(preferences)) },
}
globalThis.__departureTest = { authUser, visitor, repository, isNamedVisitor: computed(() => Boolean(authUser.value && visitor.value?.id === authUser.value.uid)) }
const loader = createModuleLoader({
  'src/visitor.ts': `export const {authUser, visitor, isNamedVisitor} = globalThis.__departureTest; export async function leaveSession() { authUser.value=null; visitor.value=null; }`,
  'src/data/departurePreferences.ts': `export const fetchDeparturePreferences = uid => globalThis.__departureTest.repository.load(uid); export const saveDeparturePreferences = (uid, data) => globalThis.__departureTest.repository.save(uid, data);`,
  'src/components/SavedFlights.vue': `<script setup>defineExpose({reviewCapture() {}})</script><template><div data-saved-flights>Saved flights</div></template>`,
})
const { hasDeparturePreferences, normalizeDeparturePreferences } = await loader.load('src/flights/departurePreferences.ts')
const { createPreferencesState } = await loader.load('src/flights/preferencesState.ts')
const { searchAirports } = await loader.load('src/flights/airports.ts')
const { departurePreferences: shared } = await loader.load('src/departurePreferences.ts')
const { currentPage } = await loader.load('src/navigation.ts')
const complete = { city: 'Lexington', departureAirports: ['LEX', 'CVG'] }
const deferred = () => { let resolve, reject; const promise = new Promise((yes, no) => { resolve=yes; reject=no }); return { promise, resolve, reject } }
const flush = async () => { for (let index=0; index<5; index++) { await Promise.resolve(); await nextTick() } }

// These tests deliberately use different airports for preferences and searches.
test('requires a city and at least one unique airport, accepting any departure city', () => {
  assert.equal(hasDeparturePreferences(complete), true)
  assert.equal(hasDeparturePreferences({ city: '   ', departureAirports: ['LEX'] }), false)
  assert.equal(hasDeparturePreferences({ city: 'Lexington', departureAirports: [] }), false)
  assert.equal(hasDeparturePreferences({ ...complete, departureAirports: ['LEX', 'LEX'] }), false)
  assert.equal(hasDeparturePreferences({ ...complete, departureAirports: ['Lexington'] }), false)
  assert.equal(hasDeparturePreferences({ ...complete, departureAirports: Array(21).fill('LEX') }), false)
  assert.deepEqual(normalizeDeparturePreferences({ city: '  São Paulo  ', departureAirports: [' gru ', 'GRU', 'cgh'] }), { city: 'São Paulo', departureAirports: ['GRU', 'CGH'] })
})

test('airport choices support name, city, exact code, diacritics, and excluding selected airports', () => {
  assert.equal(searchAirports(catalog, 'LEX', [])[0].code, 'LEX')
  assert.ok(searchAirports(catalog, 'Cincinnati', []).some(airport => airport.code === 'CVG'))
  assert.ok(searchAirports(catalog, 'Heathrow', []).some(airport => airport.code === 'LHR'))
  assert.equal(searchAirports(catalog, 'LEX', ['LEX']).some(airport => airport.code === 'LEX'), false)
  assert.equal(searchAirports([{ code:'GRU', city:'São Paulo', name:'Guarulhos', country:'BR' }], 'sao paulo', []).length, 1)
})

test('account creation does not load or require preferences; setup unlocks only after saving succeeds', async () => {
  const saving = deferred(), state = createPreferencesState({ load: async () => null, save: () => saving.promise })
  state.setUser('new-user')
  assert.equal(state.loaded.value, false)
  assert.equal(state.ready.value, false)
  await state.load()
  assert.equal(state.ready.value, false)
  const pending = state.save(complete)
  assert.equal(state.ready.value, false)
  saving.resolve()
  await pending
  assert.equal(state.ready.value, true)
  assert.deepEqual(state.preferences.value, complete)
})

test('load and save failures keep the tool locked and preserve previously saved preferences', async () => {
  let fail = true
  const state = createPreferencesState({ load: async () => { if (fail) throw Error('offline'); return complete }, save: async () => { throw Error('offline') } })
  state.setUser('user')
  await state.load()
  assert.equal(state.ready.value, false)
  assert.ok(state.error.value)
  fail = false
  await state.load()
  await assert.rejects(state.save({ ...complete, city: 'Chicago' }), /offline/)
  assert.equal(state.preferences.value.city, 'Lexington')
})

test('switching accounts clears preferences and ignores late reads or writes from the previous account', async () => {
  const loading = deferred(), saving = deferred()
  const state = createPreferencesState({ load: uid => uid === 'first' ? loading.promise : Promise.resolve(null), save: () => saving.promise })
  state.setUser('first')
  const oldLoad = state.load()
  state.setUser('second')
  loading.resolve(complete)
  await oldLoad
  assert.equal(state.preferences.value, null)
  assert.equal(state.ready.value, false)
  const oldSave = state.save(complete)
  state.setUser(null)
  saving.resolve()
  await assert.rejects(oldSave, /account changed/)
  assert.equal(state.preferences.value, null)
  assert.equal(state.ready.value, false)
})

test('a late preference load cannot overwrite a newer profile save', async () => {
  const loading = deferred()
  const state = createPreferencesState({ load: () => loading.promise, save: async () => {} })
  state.setUser('user')
  const old = state.load()
  await state.save(complete)
  loading.resolve({ city: 'Old city', departureAirports: ['ORD'] })
  await old
  assert.equal(state.preferences.value.city, 'Lexington')
})

test('Flights gates guests and incomplete profiles, saves through the shared editor, and leaves actual search unrestricted', async () => {
  const { default: Page } = await loader.load('src/pages/FlightsPage.vue')
  currentPage.value = 'flights'
  const app = createApp(Page)
  app.mount('#app')
  try {
    await flush()
    assert.ok(document.body.textContent.includes('Sign in to use Flights'))
    assert.equal(document.querySelector('script[src*="tpscr.com"]'), null)
    authUser.value = { uid: 'traveler' }; visitor.value = { id: 'traveler', name: 'Traveler' }
    await flush()
    assert.ok(document.body.textContent.includes('Where are you leaving from?'), JSON.stringify({ text: document.body.textContent, loaded: shared.loaded.value, uid: shared.uid.value, error: shared.error.value, loads }))
    assert.equal(document.querySelector('#tpwl-search'), null)
    const city = document.querySelector('input[autocomplete="address-level2"]')
    city.value = 'Lexington'; city.dispatchEvent(new Event('input', { bubbles: true }))
    const search = document.querySelector('input[role="combobox"]')
    search.value = 'LEX'; search.dispatchEvent(new Event('input', { bubbles: true }))
    await flush()
    assert.ok(document.querySelector('[role="option"]').textContent.includes('LEX'))
    search.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
    await flush()
    document.querySelector('.departure-editor form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await flush()
    assert.deepEqual(savedByUser.get('traveler'), { city: 'Lexington', departureAirports: ['LEX'] })
    assert.ok(document.querySelector('#tpwl-search'))
    assert.equal(document.querySelectorAll('script[src*="tpscr.com"]').length, 1)
    assert.deepEqual(window.TPWL_CONFIGURATION.flightParams, { origin: 'LEX', destination: 'DPS' })
    const fallback = document.querySelector('#origin-airport')
    fallback.value = 'LAX'; fallback.dispatchEvent(new Event('input', { bubbles: true }))
    await flush()
    assert.equal(fallback.checkValidity(), true)
    assert.ok(document.querySelector('input[name="q"]').value.includes('from LAX'))
    assert.deepEqual(shared.preferences.value.departureAirports, ['LEX'])
    currentPage.value = 'profile'; await flush()
    currentPage.value = 'flights'; await flush()
    assert.equal(document.querySelectorAll('script[src*="tpscr.com"]').length, 1)
    authUser.value = null; visitor.value = { id: null, name: 'Guest' }; await flush()
    assert.ok(document.body.textContent.includes('Sign in to use Flights'))
    assert.equal(shared.preferences.value, null)
    assert.equal(document.querySelector('.departure-summary').parentElement.style.display, 'none')
    assert.equal(document.querySelector('[data-saved-flights]'), null)
  } finally { app.unmount() }
})

test('the Profile editor edits the same saved record without requiring setup during signup', async () => {
  const { default: Editor } = await loader.load('src/components/DeparturePreferencesEditor.vue')
  savedByUser.set('profile-user', complete)
  authUser.value = { uid: 'profile-user' }; visitor.value = { id: 'profile-user', name: 'Traveler' }
  const priorLoads = loads
  await flush()
  assert.equal(loads, priorLoads)
  const app = createApp(Editor)
  app.mount('#app')
  try {
    await flush()
    const city = document.querySelector('input[autocomplete="address-level2"]')
    assert.equal(city.value, 'Lexington', JSON.stringify({ text: document.body.textContent, uid: shared.uid.value, preferences: shared.preferences.value, loads }))
    city.value = 'Louisville'; city.dispatchEvent(new Event('input', { bubbles: true }))
    document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await flush()
    assert.equal(savedByUser.get('profile-user').city, 'Louisville')
    assert.equal(shared.preferences.value.city, 'Louisville')
    assert.equal(shared.ready.value, true)
  } finally { app.unmount(); dom.window.close() }
})
