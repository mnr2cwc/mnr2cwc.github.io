<script setup lang="ts">
import PeoplePage from './PeoplePage.vue'
import { authUser, isNamedVisitor, leaveSession } from '../visitor'
import { navigate } from '../navigation'
</script>

<template>
  <PeoplePage v-if="isNamedVisitor" :key="authUser?.uid" />
  <main v-else class="attendants-page">
    <button class="back" type="button" @click="navigate('home')">&larr; Back to overview</button>
    <div class="section-eyebrow">The Gang</div>
    <h1 class="section-title">Who's <em>Going?</em></h1>
    <p class="intro">The crew for our Indonesia adventure.</p>
    <section class="sign-in-card" aria-labelledby="attendants-sign-in">
      <h2 id="attendants-sign-in">Sign in to view attendants</h2>
      <p>You need to sign in to see the guest list and add people to the trip.</p>
      <button class="primary" type="button" @click="leaveSession">Sign in to view attendants</button>
    </section>
  </main>
</template>

<style scoped>
.attendants-page { max-width: 800px; min-height: 70vh; margin: auto; padding: 3rem 1.25rem 5rem; }
.back { border: 0; padding: 0; margin-bottom: 2.5rem; background: transparent; color: var(--teal); font: inherit; cursor: pointer; }
.intro { color: var(--muted); margin: 1rem 0 2rem; line-height: 1.6; }
.sign-in-card { padding: clamp(1.25rem, 4vw, 2.5rem); border-radius: 22px; background: var(--cream); }
h2 { color: var(--teal); font: 1.7rem 'Playfair Display', serif; }
.sign-in-card p { margin-top: 0.75rem; color: var(--muted); font-size: 0.9rem; line-height: 1.6; }
.primary { margin-top: 1.25rem; border: 0; border-radius: 10px; padding: 0.9rem 1.25rem; color: var(--cream); background: var(--teal); font: inherit; cursor: pointer; }
.primary:hover { background: var(--jungle); }
button:focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
</style>
