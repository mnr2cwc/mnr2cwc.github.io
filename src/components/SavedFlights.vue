<script setup lang="ts">
import SavedFlightCard from './SavedFlightCard.vue'
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import type { CapturedFlight } from '../flights/captureFlight'
import { authUser } from '../visitor'
import { fetchSavedFlights, removeSavedFlight, saveFlight, type FlightDetails, type SavedFlight } from '../data/savedFlights'

const items = ref<SavedFlight[]>([])
const loading = ref(false)
const saving = ref(false)
const deleting = ref('')
const loadError = ref('')
const actionError = ref('')
const notice = ref('')
const expanded = ref(false)
const captureWarnings = ref<string[]>([])
const formElement = ref<HTMLFormElement | null>(null)
const reviewed = ref(false)
const returnExpected = ref(false)
const defaults = (): FlightDetails => ({ origin: '', destination: 'DPS', departure: '2027-06-25', returnDate: '2027-07-11', airline: '', flightNumbers: '', price: 0, currency: 'USD', link: '', notes: '', legs: [], fareSummary: '' })
const form = reactive(defaults())
const draftFlight = computed(() => ({
  ...form,
  legs: form.legs?.map((leg, index) => ({
    ...leg,
    ...(index === 0 ? { origin: form.origin.trim().toUpperCase(), destination: form.destination.trim().toUpperCase() } : {}),
    departureDate: index === 0 ? form.departure : form.returnDate,
  })),
}))
function setStops(index: number, event: Event) {
  if (form.legs?.[index]) form.legs[index].stops = (event.target as HTMLInputElement).value.toUpperCase().split(/[\s,]+/).filter(Boolean)
}
async function reviewCapture(capture: CapturedFlight) {
  if (saving.value) return
  Object.assign(form, capture.details)
  captureWarnings.value = capture.warnings
  returnExpected.value = capture.returnExpected
  reviewed.value = false
  actionError.value = ''; notice.value = ''
  expanded.value = true
  await nextTick()
  formElement.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  formElement.value?.querySelector<HTMLElement>('input')?.focus({ preventScroll: true })
}
defineExpose({ reviewCapture })
async function load() {
  loading.value = true
  loadError.value = ''
  try { items.value = await fetchSavedFlights() }
  catch { loadError.value = 'Unable to load saved flights. Check your connection and try again.' }
  finally { loading.value = false }
}
async function save() {
  if (saving.value) return
  if (captureWarnings.value.length && !reviewed.value) {
    actionError.value = 'Review the captured details and confirm they are correct before saving.'
    return
  }
  saving.value = true
  actionError.value = ''; notice.value = ''
  try {
    const saved = await saveFlight(draftFlight.value)
    items.value = [saved, ...items.value].slice(0, 100)
    Object.assign(form, defaults())
    captureWarnings.value = []
    returnExpected.value = false
    reviewed.value = false
    expanded.value = false
    notice.value = 'Flight saved and shared with the group.'
  } catch (error) {
    actionError.value = (error as { code?: string }).code
      ? 'Unable to save this flight. Check your connection and ask the organizer to check flight access settings if this continues.'
      : error instanceof Error ? error.message : 'Unable to save this flight.'
  } finally { saving.value = false }
}
async function remove(item: SavedFlight) {
  if (deleting.value) return
  deleting.value = item.id; actionError.value = ''; notice.value = ''
  try {
    await removeSavedFlight(item.id)
    items.value = items.value.filter(flight => flight.id !== item.id)
    notice.value = 'Saved flight removed.'
  } catch { actionError.value = 'Unable to remove this flight. Please try again.' }
  finally { deleting.value = '' }
}
onMounted(load)
</script>

<template>
  <section class="saved-flights" aria-labelledby="saved-flights-title">
    <h2 id="saved-flights-title">Flights to share</h2>
    <p>Found a flight you like? Save its details below so everyone can compare options. Saved flights are visible to everyone who visits this site.</p>
    <p class="hint">Open a search result’s full details and choose Capture this flight to fill this form automatically. You can also enter a flight manually. Saved prices may change; check the provider for current fares and availability.</p>
    <button v-if="authUser" type="button" :aria-expanded="expanded" aria-controls="save-flight-form" :disabled="saving" @click="expanded = !expanded">{{ expanded ? 'Close form' : 'Enter a flight manually' }}</button>
    <p v-else class="hint">Sign in to save a flight for the group.</p>
    <form v-if="expanded && authUser" id="save-flight-form" ref="formElement" @submit.prevent="save">
      <div v-if="captureWarnings.length" class="capture-review" role="status">
        <h3>Review captured flight</h3>
        <ul><li v-for="warning in captureWarnings" :key="warning">{{ warning }}</li></ul>
      </div>
      <SavedFlightCard v-if="captureWarnings.length" :flight="draftFlight" preview class="capture-preview" />
      <fieldset :disabled="saving">
        <label>From (airport code)<input v-model="form.origin" required pattern="[A-Za-z]{3}" maxlength="3" placeholder="IND" /></label>
        <label>To (airport code)<input v-model="form.destination" required pattern="[A-Za-z]{3}" maxlength="3" /></label>
        <label>Departure date<input v-model="form.departure" type="date" required /></label>
        <label>Return date{{ returnExpected ? '' : ' (optional)' }}<input v-model="form.returnDate" type="date" :required="returnExpected" :min="form.departure" /></label>
        <label>Airline(s)<input v-model="form.airline" required maxlength="120" placeholder="e.g. Qatar Airways" /></label>
        <label>Flight numbers (optional)<input v-model="form.flightNumbers" maxlength="120" placeholder="e.g. QR 706, QR 960" /></label>
        <label>Total price shown<input v-model.number="form.price" type="number" required min="0.01" max="1000000" step="0.01" /></label>
        <label>Currency code<input v-model="form.currency" required pattern="[A-Za-z]{3}" maxlength="3" placeholder="USD" /></label>
        <label class="wide">Flight or search link (optional, HTTPS)<input v-model="form.link" type="url" pattern="https://.*" maxlength="2000" placeholder="https://…" /></label>
        <label class="wide">Details (optional)<textarea v-model="form.notes" maxlength="2000" rows="4" placeholder="Departure/arrival times, layovers, cabin, baggage, passengers included in the price…" /></label>
        <details v-if="form.legs?.length" class="wide itinerary-editor">
          <summary>Adjust captured times, cities, and stops</summary>
          <section v-for="(leg, index) in form.legs" :key="index" class="leg-editor" :aria-label="index === 0 ? 'Outbound details' : 'Return details'">
            <h3>{{ index === 0 ? 'Outbound' : 'Return' }} details</h3>
            <label v-if="index > 0">Return origin airport<input v-model="leg.origin" pattern="[A-Za-z]{3}" maxlength="3" /></label>
            <label v-if="index > 0">Return destination airport<input v-model="leg.destination" pattern="[A-Za-z]{3}" maxlength="3" /></label>
            <label>Departure city<input v-model="leg.originCity" maxlength="120" /></label>
            <label>Arrival city<input v-model="leg.destinationCity" maxlength="120" /></label>
            <label>Departure time<input v-model="leg.departureTime" maxlength="30" placeholder="e.g. 12:30 pm" /></label>
            <label>Arrival time<input v-model="leg.arrivalTime" maxlength="30" placeholder="e.g. 11:50 pm" /></label>
            <label>Arrival date<input v-model="leg.arrivalDate" type="date" :min="index === 0 ? form.departure : form.returnDate" /></label>
            <label>Travel time<input v-model="leg.duration" maxlength="80" placeholder="e.g. 22h 20m" /></label>
            <label class="wide">Connection airports (comma separated)<input :value="leg.stops.join(', ')" maxlength="28" pattern="(?:[A-Za-z]{3}(?:[, ]+[A-Za-z]{3})*)?" placeholder="e.g. ICN" @change="setStops(index, $event)" /></label>
          </section>
          <label>Fare / baggage summary<input v-model="form.fareSummary" maxlength="240" /></label>
        </details>
        <label v-if="captureWarnings.length" class="wide review-check"><input v-model="reviewed" type="checkbox" required /> I checked the captured details and corrected anything missing.</label>
        <button type="submit">{{ saving ? 'Saving…' : 'Save and share flight' }}</button>
      </fieldset>
    </form>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="actionError" role="alert">{{ actionError }}</p>
    <div class="list-heading"><h3>Saved flights</h3><button type="button" :disabled="loading || saving" @click="load">{{ loading ? 'Loading…' : 'Refresh' }}</button></div>
    <p v-if="loadError" role="alert">{{ loadError }}</p>
    <p v-else-if="!loading && !items.length">No flights saved yet. Share the first option for the trip.</p>
    <p v-if="items.length" class="hint">Showing the {{ items.length }} most recent saved flights.</p>
    <div class="flight-list">
      <SavedFlightCard v-for="item in items" :key="item.id" :flight="item" :can-remove="authUser?.uid === item.ownerUid" :removing="deleting === item.id" :disable-remove="Boolean(deleting)" @remove="remove(item)" />
    </div>
  </section>
</template>

<style scoped>
.saved-flights { margin-top: 2rem; padding: clamp(1rem, 4vw, 2.5rem); background: var(--cream); border-radius: 22px; }
h2 { font-family: 'Playfair Display', serif; color: var(--teal); font-size: 1.7rem; }
p { margin-top: 0.75rem; line-height: 1.6; }
.hint { color: var(--muted); font-size: 0.85rem; }
fieldset { border: 0; padding: 0; margin-top: 1.5rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
label { display: grid; gap: 0.5rem; min-width: 0; }
.wide { grid-column: 1 / -1; }
input, textarea { width: 100%; min-width: 0; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 10px; background: white; color: var(--ink); font: inherit; }
textarea { resize: vertical; }
.capture-review { margin-top: 1rem; padding: 1rem; background: var(--sand); border-radius: 10px; }
.capture-review ul { margin: 0.75rem 0 0; padding-left: 1.25rem; line-height: 1.6; }
.review-check { display: flex; align-items: start; gap: 0.75rem; line-height: 1.5; }
.review-check input { width: 1.25rem; height: 1.25rem; flex-shrink: 0; margin-top: 0.15rem; }
button { padding: 0.8rem 1rem; margin-top: 0.75rem; border: 0; border-radius: 10px; background: var(--teal); color: var(--cream); font: inherit; cursor: pointer; }
button:disabled { opacity: 0.6; cursor: wait; }
:is(button, input, textarea, a):focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
.list-heading { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 2rem; }
.flight-list { display: grid; gap: 1.25rem; margin-top: 1rem; }
.capture-preview { margin-top: 1rem; }
.itinerary-editor { padding: 1rem; border: 1px solid var(--sand); border-radius: 10px; }
.itinerary-editor summary { color: var(--teal); cursor: pointer; }
.leg-editor { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.leg-editor h3 { grid-column: 1 / -1; }
@media (max-width: 600px) { fieldset, .leg-editor { grid-template-columns: minmax(0, 1fr); } }
</style>
