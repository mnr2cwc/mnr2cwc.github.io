import { computed, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type User } from 'firebase/auth'
import { getTripApp } from './firebase'
import { ensureAccountPerson } from './data/firestorePeople'
import { recordGuestEntry, recordMemberSignIn } from './data/activity'

export const visitor = ref<{ id: string | null; name: string } | null>(null)
export const authUser = ref<User | null>(null)
export const authReady = ref(false)
export const sessionError = ref('')
export const isNamedVisitor = computed(() => Boolean(authUser.value && visitor.value?.id === authUser.value.uid))
export const authFlowActive = ref(false)
let started = false

export async function activateAccount(user: User, recordSignIn = false) {
  authUser.value = user
  const person = await ensureAccountPerson(user)
  visitor.value = { id: user.uid, name: person.name }
  if (recordSignIn) {
    void recordMemberSignIn(user.uid).catch(() => {
      console.warn('The sign-in activity could not be recorded.')
    })
  }
}

export function continueAsGuest() {
  visitor.value = { id: null, name: 'Guest' }
  void recordGuestEntry().catch(() => {
    console.warn('The guest entry could not be recorded.')
  })
}


export function initializeSession() {
  if (started) return
  started = true
  try {
    onAuthStateChanged(getAuth(getTripApp()), async user => {
      authUser.value = user
      if (authFlowActive.value) { authReady.value = true; return }
      try {
        if (user) await activateAccount(user)
        else visitor.value = null
      } catch {
        sessionError.value = 'Signed in, but unable to load your guest profile. Check the connection and try signing in again.'
        visitor.value = null
      } finally { authReady.value = true }
    }, () => {
      sessionError.value = 'Unable to restore your session. Please reload and try again.'
      authReady.value = true
    })
  } catch {
    sessionError.value = 'Sign-in is not configured yet. You can continue as a guest.'
    authReady.value = true
  }
}

export async function leaveSession() {
  sessionError.value = ''
  try {
    if (authUser.value) await signOut(getAuth(getTripApp()))
    visitor.value = null
  } catch {
    sessionError.value = 'Unable to sign out. Please try again.'
  }
}
