<script setup lang="ts">
import { computed, onMounted, reactive, ref, useId, watch } from 'vue'
import { authUser } from '../visitor'
import { departurePreferences as store } from '../departurePreferences'
import { loadAirports, searchAirports, type Airport } from '../flights/airports'
import { MAX_DEPARTURE_AIRPORTS } from '../flights/departurePreferences'

const props = withDefaults(defineProps<{ setup?: boolean }>(), { setup: false })
const emit = defineEmits<{ saved: [] }>()
const id = useId()
const draft = reactive({ city: '', departureAirports: [] as string[] })
const query = ref('')
const airports = ref<Airport[]>([])
const airportLoading = ref(false)
const airportError = ref('')
const saveError = ref('')
const notice = ref('')
const focused = ref(false)
const highlight = ref(-1)
const matches = computed(() => searchAirports(airports.value, query.value, draft.departureAirports))
const airportMap = computed(() => new Map(airports.value.map(airport => [airport.code, airport])))
const showResults = computed(() => focused.value && query.value.trim().length >= 2 && draft.departureAirports.length < MAX_DEPARTURE_AIRPORTS)
watch(() => store.preferences.value, preferences => {
  draft.city = preferences?.city ?? ''
  draft.departureAirports = [...(preferences?.departureAirports ?? [])]
}, { immediate: true })
watch(() => authUser.value?.uid, () => { query.value = ''; saveError.value = ''; notice.value = '' })
watch(query, () => { highlight.value = -1; notice.value = '' })
async function loadCatalog() {
  airportLoading.value = true; airportError.value = ''
  try { airports.value = await loadAirports() }
  catch { airportError.value = 'Unable to load airport choices. Please try again.' }
  finally { airportLoading.value = false }
}
function add(airport: Airport) {
  if (draft.departureAirports.length >= MAX_DEPARTURE_AIRPORTS || draft.departureAirports.includes(airport.code)) return
  draft.departureAirports.push(airport.code)
  query.value = ''; highlight.value = -1; saveError.value = ''; notice.value = ''
}
function remove(code: string) {
  draft.departureAirports = draft.departureAirports.filter(airport => airport !== code)
  notice.value = ''
}
function makeDefault(code: string) {
  draft.departureAirports = [code, ...draft.departureAirports.filter(airport => airport !== code)]
  notice.value = ''
}
function keyboard(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault(); focused.value = true
    const count = matches.value.length
    highlight.value = count ? (highlight.value + (event.key === 'ArrowDown' ? 1 : -1) + count) % count : -1
  } else if (event.key === 'Enter') {
    event.preventDefault()
    const airport = matches.value[Math.max(0, highlight.value)]
    if (showResults.value && airport) add(airport)
  } else if (event.key === 'Escape') { focused.value = false; highlight.value = -1 }
}
async function save() {
  if (store.saving.value) return
  saveError.value = ''; notice.value = ''
  if (query.value.trim()) { saveError.value = 'Choose an airport from the search results, or clear the airport search before saving.'; return }
  try {
    await store.save(draft)
    notice.value = 'Your departure preferences have been saved.'
    emit('saved')
  } catch (error) {
    saveError.value = (error as { code?: string }).code === 'permission-denied'
      ? 'Unable to save your departure preferences. Please ask the organizer to check account access settings.'
      : (error as { code?: string }).code ? 'Unable to save. Your changes are still here; check your connection and try again.'
        : error instanceof Error ? error.message : 'Unable to save your departure preferences. Please try again.'
  }
}
onMounted(() => { void store.load(); void loadCatalog() })
</script>

<template>
  <section class="departure-editor" :aria-labelledby="`${id}-heading`">
    <h2 :id="`${id}-heading`">{{ props.setup ? 'Where are you leaving from?' : 'Departure preferences' }}</h2>
    <p class="intro">{{ props.setup ? 'Save your city and at least one departure airport to use Flights.' : 'Update the city and airports you would be willing to leave from.' }}</p>
    <p v-if="store.loading.value" role="status">Loading your departure preferences…</p>
    <div v-else-if="store.error.value" role="alert"><p>{{ store.error.value }}</p><button type="button" class="secondary" @click="store.load(true)">Try again</button></div>
    <form v-else @submit.prevent="save">
      <fieldset :disabled="store.saving.value">
        <label :for="`${id}-city`">Departure city</label>
        <input :id="`${id}-city`" v-model="draft.city" required maxlength="120" autocomplete="address-level2" placeholder="e.g. Lexington" :aria-describedby="`${id}-city-help`" />
        <p :id="`${id}-city-help`" class="hint">Just the city you’re leaving from. Your departure preferences stay private.</p>
        <label :for="`${id}-airports`">Acceptable departure airports <span class="hint">(select at least one)</span></label>
        <div class="airport-search">
          <input :id="`${id}-airports`" v-model="query" type="search" role="combobox" autocomplete="off" spellcheck="false" placeholder="Search a city, airport name, or code" :aria-expanded="showResults && matches.length > 0" :aria-controls="`${id}-results`" :aria-activedescendant="showResults && highlight >= 0 && matches[highlight] ? `${id}-option-${highlight}` : undefined" aria-autocomplete="list" :aria-describedby="`${id}-airports-help`" :disabled="draft.departureAirports.length >= MAX_DEPARTURE_AIRPORTS" @input="focused = true" @focus="focused = true" @blur="focused = false" @keydown="keyboard" />
          <ul v-if="showResults && matches.length" :id="`${id}-results`" class="airport-results" role="listbox" aria-label="Matching airports">
            <li v-for="(airport, index) in matches" :id="`${id}-option-${index}`" :key="airport.code" role="option" :aria-selected="highlight === index" :class="{ highlighted: highlight === index }" @mousedown.prevent @click="add(airport)"><strong>{{ airport.code }}</strong><span>{{ airport.name }}<small>{{ airport.city || airport.name }} · {{ airport.country }}</small></span></li>
          </ul>
        </div>
        <p v-if="airportLoading" class="hint" role="status">Loading airport choices…</p>
        <p v-else-if="airportError" role="alert">{{ airportError }} <button type="button" class="text-button" @click="loadCatalog">Retry</button></p>
        <p v-else-if="showResults && !matches.length" class="hint" role="status">No matching airports. Try the three-letter airport code or another city.</p>
        <ul v-if="draft.departureAirports.length" class="selected-airports" aria-label="Selected departure airports">
          <li v-for="(code, index) in draft.departureAirports" :key="code">
            <div><strong>{{ code }}</strong><span>{{ airportMap.get(code)?.name || code }}</span><small v-if="index === 0">Default search origin</small></div>
            <button v-if="index !== 0" type="button" class="text-button" :aria-label="`Use ${code} as default airport`" @click="makeDefault(code)">Make default</button>
            <button type="button" class="remove-airport" :aria-label="`Remove ${code}`" @click="remove(code)">×</button>
          </li>
        </ul>
        <p :id="`${id}-airports-help`" class="hint">Save up to {{ MAX_DEPARTURE_AIRPORTS }} airports. Your default is a starting point; you can search from any airport in the Flights tool.</p>
        <button class="primary" type="submit">{{ store.saving.value ? 'Saving…' : props.setup ? 'Save and continue to Flights' : 'Save departure preferences' }}</button>
      </fieldset>
      <p v-if="saveError" class="message" role="alert">{{ saveError }}</p>
      <p v-if="notice" class="message" role="status">{{ notice }}</p>
    </form>
  </section>
</template>

<style scoped>
.departure-editor { padding: clamp(1rem, 4vw, 2rem); background: var(--cream); border-radius: 20px; margin: 1.5rem 0; }
h2 { font: 1.6rem 'Playfair Display', serif; color: var(--teal); }
.intro { color: var(--muted); line-height: 1.6; margin: 0.75rem 0 1.25rem; }
fieldset { display: grid; gap: 0.7rem; border: 0; padding: 0; min-width: 0; }
label { margin-top: 0.4rem; }
input { padding: 0.85rem; width: 100%; min-width: 0; border: 1px solid var(--muted); border-radius: 10px; color: var(--ink); background: white; font: inherit; }
.hint { color: var(--muted); font-size: 0.8rem; line-height: 1.6; }
.airport-search { position: relative; }
.airport-results { position: absolute; top: 100%; left: 0; right: 0; z-index: 5; max-height: 300px; overflow-y: auto; list-style: none; padding: 0.35rem; background: white; border: 1px solid var(--muted); border-radius: 10px; box-shadow: 0 8px 24px #0002; }
.airport-results li { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 6px; cursor: pointer; line-height: 1.4; }
.airport-results li:hover, .highlighted { background: var(--sand); }
.airport-results strong { color: var(--teal); }
.airport-results small { display: block; color: var(--muted); font-size: 0.75rem; }
.selected-airports { list-style: none; display: grid; gap: 0.6rem; padding: 0; margin: 0.25rem 0; }
.selected-airports li { display: flex; align-items: center; gap: 0.7rem; padding: 0.8rem; border: 1px solid #1b4f5a33; border-radius: 10px; background: #fff9; }
.selected-airports li > div { flex: 1; min-width: 0; }
.selected-airports strong { color: var(--teal); margin-right: 0.5rem; }
.selected-airports span { font-size: 0.85rem; overflow-wrap: anywhere; }
.selected-airports small { display: block; margin-top: 0.2rem; color: var(--jungle); font-size: 0.7rem; }
button { font: inherit; cursor: pointer; }
.primary, .secondary { padding: 0.85rem 1.1rem; border: 1px solid var(--teal); border-radius: 10px; }
.primary { background: var(--teal); color: var(--cream); margin-top: 0.5rem; }
.secondary { background: transparent; color: var(--teal); margin-top: 0.75rem; }
.text-button { border: 0; background: transparent; color: var(--teal); text-decoration: underline; font-size: 0.75rem; padding: 0.3rem; }
.remove-airport { border: 0; background: transparent; font-size: 1.5rem; color: var(--muted); padding: 0.25rem; }
button:disabled { opacity: 0.6; cursor: wait; }
[role="alert"] { color: var(--stamp-red); line-height: 1.5; }
.message { margin-top: 1rem; line-height: 1.6; }
:is(input, button):focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
</style>
