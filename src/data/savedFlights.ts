import { getAuth } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore/lite'
import { validLegs, type FlightLeg } from '../flights/itinerary'
import { getTripApp, getTripDatabase } from '../firebase'

export interface FlightDetails {
  origin: string
  destination: string
  departure: string
  returnDate: string
  airline: string
  flightNumbers: string
  price: number
  currency: string
  link: string
  notes: string
  legs?: FlightLeg[]
  fareSummary?: string
}
export interface SavedFlight extends FlightDetails {
  id: string
  ownerUid: string
  savedAt: Date | null
}
const flights = () => collection(getTripDatabase(), 'Trips', 'indonesia-2027', 'flights')

export function safeFlightLink(link: string): string {
  try {
    const url = new URL(link)
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''
  } catch { return '' }
}
function validDate(value: string): boolean {
  const parsed = new Date(`${value}T00:00:00Z`)
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}
export async function saveFlight(input: FlightDetails): Promise<SavedFlight> {
  const user = getAuth(getTripApp()).currentUser
  if (!user) throw new Error('Please sign in to save a flight.')
  const data = { ...input, origin: input.origin.trim().toUpperCase(), destination: input.destination.trim().toUpperCase(),
    airline: input.airline.trim(), flightNumbers: input.flightNumbers.trim(), currency: input.currency.trim().toUpperCase(),
    link: input.link.trim(), notes: input.notes.trim(), legs: input.legs ?? [], fareSummary: input.fareSummary?.trim() ?? '' }
  if (!/^[A-Z]{3}$/.test(data.origin) || !/^[A-Z]{3}$/.test(data.destination) || data.origin === data.destination
    || !validDate(data.departure) || (data.returnDate !== '' && (!validDate(data.returnDate) || data.returnDate < data.departure))
    || !data.airline || data.airline.length > 120 || data.flightNumbers.length > 120
    || !Number.isFinite(data.price) || data.price <= 0 || data.price > 1000000 || !/^[A-Z]{3}$/.test(data.currency)
    || data.link.length > 2000 || (data.link !== '' && !safeFlightLink(data.link)) || data.notes.length > 2000
    || !validLegs(data.legs) || data.fareSummary.length > 240) {
    throw new Error('Check the airports, dates, airline, price, and HTTPS link before saving.')
  }
  const reference = await addDoc(flights(), { ...data, ownerUid: user.uid, savedAt: serverTimestamp() })
  return { ...data, id: reference.id, ownerUid: user.uid, savedAt: null }
}
export async function fetchSavedFlights(): Promise<SavedFlight[]> {
  const snapshot = await getDocs(query(flights(), orderBy('savedAt', 'desc'), limit(100)))
  return snapshot.docs.map(item => {
    const data = item.data()
    return { ...data, legs: validLegs(data.legs) ? data.legs : [], fareSummary: typeof data.fareSummary === 'string' ? data.fareSummary : '', id: item.id, savedAt: data.savedAt instanceof Timestamp ? data.savedAt.toDate() : null } as SavedFlight
  })
}
export async function removeSavedFlight(id: string): Promise<void> {
  await deleteDoc(doc(flights(), id))
}
