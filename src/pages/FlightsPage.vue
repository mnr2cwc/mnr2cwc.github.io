<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import SavedFlights from '../components/SavedFlights.vue'
import DeparturePreferencesEditor from '../components/DeparturePreferencesEditor.vue'
import { departurePreferences as preferences } from '../departurePreferences'
import { installFlightCapture } from '../flights/captureFlight'
import { authUser, visitor, isNamedVisitor, leaveSession } from '../visitor'
import { currentPage, navigate } from '../navigation'

const widgetFailed = ref(false)
const toolMounted = ref(false)
const origin = ref('')
const savedFlights = ref<InstanceType<typeof SavedFlights> | null>(null)
const captureError = ref('')
const canUseFlights = computed(() => isNamedVisitor.value && preferences.ready.value)
let widgetStarted = false
let widgetStarting = false
let captureController: ReturnType<typeof installFlightCapture> | undefined
watch([isNamedVisitor, () => authUser.value?.uid, currentPage], () => {
  if (isNamedVisitor.value && currentPage.value === 'flights') void preferences.load()
}, { immediate: true })
watch(() => preferences.preferences.value, data => {
  if (data) origin.value = data.departureAirports[0] ?? ''
  else { origin.value = ''; captureError.value = '' }
})
watch([canUseFlights, currentPage, visitor], async () => {
  const active = canUseFlights.value && currentPage.value === 'flights' && Boolean(visitor.value)
  document.body.classList.toggle('flight-tool-blocked', !active)
  if (!active) {
    const modals = document.getElementById('tpwl-modals')?.shadowRoot
    if (modals?.querySelector('[class*="Modal-module__root___"]')) {
      const count = Math.min(modals.querySelectorAll('[class*="Modal-module__root___"]').length, 10)
      for (let index = 0; index < count; index++) document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }))
      if (document.body.style.overflow === 'hidden') document.body.style.overflow = ''
    }
  }
  captureController?.refresh()
  if (!active || widgetStarted || widgetStarting) return
  widgetStarting = true
  const userId = authUser.value?.uid
  toolMounted.value = true
  origin.value = preferences.preferences.value?.departureAirports[0] ?? ''
  await nextTick()
  widgetStarting = false
  if (!canUseFlights.value || currentPage.value !== 'flights' || authUser.value?.uid !== userId) return
  widgetStarted = true
  const config = window as Window & { TPWL_CONFIGURATION?: Record<string, unknown> }
  config.TPWL_CONFIGURATION = {
    ...config.TPWL_CONFIGURATION,
    flightParams: { origin: origin.value, destination: 'DPS' },
  }
  captureController = installFlightCapture({
    canCapture: () => canUseFlights.value,
    isActive: () => canUseFlights.value && Boolean(visitor.value) && currentPage.value === 'flights',
    onCapture: capture => {
      captureError.value = ''
      savedFlights.value?.reviewCapture(capture)
    },
    onError: message => { captureError.value = message },
  })
  // Initialize the provider once per document, after setup succeeds and its
  // containers exist. Retain its DOM during navigation and gate it on re-entry.
  const script = document.createElement('script')
  script.async = true
  script.type = 'module'
  script.src = 'https://tpscr.com/wl_web/main.js?wl_id=23798'
  script.addEventListener('error', () => { widgetFailed.value = true }, { once: true })
  document.head.appendChild(script)
}, { immediate: true, flush: 'post' })
onUnmounted(() => {
  captureController?.stop()
  document.body.classList.remove('flight-tool-blocked')
})

const searchQuery = computed(() => `Round trip flights from ${origin.value.trim().toUpperCase()} to DPS departing June 25 2027 returning July 11 2027`)
</script>

<template>
  <main class="flights-page">
    <div class="section-eyebrow">Getting There</div>
    <h1 class="section-title">Find Your <em>Flight</em></h1>
    <p class="intro">One destination. Wherever you're starting from.</p>
    <section v-if="!isNamedVisitor" class="flight-card access-prompt" aria-label="Sign in to use Flights">
      <h2>Plan your departure</h2>
      <p class="hint">Sign in, then save your departure city and at least one airport to use Flights.</p>
      <button type="button" @click="leaveSession">Sign in to use Flights</button>
    </section>
    <p v-else-if="preferences.loading.value || !preferences.loaded.value && !preferences.error.value" role="status">Loading your departure preferences…</p>
    <section v-else-if="preferences.error.value" class="flight-card" role="alert"><p>{{ preferences.error.value }}</p><button type="button" @click="preferences.load(true)">Try again</button></section>
    <DeparturePreferencesEditor v-else-if="!canUseFlights" :key="authUser?.uid" setup />
    <div v-if="toolMounted" v-show="canUseFlights">
    <section class="departure-summary" aria-label="Your departure preferences">
      <p>Leaving from <strong>{{ preferences.preferences.value?.city }}</strong></p>
      <p class="hint">Saved airports: {{ preferences.preferences.value?.departureAirports.join(', ') }}. You can search from any airport below.</p>
      <button type="button" class="change-preferences" @click="navigate('profile')">Edit departure preferences in Profile</button>
    </section>
    <section class="flight-card" aria-label="Search flights to Bali">
      <div class="destination"><span aria-hidden="true">✈</span><div><h2>Bali, Indonesia</h2><p>Ngurah Rai International Airport · DPS</p></div></div>
      <dl class="dates"><div><dt>Departure</dt><dd>June 25, 2027</dd></div><div><dt>Return</dt><dd>July 11, 2027</dd></div></dl>
      <p class="date-note">Our suggested dates are June 25–July 11, 2027, flexible by a day. Choose your airports, dates, and passengers in the search form below.</p>
      <p class="hint">Search flights and compare airlines and prices here. Selecting a booking offer opens an external airline or travel agency website, where you complete your purchase.</p>
      <p v-if="widgetFailed" role="alert" class="hint">Flight search could not load. Please reload the page or use Google Flights below.</p>
      <p class="hint">To share an option, open a flight’s full details and choose <strong>Capture this flight</strong>. Review the captured information below, then save it for the group. Sign in to capture and save.</p>
      <p v-if="captureError" role="alert" class="hint">{{ captureError }}</p>
      <div id="tpwl-search"></div>
      <div id="tpwl-tickets"></div>
      <details class="fallback">
        <summary>Search unavailable? Use Google Flights</summary>
      <form action="https://www.google.com/travel/flights" method="get" target="_blank" rel="noopener noreferrer">
        <label for="origin-airport">Your origin airport</label>
        <input id="origin-airport" v-model="origin" required pattern="[A-Za-z]{3}" minlength="3" maxlength="3" placeholder="e.g. IND" title="Enter a three-letter airport code, such as IND, JFK, or LAX." autocomplete="off" autocapitalize="characters" spellcheck="false" aria-describedby="origin-help" />
        <p id="origin-help" class="hint">Enter the three-letter airport code you want to depart from.</p>
        <input type="hidden" name="q" :value="searchQuery" />
        <input type="hidden" name="curr" value="USD" />
        <button type="submit">Search Google Flights <span aria-hidden="true">↗</span></button>
        <p class="hint">Opens Google Flights in a new tab with your route and dates. Review the search details there for current prices and availability.</p>
      </form>
      </details>
    </section>
    <SavedFlights v-if="canUseFlights" :key="authUser?.uid" ref="savedFlights" />
    </div>
  </main>
</template>

<style scoped>
.flights-page { max-width: 1200px; min-height: 70vh; margin: auto; padding: 3rem 1.25rem 5rem; }
#tpwl-search, #tpwl-tickets { width: 100%; min-width: 0; margin-top: 1.5rem; }
.departure-summary { margin-bottom: 1.5rem; padding: 1rem 1.25rem; background: white; border-radius: 14px; line-height: 1.6; }
.change-preferences { padding: 0; background: transparent; color: var(--teal); text-decoration: underline; font-size: 0.8rem; }
.change-preferences:hover { background: transparent; }
.fallback { margin-top: 2rem; }
summary { color: var(--teal); cursor: pointer; line-height: 1.6; }
@media (max-width: 600px) {
  .flights-page { padding-inline: 0.75rem; }
  .flight-card { padding: 1rem 0.5rem; }
}
.intro { margin: 1rem 0 2rem; color: var(--muted); line-height: 1.6; }
.flight-card { padding: clamp(1.25rem, 4vw, 2.5rem); background: var(--cream); border-radius: 22px; }
.destination { display: flex; gap: 1rem; align-items: center; }
.destination > span { font-size: 2.5rem; color: var(--coral); }
h2 { font-family: 'Playfair Display', serif; color: var(--teal); font-size: 1.7rem; }
.destination p, .hint, .date-note { color: var(--muted); font-size: 0.85rem; line-height: 1.6; }
.dates { display: flex; flex-wrap: wrap; gap: 2rem; margin: 2rem 0 1rem; }
dt { font-family: 'Special Elite', monospace; font-size: 0.8rem; color: var(--muted); margin-bottom: 0.5rem; }
dd { margin: 0; color: var(--teal); }
form { display: grid; gap: 0.75rem; margin-top: 2rem; }
input { width: 100%; padding: 1rem; border: 1px solid var(--muted); border-radius: 10px; background: white; color: var(--ink); font: inherit; text-transform: uppercase; }
button { padding: 1rem; border: 0; border-radius: 10px; background: var(--teal); color: var(--cream); font: inherit; cursor: pointer; margin-top: 0.5rem; }
button:hover { background: var(--jungle); }
:is(button, input):focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
</style>

<style>
/* The provider appends its modals to body, outside the Flights page. */
.flight-tool-blocked #tpwl-modals { display: none !important; }
</style>
