import { getAuth } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { getTripApp, getTripDatabase } from '../firebase'
import { hasDeparturePreferences, normalizeDeparturePreferences, type DeparturePreferences } from '../flights/departurePreferences'

function reference(uid: string) {
  if (getAuth(getTripApp()).currentUser?.uid !== uid) throw new Error('Please sign in to manage your departure preferences.')
  return doc(getTripDatabase(), 'Trips', 'indonesia-2027', 'people', uid, 'private', 'travel')
}

export async function fetchDeparturePreferences(uid: string): Promise<DeparturePreferences | null> {
  const snapshot = await getDoc(reference(uid))
  if (!snapshot.exists()) return null
  const data = snapshot.data()
  if (!hasDeparturePreferences(data)) throw new Error('Your saved departure preferences could not be read. Please ask the organizer to check your account.')
  return { city: data.city, departureAirports: [...data.departureAirports] }
}

export async function saveDeparturePreferences(uid: string, input: DeparturePreferences): Promise<void> {
  const preferences = normalizeDeparturePreferences(input)
  if (!hasDeparturePreferences(preferences)) throw new Error('Enter a city and select 1–20 departure airports.')
  await setDoc(reference(uid), { ...preferences, updatedAt: serverTimestamp() })
}
