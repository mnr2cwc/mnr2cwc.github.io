<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { addPerson, fetchPeople, type AttendanceStatus, type FirestorePerson } from '../data/firestorePeople'
import { navigate } from '../navigation'

const people = ref<FirestorePerson[]>([])
const loading = ref(true)
const error = ref('')
const name = ref('')
const phone = ref('')
const contactEmail = ref('')
const showAddPerson = ref(false)
const status = ref<AttendanceStatus>('invited')
const saving = ref(false)
const actionError = ref('')
const notice = ref('')
let noticeTimer: ReturnType<typeof setTimeout> | undefined

function dismissNotice() {
  clearTimeout(noticeTimer)
  notice.value = ''
}

onUnmounted(() => clearTimeout(noticeTimer))

async function savePerson() {
  if (saving.value) return
  saving.value = true
  actionError.value = ''
  dismissNotice()
  try {
    const person = await addPerson(name.value, status.value, phone.value, contactEmail.value)
    people.value = [...people.value, person].sort((a, b) => a.name.localeCompare(b.name))
    notice.value = `${person.name} has been added to the guest list.`
    noticeTimer = setTimeout(dismissNotice, 5000)
    name.value = ''
    phone.value = ''
    contactEmail.value = ''
    status.value = 'invited'
    showAddPerson.value = false
  } catch (cause) {
    actionError.value = (cause as { code?: string })?.code === 'permission-denied'
      ? 'Saving is not enabled yet. Please ask the site owner to check the guest list access settings.'
      : 'Unable to add this person. Check your connection and try again.'
  } finally {
    saving.value = false
  }
}

async function loadPeople() {
  loading.value = true
  error.value = ''
  try {
    people.value = await fetchPeople()
  } catch (cause) {
    const code = (cause as { code?: string })?.code
    error.value = code === 'permission-denied'
      ? 'The guest list is not available. Please ask the organizer to check its access settings.'
      : code
        ? 'Unable to load the guest list. Please try again.'
        : cause instanceof Error ? cause.message : 'Unable to load the guest list.'
  } finally {
    loading.value = false
  }
}

onMounted(loadPeople)
</script>

<template>
  <main class="people-page">
    <Teleport to="body">
      <div class="toast-region" role="status" aria-live="polite" aria-atomic="true">
        <Transition name="toast">
          <div v-if="notice" class="success-toast">
            <span class="toast-icon" aria-hidden="true">✓</span>
            <div><strong>Person added</strong><p>{{ notice }}</p></div>
            <button class="toast-close" type="button" aria-label="Dismiss notification" @click="dismissNotice">×</button>
          </div>
        </Transition>
      </div>
    </Teleport>
    <button class="back-button" @click="navigate('home')">&larr; Back to overview</button>
    <div class="section-eyebrow">The Gang</div>
    <h1 class="section-title">Who's <em>Going?</em></h1>
    <p class="people-intro">The crew for our Indonesia adventure.</p>

    <p v-if="loading" role="status">Loading the guest list…</p>
    <div v-else-if="error" role="alert">
      <p>{{ error }}</p>
      <button class="back-button retry-button" @click="loadPeople">Try again</button>
    </div>
    <table v-else>
      <caption class="sr-only">People going to Indonesia and their attendance status</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.name }}</td>
          <td><span class="status" :class="person.status">{{ person.status }}</span></td>
        </tr>
        <tr v-if="people.length === 0">
          <td colspan="2" class="empty-state">The guest list is coming soon.</td>
        </tr>
        <tr class="add-person-row">
          <td colspan="2" class="guest-panel">
              <button class="add-person-button" :aria-expanded="showAddPerson" aria-controls="add-person-form" :disabled="saving" @click="showAddPerson = !showAddPerson; actionError = ''; notice = ''"><span aria-hidden="true">＋</span> Add Person</button>
              <template v-if="showAddPerson">
                <h2>Add Person</h2>
                <form id="add-person-form" class="person-form" @submit.prevent="savePerson">
                  <fieldset :disabled="saving">
                    <label>Name<input v-model="name" required maxlength="120" :pattern="'.*\\S.*'" autocomplete="name" /></label>
                    <label>Status
                      <select v-model="status">
                        <option value="invited">Invited</option>
                        <option value="committed">Committed</option>
                        <option value="interested">Interested</option>
                      </select>
                    </label>
                    <label>Phone Number (optional)<input v-model="phone" type="tel" autocomplete="tel" maxlength="40" /></label>
                    <label>Email (optional)<input v-model="contactEmail" type="email" autocomplete="email" maxlength="254" /></label>
                    <button class="panel-button" type="submit">{{ saving ? 'Saving…' : 'Save Person' }}</button>
                    <button class="panel-button secondary" type="button" @click="showAddPerson = false">Cancel</button>
                  </fieldset>
                </form>
              </template>
              <p v-if="actionError" role="alert">{{ actionError }}</p>
          </td>
        </tr>
      </tbody>
    </table>


  </main>
</template>

<style scoped>
.toast-region { position: fixed; top: 1rem; right: 1rem; z-index: 1000; width: min(380px, calc(100vw - 2rem)); pointer-events: none; }
.success-toast { display: flex; align-items: flex-start; gap: 0.8rem; padding: 1rem; border: 1px solid rgba(61, 122, 92, 0.25); border-left: 4px solid var(--jungle); border-radius: 14px; background: var(--cream); color: var(--ink); box-shadow: 0 8px 32px rgba(27, 79, 90, 0.2); pointer-events: auto; }
.toast-icon { display: grid; place-items: center; flex: 0 0 28px; height: 28px; border-radius: 50%; background: var(--jungle); color: white; }
.success-toast strong { color: var(--teal); }
.success-toast p { margin-top: 0.35rem; font-size: 0.9rem; line-height: 1.5; overflow-wrap: anywhere; }
.toast-close { flex-shrink: 0; margin-left: auto; border: 0; background: transparent; color: var(--muted); font-size: 1.5rem; width: 32px; height: 32px; cursor: pointer; }
.toast-close:focus-visible { outline: 2px solid var(--teal); border-radius: 4px; }
.toast-enter-active, .toast-leave-active { transition: opacity 0.2s, transform 0.2s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-10px); }
@media (prefers-reduced-motion: reduce) { .toast-enter-active, .toast-leave-active { transition: none; } }
.people-page { max-width: 800px; min-height: 70vh; margin: 0 auto; padding: 3rem 1.25rem 5rem; }
.guest-panel { padding: 0; }
.guest-panel:has(.person-form) { padding-bottom: 1.25rem; }
.person-form, .guest-panel h2, .guest-panel [role] { margin-left: 1.25rem; margin-right: 1.25rem; }
.guest-panel h2 { font-family: 'Playfair Display', serif; margin: 1rem 0; }
.add-person-button { display: block; width: 100%; padding: 1rem 1.25rem; border: 0; border-radius: 12px; background: transparent; color: var(--teal); font: inherit; text-align: left; cursor: pointer; }
.add-person-button:hover { background: var(--sand); }
.add-person-button:focus-visible { outline: 2px solid var(--teal); outline-offset: -2px; }
fieldset { border: 0; display: flex; flex-wrap: wrap; align-items: end; gap: 1rem; margin-top: 1rem; min-width: 0; }
label { display: grid; gap: 0.5rem; flex: 1 1 160px; min-width: 0; }
input, select { width: 100%; min-width: 0; font: inherit; padding: 0.7rem; border: 1px solid var(--muted); background: white; border-radius: 3px; }
.panel-button { font: inherit; padding: 0.75rem 1rem; background: var(--teal); color: var(--cream); border: 1px solid var(--teal); border-radius: 3px; cursor: pointer; }
.secondary { background: transparent; color: var(--teal); }
button:disabled { opacity: 0.6; cursor: wait; }
.guest-panel [role] { margin-top: 1rem; }
.back-button { border: 0; background: transparent; color: var(--teal); font: inherit; cursor: pointer; margin-bottom: 2.5rem; }
.back-button:hover { text-decoration: underline; }
.people-intro { margin: 1rem 0 2rem; color: var(--muted); }
table { width: 100%; border-collapse: separate; border-spacing: 0 0.5rem; padding: 0.25rem 0.75rem; border-radius: 20px; background: var(--cream); text-align: left; }
th { background: var(--teal); color: var(--cream); font-family: 'Special Elite', monospace; font-weight: normal; letter-spacing: 0.08em; }
th, td { padding: 1rem 1.25rem; }
th:first-child { border-radius: 12px 0 0 12px; }
th:last-child { border-radius: 0 12px 12px 0; }
td { background: var(--sand); }
td:first-child { border-radius: 12px 0 0 12px; }
td:last-child { border-radius: 0 12px 12px 0; }
td:only-child { border-radius: 12px; }
.guest-panel { background: rgba(27, 79, 90, 0.06); }
.status { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 2rem; font-size: 0.85rem; }
.invited { background: var(--sand); color: var(--ink); }
.committed { background: var(--jungle); color: var(--cream); }
.interested { background: var(--gold); color: var(--ink); }
.retry-button { margin-top: 1rem; }
.empty-state { text-align: center; color: var(--muted); padding: 2.5rem 1rem; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
</style>
