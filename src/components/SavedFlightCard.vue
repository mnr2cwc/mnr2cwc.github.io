<script setup lang="ts">
import { computed } from 'vue'
import type { FlightDetails } from '../data/savedFlights'
import { safeFlightLink } from '../data/savedFlights'
import { displayLegs } from '../flights/itinerary'

const props = withDefaults(defineProps<{
  flight: FlightDetails & { savedAt?: Date | null }
  preview?: boolean
  canRemove?: boolean
  removing?: boolean
  disableRemove?: boolean
}>(), { preview: false, canRemove: false, removing: false, disableRemove: false })
defineEmits<{ remove: [] }>()
const legs = computed(() => displayLegs(props.flight))
const link = computed(() => safeFlightLink(props.flight.link))
const formattedPrice = computed(() => {
  if (!props.flight.price) return 'Add price'
  try { return new Intl.NumberFormat(undefined, { style: 'currency', currency: props.flight.currency, maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(props.flight.price) }
  catch { return `${props.flight.currency} ${props.flight.price}` }
})
const initials = computed(() => props.flight.airline.trim().split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase() || '✈')
function date(value: string) {
  if (!value) return ''
  const parsed = new Date(`${value}T12:00:00`)
  return Number.isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <article class="flight-option" :aria-label="`${flight.airline || 'Flight'}: ${flight.origin} to ${flight.destination}`">
    <div class="fare-panel">
      <span class="snapshot-badge">{{ preview ? 'Preview' : 'Saved flight' }}</span>
      <strong class="fare-price">{{ formattedPrice }}</strong>
      <span class="currency">{{ flight.currency }} · {{ flight.returnDate ? 'Round trip' : 'One way' }}</span>
      <div v-if="flight.fareSummary" class="fare-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="5" y="6" width="14" height="15" rx="3" /><path d="M9 6V3h6v3M9 10v7m6-7v7" /></svg>
        <span>{{ flight.fareSummary }}</span>
      </div>
      <a v-if="link && !preview" class="view-button" :href="link" target="_blank" rel="noopener noreferrer">View flight <span aria-hidden="true">↗</span></a>
      <p v-else-if="!preview" class="missing-link">No provider link saved</p>
      <button v-if="canRemove" type="button" class="remove-button" :disabled="disableRemove" @click="$emit('remove')">{{ removing ? 'Removing…' : 'Remove saved flight' }}</button>
    </div>
    <div class="itinerary-panel">
      <header class="airline"><span class="airline-mark" aria-hidden="true">{{ initials }}</span><h3>{{ flight.airline || 'Add airline' }}</h3></header>
      <div v-for="(leg, index) in legs" :key="index" class="journey" :aria-label="index === 0 ? 'Outbound flight' : 'Return flight'">
        <span class="direction">{{ index === 0 ? 'Outbound' : 'Return' }}</span>
        <div class="endpoint origin">
          <strong class="flight-time">{{ leg.departureTime || 'Time not saved' }}</strong>
          <span class="city">{{ leg.originCity || leg.origin }}</span>
          <span class="flight-date">{{ date(leg.departureDate) || 'Add date' }}</span>
        </div>
        <div class="route" :aria-label="[leg.origin, ...leg.stops, leg.destination].filter(Boolean).join(' → ')">
          <div class="route-caption"><span v-if="leg.duration">Travel time: {{ leg.duration }}</span><span v-else>Travel time not saved</span></div>
          <div class="route-track" aria-hidden="true"><span v-for="bar in leg.stops.length + 1" :key="bar"></span></div>
          <div class="airport-row"><span v-for="(code, position) in [leg.origin, ...leg.stops, leg.destination]" :key="position">{{ code || '—' }}</span></div>
        </div>
        <div class="endpoint arrival">
          <strong class="flight-time">{{ leg.arrivalTime || 'Time not saved' }}</strong>
          <span class="city">{{ leg.destinationCity || leg.destination }}</span>
          <span class="flight-date">{{ date(leg.arrivalDate) }}</span>
        </div>
      </div>
      <details v-if="flight.notes || flight.flightNumbers" class="extra-details">
        <summary>Flight details and notes</summary>
        <p v-if="flight.flightNumbers">Flight numbers: {{ flight.flightNumbers }}</p>
        <p v-if="flight.notes" class="notes">{{ flight.notes }}</p>
      </details>
      <p v-if="!preview" class="saved-at">Saved {{ flight.savedAt ? flight.savedAt.toLocaleString() : 'just now' }} · Price and availability may have changed.</p>
    </div>
  </article>
</template>

<style scoped>
.flight-option { --flight-blue: #214fda; --flight-muted: #717e91; display: grid; grid-template-columns: 235px minmax(0, 1fr); background: #fff; color: #22252d; border: 1px solid #e9edf1; border-radius: 20px; overflow: hidden; font-family: Arial, Helvetica, sans-serif; }
.fare-panel { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 1.5rem 1rem; border-right: 1px solid #edf0f4; }
.snapshot-badge { align-self: flex-start; border-radius: 100px; padding: 0.35rem 0.65rem; background: #eaf1ff; color: #274d9d; font-size: 0.75rem; font-weight: 600; }
.fare-price { margin-top: 0.25rem; font-size: clamp(1.8rem, 3vw, 2.25rem); letter-spacing: -0.04em; overflow-wrap: anywhere; }
.currency { color: var(--flight-muted); font-size: 0.75rem; }
.fare-pill { display: flex; align-items: center; gap: 0.5rem; padding: 0.7rem; width: 100%; border: 1px solid #dfe4ec; border-radius: 14px; font-size: 0.85rem; line-height: 1.45; overflow-wrap: anywhere; }
.fare-pill svg { flex: 0 0 20px; width: 20px; height: 20px; color: var(--flight-muted); }
.view-button { display: flex; justify-content: center; gap: 0.75rem; margin-top: 0.25rem; width: 100%; padding: 1rem 0.75rem; background: var(--flight-blue); color: white; text-decoration: none; border-radius: 14px; font-weight: 600; }
.view-button:hover { background: #173caf; }
.remove-button { border: 0; padding: 0.5rem; background: transparent; color: var(--flight-muted); font: inherit; font-size: 0.75rem; text-decoration: underline; cursor: pointer; }
.remove-button:disabled { opacity: 0.6; cursor: wait; }
.missing-link { font-size: 0.75rem; color: var(--flight-muted); text-align: center; }
.itinerary-panel { min-width: 0; padding: 1.5rem 1.75rem 1rem; }
.airline { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem; }
.airline-mark { display: grid; place-items: center; width: 42px; height: 42px; flex-shrink: 0; border-radius: 50%; background: #eef1f9; color: #29366f; font-size: 0.9rem; font-weight: 700; }
h3 { font-family: inherit; font-size: 1.15rem; font-weight: 600; overflow-wrap: anywhere; }
.journey { display: grid; grid-template-columns: minmax(0, 1fr) minmax(100px, 1.4fr) minmax(0, 1fr); gap: 0.3rem 0.8rem; padding: 1.1rem 0 1.4rem; }
.journey + .journey { border-top: 1px solid #edf0f4; }
.direction { grid-column: 1 / -1; margin-bottom: 0.4rem; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--flight-muted); }
.endpoint { display: flex; flex-direction: column; gap: 0.25rem; min-width: 0; }
.arrival { text-align: right; }
.flight-time { font-size: clamp(1.2rem, 2.4vw, 1.85rem); font-weight: 500; line-height: 1.2; letter-spacing: -0.04em; }
.city, .flight-date { color: var(--flight-muted); font-size: 0.85rem; line-height: 1.4; overflow-wrap: anywhere; }
.flight-date { font-size: 0.75rem; }
.route { align-self: center; min-width: 0; }
.route-caption { margin-bottom: 1rem; text-align: center; color: var(--flight-muted); font-size: 0.75rem; line-height: 1.5; }
.route-track { display: flex; gap: 4px; }
.route-track span { height: 5px; flex: 1; border-radius: 100px; background: #ccd5e0; }
.airport-row { display: flex; justify-content: space-between; gap: 4px; margin-top: 0.65rem; color: var(--flight-blue); font-size: 0.75rem; font-weight: 600; flex-wrap: wrap; }
.airport-row span { min-width: 0; }
.extra-details { border-top: 1px solid #edf0f4; padding-top: 0.8rem; color: #566376; font-size: 0.8rem; }
summary { cursor: pointer; color: var(--flight-blue); }
.extra-details p { margin-top: 0.75rem; line-height: 1.6; }
.notes { white-space: pre-wrap; overflow-wrap: anywhere; }
.saved-at { margin-top: 1rem; color: var(--flight-muted); font-size: 0.7rem; line-height: 1.5; }
:is(button, a, summary):focus-visible { outline: 2px solid var(--flight-blue); outline-offset: 3px; }
@media (max-width: 850px) {
  .flight-option { grid-template-columns: 180px minmax(0, 1fr); }
  .itinerary-panel { padding: 1.25rem 1rem 1rem; }
  .journey { column-gap: 0.5rem; }
}
@media (max-width: 650px) {
  .flight-option { grid-template-columns: minmax(0, 1fr); }
  .fare-panel { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-right: 0; border-bottom: 1px solid #edf0f4; gap: 0.6rem 1rem; padding: 1rem; }
  .snapshot-badge { justify-self: start; }
  .fare-price { grid-row: 2; margin: 0; }
  .currency { grid-column: 1; }
  .view-button { grid-column: 2; grid-row: 2 / 4; margin: 0; align-self: center; }
  .fare-pill { grid-column: 1 / -1; }
  .remove-button, .missing-link { grid-column: 2; font-size: 0.7rem; }
  .journey { grid-template-columns: minmax(0, 1fr) minmax(65px, 0.85fr) minmax(0, 1fr); }
  .flight-time { font-size: 1.35rem; }
  .city { font-size: 0.75rem; }
  .flight-date { font-size: 0.7rem; }
  .route-caption { font-size: 0.65rem; margin-bottom: 0.7rem; }
  .airport-row { font-size: 0.6rem; }
}
</style>
