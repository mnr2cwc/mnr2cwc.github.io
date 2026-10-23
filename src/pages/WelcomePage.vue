<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { addPerson, fetchPeople, type AttendanceStatus, type FirestorePerson } from '../data/firestorePeople'
import { visitor } from '../visitor'

const people = ref<FirestorePerson[]>([])
const selectedId = ref('')
const loading = ref(true)
const loadError = ref('')
const saveError = ref('')
const showNewPerson = ref(false)
const saving = ref(false)
const name = ref('')
const status = ref<AttendanceStatus>('interested')
const phone = ref('')
const email = ref('')
const createdPerson = ref<FirestorePerson | null>(null)

async function loadPeople() {
  loading.value = true
  loadError.value = ''
  try {
    people.value = await fetchPeople()
  } catch {
    loadError.value = 'We couldn’t load the guest list. Try again or continue as a guest.'
  } finally {
    loading.value = false
  }
}

function selectPerson() {
  const person = people.value.find(person => person.id === selectedId.value)
  if (person) visitor.value = { id: person.id, name: person.name }
}

async function createPerson() {
  if (saving.value) return
  saving.value = true
  saveError.value = ''
  try {
    createdPerson.value = await addPerson(name.value, status.value, phone.value, email.value)
    phone.value = ''
    email.value = ''
  } catch {
    saveError.value = 'We couldn’t save your details. Please try again.'
  } finally {
    saving.value = false
  }
}

onMounted(loadPeople)
</script>

<template>
  <main class="welcome-screen">
    <section class="welcome-card" aria-labelledby="welcome-title">
      <div class="hero-stamp">The Gang Goes to Indonesia</div>
      <h1 id="welcome-title">Ready for <em>adventure?</em></h1>
      <p class="intro">Pick your name, join the crew, or take a look around.</p>

      <template v-if="createdPerson">
        <p class="confirmation" role="status">{{ createdPerson.name }} was successfully added to the guest list.</p>
        <button class="primary" @click="visitor = { id: createdPerson.id, name: createdPerson.name }">Continue as {{ createdPerson.name }}</button>
      </template>
      <template v-else>
        <form @submit.prevent="selectPerson">
          <label for="existing-person">Already on the list?</label>
          <p v-if="loading" role="status">Loading the crew…</p>
          <div v-else-if="loadError" role="alert">
            <p>{{ loadError }}</p>
            <button class="text-button" type="button" @click="loadPeople">Try again</button>
          </div>
          <template v-else>
            <select id="existing-person" v-model="selectedId" required :disabled="saving">
              <option disabled value="">{{ people.length ? 'Select your name' : 'No people added yet' }}</option>
              <option v-for="person in people" :key="person.id" :value="person.id">{{ person.name }}</option>
            </select>
            <button class="primary" :disabled="!selectedId || saving">Continue</button>
          </template>
        </form>

        <div class="divider">New to the crew?</div>
        <button class="secondary" :disabled="saving" :aria-expanded="showNewPerson" aria-controls="join-form" @click="showNewPerson = !showNewPerson">{{ showNewPerson ? 'Cancel' : 'Add New Person' }}</button>
        <form v-if="showNewPerson" id="join-form" @submit.prevent="createPerson">
          <fieldset :disabled="saving">
            <label>Name<input v-model="name" autocomplete="name" required maxlength="120" pattern=".*\S.*" /></label>
            <label>Status
              <select v-model="status" required>
                <option value="invited">Invited</option>
                <option value="committed">Committed</option>
                <option value="interested">Interested</option>
              </select>
            </label>
            <label>Phone Number (optional)<input v-model="phone" type="tel" autocomplete="tel" maxlength="40" /></label>
            <label>Email (optional)<input v-model="email" type="email" autocomplete="email" maxlength="254" /></label>
            <p class="privacy-note">Your contact details stay private. Only your name and status appear on the guest list.</p>
            <button class="primary">{{ saving ? 'Saving…' : 'Join the Crew' }}</button>
          </fieldset>
          <p v-if="saveError" role="alert">{{ saveError }}</p>
        </form>
      </template>

      <button class="text-button guest-button" :disabled="saving" @click="visitor = { id: null, name: 'Guest' }">Continue as a Guest &rarr;</button>
    </section>
  </main>
</template>

<style scoped>
.welcome-screen { min-height: 100dvh; display: grid; place-items: center; background: var(--teal); padding: 2rem 1rem; }
.welcome-card { width: 100%; max-width: 500px; padding: clamp(1.5rem, 5vw, 3rem); border-radius: 24px; background: var(--cream); box-shadow: 0 20px 60px #0003; }
.hero-stamp { font-size: 0.6rem; margin-bottom: 1.5rem; }
h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 6vw, 2.8rem); line-height: 1.15; color: var(--teal); }
h1 em { color: var(--coral); }
.intro { color: var(--muted); line-height: 1.6; margin: 1rem 0 2rem; }
form, fieldset, label { display: grid; gap: 0.75rem; }
fieldset { padding: 0; border: 0; min-width: 0; }
label { font-size: 0.9rem; }
input, select { width: 100%; min-width: 0; padding: 0.85rem; border: 1px solid var(--muted); border-radius: 10px; background: white; font: inherit; color: var(--ink); }
button { font: inherit; cursor: pointer; border-radius: 10px; padding: 0.85rem 1rem; }
.primary { background: var(--teal); color: var(--cream); border: 1px solid var(--teal); width: 100%; }
.secondary { width: 100%; background: transparent; color: var(--teal); border: 1px solid var(--teal); margin-bottom: 1rem; }
.text-button { background: transparent; color: var(--teal); border: 0; text-decoration: underline; }
.guest-button { display: block; margin: 1.5rem auto 0; }
.divider { text-align: center; color: var(--muted); margin: 1.5rem 0 1rem; font-size: 0.85rem; }
.privacy-note { font-size: 0.8rem; line-height: 1.5; color: var(--muted); }
.confirmation { padding: 1rem; margin: 1.5rem 0; border-radius: 10px; background: var(--sand); color: var(--jungle); }
[role="alert"] { color: var(--stamp-red); line-height: 1.5; }
button:disabled { opacity: 0.5; cursor: default; }
:is(button, input, select):focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
</style>
