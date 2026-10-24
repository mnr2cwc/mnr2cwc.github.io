<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { fetchMyProfile, saveMyProfile, type MyProfile } from '../data/firestorePeople'
import { authUser, visitor } from '../visitor'
import DeparturePreferencesEditor from '../components/DeparturePreferencesEditor.vue'
import { navigate } from '../navigation'

const profile = reactive<MyProfile>({ name: '', status: 'interested', phone: '', email: '' })
const loading = ref(true)
const saving = ref(false)
const loadError = ref('')
const saveError = ref('')
const notice = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

async function load() {
  loading.value = true
  loadError.value = ''
  try { Object.assign(profile, await fetchMyProfile()) }
  catch { loadError.value = 'Unable to load your profile. Please try again.' }
  finally { loading.value = false }
}

async function save() {
  if (saving.value) return
  saving.value = true
  saveError.value = ''
  notice.value = ''
  clearTimeout(timer)
  try {
    await saveMyProfile(profile)
    profile.name = profile.name.trim()
    if (visitor.value?.id === authUser.value?.uid && visitor.value) visitor.value.name = profile.name
    notice.value = 'Your profile has been updated.'
    timer = setTimeout(() => { notice.value = '' }, 5000)
  } catch (cause) {
    saveError.value = (cause as { code?: string })?.code === 'permission-denied'
      ? 'Profile updates are not enabled yet. Please ask the site owner to deploy the updated rules.'
      : 'Unable to save your profile. Your changes are still here; please try again.'
  } finally { saving.value = false }
}

onMounted(load)
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <main class="profile-page">
    <button class="back" @click="navigate('home')">&larr; Back to overview</button>
    <div class="section-eyebrow">Your Adventure</div>
    <h1 class="section-title">My <em>Profile</em></h1>
    <p class="intro">Keep your RSVP and contact details up to date.</p>
    <p v-if="loading" role="status">Loading your profile…</p>
    <div v-else-if="loadError" role="alert"><p>{{ loadError }}</p><button class="primary" @click="load">Try again</button></div>
    <form v-else @submit.prevent="save">
      <fieldset :disabled="saving">
        <label>Name<input v-model="profile.name" required maxlength="120" pattern=".*\S.*" autocomplete="name" /></label>
        <label>Status<select v-model="profile.status" required><option value="invited">Invited</option><option value="committed">Committed</option><option value="interested">Interested</option></select></label>
        <label>Phone Number (optional)<input v-model="profile.phone" type="tel" maxlength="40" autocomplete="tel" /></label>
        <label>Contact Email (optional)<input v-model="profile.email" type="email" maxlength="254" autocomplete="email" /></label>
        <p class="hint">Your name and status appear on the attendants list. Your phone and contact email stay private.</p>
        <p class="hint">Sign-in email: {{ authUser?.email }}. Changing your contact email does not change your sign-in email.</p>
        <button class="primary">{{ saving ? 'Saving…' : 'Save Changes' }}</button>
      </fieldset>
      <p v-if="saveError" role="alert">{{ saveError }}</p>
    </form>
    <DeparturePreferencesEditor :key="authUser?.uid" />
    <Teleport to="body"><div class="profile-notice" role="status" aria-live="polite"><div v-if="notice" class="notice"><span aria-hidden="true">✓</span> {{ notice }}<button aria-label="Dismiss notification" @click="notice = ''">×</button></div></div></Teleport>
  </main>
</template>

<style scoped>
.profile-page { max-width: 700px; margin: auto; padding: 3rem 1.25rem 5rem; min-height: 70vh; }
.back { background: transparent; border: 0; color: var(--teal); font: inherit; cursor: pointer; margin-bottom: 2rem; }
.intro { color: var(--muted); margin: 1rem 0 2rem; }
form { padding: clamp(1rem, 4vw, 2rem); border-radius: 20px; background: var(--cream); }
fieldset { display: grid; gap: 1.25rem; border: 0; min-width: 0; }
label { display: grid; gap: 0.5rem; }
input, select { font: inherit; color: var(--ink); width: 100%; min-width: 0; border: 1px solid var(--muted); border-radius: 10px; padding: 0.8rem; background: white; }
.hint { font-size: 0.85rem; color: var(--muted); line-height: 1.6; overflow-wrap: anywhere; }
.primary { padding: 0.85rem 1.25rem; border: 0; border-radius: 10px; background: var(--teal); color: var(--cream); font: inherit; cursor: pointer; }
button:disabled { opacity: 0.6; cursor: wait; }
[role="alert"] { color: var(--stamp-red); margin-top: 1rem; }
.profile-notice { position: fixed; top: 1rem; right: 1rem; z-index: 1000; width: min(380px, calc(100vw - 2rem)); pointer-events: none; }
.notice { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--cream); border-left: 4px solid var(--jungle); border-radius: 14px; box-shadow: 0 8px 32px #0003; color: var(--teal); pointer-events: auto; }
.notice button { margin-left: auto; background: transparent; border: 0; font-size: 1.5rem; color: var(--muted); cursor: pointer; }
:is(input, select, button):focus-visible { outline: 2px solid var(--coral); outline-offset: 3px; }
</style>
