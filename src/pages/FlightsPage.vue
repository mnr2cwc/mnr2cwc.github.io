<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import SavedFlights from '../components/SavedFlights.vue'
import { installFlightCapture } from '../flights/captureFlight'
import { authUser, visitor } from '../visitor'
import { currentPage } from '../navigation'

const widgetFailed = ref(false)
const savedFlights = ref<InstanceType<typeof SavedFlights> | null>(null)
const captureError = ref('')
let captureController: ReturnType<typeof installFlightCapture> | undefined
watch([authUser, currentPage, visitor], () => captureController?.refresh())
onUnmounted(() => captureController?.stop())

onMounted(() => {
  captureController = installFlightCapture({
    canCapture: () => Boolean(authUser.value),
    isActive: () => Boolean(visitor.value) && currentPage.value === 'flights',
    onCapture: capture => {
      captureError.value = ''
      savedFlights.value?.reviewCapture(capture)
    },
    onError: message => { captureError.value = message },
  })
  // Load only after both widget containers exist. Keep this page mounted in App.vue
  // so the provider's single initialization survives navigation between tabs.
  const script = document.createElement('script')
  script.async = true
  script.type = 'module'
  script.src = 'https://tpscr.com/wl_web/main.js?wl_id=23798'
  script.addEventListener('error', () => { widgetFailed.value = true }, { once: true })
  document.head.appendChild(script)
})

const origin = ref('')
const searchQuery = computed(() => `Round trip flights from ${origin.value.trim().toUpperCase()} to DPS departing June 25 2027 returning July 11 2027`)
</script>

<template>
  <main class="flights-page">
    <div class="section-eyebrow">Getting There</div>
    <h1 class="section-title">Find Your <em>Flight</em></h1>
    <p class="intro">One destination. Wherever you're starting from.</p>
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
    <SavedFlights ref="savedFlights" />
  </main>
</template>

<style scoped>
.flights-page { max-width: 1200px; min-height: 70vh; margin: auto; padding: 3rem 1.25rem 5rem; }
#tpwl-search, #tpwl-tickets { width: 100%; min-width: 0; margin-top: 1.5rem; }
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
