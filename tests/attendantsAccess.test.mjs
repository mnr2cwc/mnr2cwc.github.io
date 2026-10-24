import assert from 'node:assert/strict'
import { test } from 'node:test'
import { JSDOM } from 'jsdom'
import { createModuleLoader } from './helpers/loadVueModule.mjs'

const dom = new JSDOM('<!doctype html><body><div id="app"></div></body>', { url: 'https://example.com/', pretendToBeVisual: true })
for (const name of ['window', 'document', 'Document', 'Element', 'HTMLElement', 'SVGElement', 'Node', 'Event', 'MutationObserver']) globalThis[name] = dom.window[name]
window.scrollTo = () => {}
const { ref, computed, createApp, h, nextTick } = await import('vue')
const authUser = ref(null), visitor = ref({ id: null, name: 'Guest' })
let reads = 0, signInRequests = 0
let fetch = async () => [{ id: 'one', name: 'Test Traveler', status: 'interested' }]
globalThis.__attendantsTest = {
  authUser, visitor,
  isNamedVisitor: computed(() => Boolean(authUser.value && visitor.value?.id === authUser.value.uid)),
  async leaveSession() { signInRequests++; visitor.value = null },
  async fetchPeople() { reads++; return fetch() },
}
const loader = createModuleLoader({
  'src/visitor.ts': 'export const {authUser, visitor, isNamedVisitor, leaveSession} = globalThis.__attendantsTest;',
  'src/data/firestorePeople.ts': 'export const fetchPeople = () => globalThis.__attendantsTest.fetchPeople(); export async function addPerson() { throw Error("Not used in access tests") }',
})
const { currentPage, navigate } = await loader.load('src/navigation.ts')
const { default: NavBar } = await loader.load('src/components/NavBar.vue')
const { default: AttendantsPage } = await loader.load('src/pages/AttendantsPage.vue')
const flush = async () => { for (let index=0; index<4; index++) { await Promise.resolve(); await nextTick() } }

test('guests can open the attendants tab without fetching data and return to it after signing in', async () => {
  const app = createApp({ setup: () => () => h('div', [h(NavBar), currentPage.value === 'people' ? h(AttendantsPage) : null]) })
  app.mount('#app')
  try {
    const tab = [...document.querySelectorAll('nav button')].find(button => button.textContent.trim() === 'attendants')
    assert.ok(tab)
    tab.click()
    await flush()
    assert.equal(currentPage.value, 'people')
    assert.equal(tab.getAttribute('aria-current'), 'page')
    assert.ok(document.body.textContent.includes('You need to sign in'))
    assert.equal(document.querySelector('table'), null)
    assert.equal(reads, 0)
    document.querySelector('.sign-in-card button').click()
    await flush()
    assert.equal(signInRequests, 1)
    assert.equal(currentPage.value, 'people')
    authUser.value = { uid: 'member' }; visitor.value = { id: 'member', name: 'Member' }
    await flush()
    assert.equal(reads, 1)
    assert.ok(document.querySelector('table').textContent.includes('Test Traveler'))
    assert.equal(document.querySelector('.sign-in-card'), null)
    authUser.value = null; visitor.value = { id: null, name: 'Guest' }
    await flush()
    assert.equal(document.querySelector('table'), null)
    assert.ok(document.querySelector('.sign-in-card'))
    assert.equal(reads, 1)
    navigate('profile')
    assert.equal(currentPage.value, 'home')
  } finally { app.unmount() }
})

test('signing out during a pending guest-list read never exposes its eventual response', async () => {
  let resolve
  fetch = () => new Promise(done => { resolve = done })
  authUser.value = { uid: 'member' }; visitor.value = { id: 'member', name: 'Member' }
  const app = createApp(AttendantsPage)
  app.mount('#app')
  try {
    await flush()
    authUser.value = null; visitor.value = { id: null, name: 'Guest' }
    await flush()
    resolve([{ id: 'private', name: 'Hidden Traveler', status: 'committed' }])
    await flush()
    assert.equal(document.querySelector('table'), null)
    assert.equal(document.body.textContent.includes('Hidden Traveler'), false)
    assert.ok(document.querySelector('.sign-in-card'))
  } finally { app.unmount(); dom.window.close() }
})
