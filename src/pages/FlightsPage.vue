<script setup lang="ts">
import { computed, ref } from 'vue'

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
      <p class="date-note">Searching June 25–July 11. Our trip dates are flexible by a day; you can adjust them in Google Flights.</p>
      <form action="https://www.google.com/travel/flights" method="get" target="_blank" rel="noopener noreferrer">
        <label for="origin-airport">Your origin airport</label>
        <input id="origin-airport" v-model="origin" required pattern="[A-Za-z]{3}" minlength="3" maxlength="3" placeholder="e.g. IND" title="Enter a three-letter airport code, such as IND, JFK, or LAX." autocomplete="off" autocapitalize="characters" spellcheck="false" aria-describedby="origin-help" />
        <p id="origin-help" class="hint">Enter the three-letter airport code you want to depart from.</p>
        <input type="hidden" name="q" :value="searchQuery" />
        <input type="hidden" name="curr" value="USD" />
        <button type="submit">Search Google Flights <span aria-hidden="true">↗</span></button>
        <p class="hint">Opens Google Flights in a new tab with your route and dates. Review the search details there for current prices and availability.</p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.flights-page { max-width: 760px; min-height: 70vh; margin: auto; padding: 3rem 1.25rem 5rem; }
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
