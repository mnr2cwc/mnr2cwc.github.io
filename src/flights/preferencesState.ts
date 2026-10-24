import { computed, ref } from 'vue'
import { hasDeparturePreferences, normalizeDeparturePreferences, type DeparturePreferences } from './departurePreferences'

interface Repository {
  load: (uid: string) => Promise<DeparturePreferences | null>
  save: (uid: string, preferences: DeparturePreferences) => Promise<void>
}

// Share state across Profile and Flights, while keeping late requests from a
// previous account (or an earlier load) from replacing the active user's data.
export function createPreferencesState(repository: Repository) {
  const uid = ref<string | null>(null)
  const preferences = ref<DeparturePreferences | null>(null)
  const loaded = ref(false)
  const loading = ref(false)
  const saving = ref(false)
  const error = ref('')
  let generation = 0
  let loadVersion = 0
  let pending: Promise<void> | null = null
  function setUser(userId: string | null) {
    if (userId === uid.value) return
    generation++; loadVersion++
    uid.value = userId
    preferences.value = null; loaded.value = false; loading.value = false; saving.value = false; error.value = ''; pending = null
  }
  function load(force = false): Promise<void> {
    if (!uid.value) return Promise.resolve()
    if (pending) return pending
    if (loaded.value && !force) return Promise.resolve()
    const userId = uid.value, session = generation, version = ++loadVersion
    loading.value = true; error.value = ''
    pending = (async () => {
      try {
        const data = await repository.load(userId)
        if (session !== generation || version !== loadVersion) return
        preferences.value = data
        loaded.value = true
      } catch {
        if (session === generation && version === loadVersion) {
          loaded.value = false
          error.value = 'Unable to load your departure preferences. Please check your connection and try again.'
        }
      } finally {
        if (session === generation && version === loadVersion) { loading.value = false; pending = null }
      }
    })()
    return pending
  }
  async function save(input: DeparturePreferences) {
    if (!uid.value) throw new Error('Please sign in to save your departure preferences.')
    if (saving.value) throw new Error('Your departure preferences are already being saved.')
    const data = normalizeDeparturePreferences(input)
    if (!hasDeparturePreferences(data)) throw new Error('Enter a city and select 1–20 departure airports.')
    const userId = uid.value, session = generation
    ++loadVersion
    pending = null; loading.value = false; saving.value = true
    try {
      await repository.save(userId, data)
      if (session !== generation) throw new Error('Your account changed. Please sign in and try again.')
      preferences.value = data; loaded.value = true; error.value = ''
    } finally { if (session === generation) saving.value = false }
  }
  const ready = computed(() => Boolean(uid.value && loaded.value && !loading.value && !error.value && hasDeparturePreferences(preferences.value)))
  return { uid, preferences, loaded, loading, saving, error, ready, setUser, load, save }
}
