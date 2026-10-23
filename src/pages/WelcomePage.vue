<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { getTripApp } from '../firebase'
import { visitor, sessionError, activateAccount, authFlowActive } from '../visitor'

const mode = ref<'signin' | 'signup' | 'reset'>('signin')
const name = ref('')
const email = ref('')
const password = ref('')
const busy = ref(false)
const error = ref('')
const message = ref('')

function authMessage(cause: unknown) {
  const code = (cause as { code?: string })?.code
  if (code === 'auth/email-already-in-use') return 'An account already exists for this email. Sign in or use Forgot password to reset it.'
  if (code === 'auth/invalid-email') return 'Enter a valid email address.'
  if (code === 'auth/network-request-failed' || code === 'unavailable') return 'Unable to reach Firebase. Check your connection and try again.'
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') return 'The email or password is incorrect. Try again or use Forgot password.'
  if (code === 'auth/user-disabled') return 'This account has been disabled. Please contact the site owner.'
  if (code === 'auth/account-exists-with-different-credential') return 'This email already uses another sign-in method. Sign in with your original method.'
  if (code === 'permission-denied') return 'Your account is signed in, but the guest list permissions need updating. Please contact the site owner.'
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return 'Sign-in was cancelled. You can try again.'
  if (code === 'auth/popup-blocked') return 'Allow popups for this site and try again.'
  if (code === 'auth/operation-not-allowed') return 'This sign-in method is not enabled yet. Please contact the site owner.'
  if (code === 'auth/unauthorized-domain') return 'This website domain needs to be enabled for sign-in by the site owner.'
  if (code === 'auth/weak-password' || code === 'auth/password-does-not-meet-requirements') return 'Choose a stronger password that meets the site’s password policy.'
  if (code === 'auth/too-many-requests') return 'Too many attempts. Please wait a little before trying again.'
  return `Unable to complete sign-in. Please try again${code ? ` (${code})` : ''}.`
}

async function submit() {
  if (busy.value) return
  busy.value = true
  error.value = ''
  sessionError.value = ''
  message.value = ''
  authFlowActive.value = true
  let accountCreated = false
  try {
    const auth = getAuth(getTripApp())
    if (mode.value === 'reset') {
      await sendPasswordResetEmail(auth, email.value.trim())
      message.value = 'If an account exists for this email, you’ll receive a password reset link.'
    } else if (mode.value === 'signup') {
      if (!name.value.trim()) throw new Error('Name required')
      const credential = await createUserWithEmailAndPassword(auth, email.value.trim(), password.value)
      accountCreated = true
      await updateProfile(credential.user, { displayName: name.value.trim() })
      await activateAccount(credential.user)
    } else {
      const credential = await signInWithEmailAndPassword(auth, email.value.trim(), password.value)
      await activateAccount(credential.user)
    }
    password.value = ''
  } catch (cause) {
    error.value = accountCreated
      ? `Your account was created, but setup could not finish. ${authMessage(cause)} Sign in again to retry setup; you don’t need to create another account.`
      : authMessage(cause)
  } finally {
    authFlowActive.value = false
    busy.value = false
  }
}

async function googleSignIn() {
  if (busy.value) return
  busy.value = true
  error.value = ''
  sessionError.value = ''
  authFlowActive.value = true
  try {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    const credential = await signInWithPopup(getAuth(getTripApp()), provider)
    await activateAccount(credential.user)
  } catch (cause) {
    error.value = authMessage(cause)
  } finally {
    authFlowActive.value = false
    busy.value = false
  }
}
</script>

<template>
  <main class="welcome-screen">
    <section class="welcome-card" aria-labelledby="welcome-title">
      <div class="hero-stamp">The Gang Goes to Indonesia</div>
      <h1 id="welcome-title">Ready for <em>adventure?</em></h1>
      <p class="intro">Sign in to join the crew, or explore as a guest.</p>
      <h2>{{ mode === 'signup' ? 'Create your account' : mode === 'reset' ? 'Reset your password' : 'Welcome back' }}</h2>
      <form @submit.prevent="submit">
        <fieldset :disabled="busy">
          <label v-if="mode === 'signup'">Name<input v-model="name" required maxlength="120" pattern=".*\S.*" autocomplete="name" /></label>
          <label>Email<input v-model="email" required type="email" autocomplete="email" /></label>
          <label v-if="mode !== 'reset'">Password<input v-model="password" required type="password" :minlength="mode === 'signup' ? 6 : undefined" :autocomplete="mode === 'signup' ? 'new-password' : 'current-password'" /></label>
          <button class="primary">{{ busy ? 'Please wait…' : mode === 'signup' ? 'Create Account' : mode === 'reset' ? 'Send Reset Link' : 'Sign In' }}</button>
        </fieldset>
      </form>
      <p v-if="error || sessionError" role="alert">{{ error || sessionError }}</p>
      <p v-if="message" class="confirmation" role="status">{{ message }}</p>
      <button v-if="mode === 'signin'" class="text-button" :disabled="busy" @click="mode = 'reset'; error = ''; message = ''">Forgot password?</button>
      <div class="divider">or</div>
      <button class="secondary" :disabled="busy" @click="googleSignIn">Continue with Google</button>
      <button class="text-button" :disabled="busy" @click="mode = mode === 'signin' ? 'signup' : 'signin'; error = ''; message = ''; password = ''">{{ mode === 'signin' ? 'Create an account' : 'Back to sign in' }}</button>
      <button class="text-button guest-button" :disabled="busy" @click="visitor = { id: null, name: 'Guest' }">Continue as a Guest &rarr;</button>
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
