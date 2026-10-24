import { watch } from 'vue'
import { authUser } from './visitor'
import { fetchDeparturePreferences, saveDeparturePreferences } from './data/departurePreferences'
import { createPreferencesState } from './flights/preferencesState'

export const departurePreferences = createPreferencesState({ load: fetchDeparturePreferences, save: saveDeparturePreferences })
// Account creation/sign-in only resets state. Preferences are read when the user
// visits Flights or Profile, so registration never depends on travel setup.
watch(() => authUser.value?.uid ?? null, uid => departurePreferences.setUser(uid), { immediate: true, flush: 'sync' })
