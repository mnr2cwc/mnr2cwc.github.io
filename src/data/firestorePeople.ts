import { collection, doc, getDoc, getDocs, serverTimestamp, writeBatch } from 'firebase/firestore/lite'
import { getTripApp, getTripDatabase } from '../firebase'
import { getAuth, type User } from 'firebase/auth'

export type AttendanceStatus = 'invited' | 'committed' | 'interested'

export interface MyProfile {
  name: string
  status: AttendanceStatus
  phone: string
  email: string
}

function ownProfileReference() {
  const user = getAuth(getTripApp()).currentUser
  if (!user) throw new Error('Please sign in to edit your profile.')
  return doc(getTripDatabase(), 'Trips', 'indonesia-2027', 'people', user.uid)
}

export async function fetchMyProfile(): Promise<MyProfile> {
  const reference = ownProfileReference()
  const [person, contact] = await Promise.all([getDoc(reference), getDoc(doc(reference, 'private', 'contact'))])
  if (!person.exists()) throw new Error('Your profile could not be found.')
  const data = person.data()
  const details = contact.data() || {}
  return { name: data.name, status: data.status, phone: details.phone || '', email: details.email || '' }
}

export async function saveMyProfile(profile: MyProfile): Promise<void> {
  const reference = ownProfileReference()
  const name = profile.name.trim()
  if (!name || name.length > 120 || !['invited', 'committed', 'interested'].includes(profile.status)
    || profile.phone.trim().length > 40 || profile.email.trim().length > 254) {
    throw new Error('Check your name, status, and contact details.')
  }
  const batch = writeBatch(getTripDatabase())
  batch.update(reference, { name, status: profile.status, updatedAt: serverTimestamp() })
  batch.set(doc(reference, 'private', 'contact'), { phone: profile.phone.trim(), email: profile.email.trim() })
  await batch.commit()
}

export async function addPerson(name: string, status: AttendanceStatus, phone = '', email = ''): Promise<FirestorePerson> {
  const user = getAuth(getTripApp()).currentUser
  if (!user) throw new Error('Please sign in to add a person.')
  const trimmedName = name.trim()
  if (!trimmedName || trimmedName.length > 120
    || !['invited', 'committed', 'interested'].includes(status)) {
    throw new Error('Enter a name of 1–120 characters and select a status.')
  }
  const database = getTripDatabase()
  const document = doc(collection(database, 'Trips', 'indonesia-2027', 'people'))
  const batch = writeBatch(database)
  batch.set(document, {
    name: trimmedName, status, ownerUid: user.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
  })
  if (phone.trim() || email.trim()) {
    const contact: Record<string, string> = {}
    if (phone.trim()) contact.phone = phone.trim()
    if (email.trim()) contact.email = email.trim()
    batch.set(doc(document, 'private', 'contact'), contact)
  }
  // Commit both documents together so a contact failure cannot leave a partial entry.
  await batch.commit()
  return { id: document.id, name: trimmedName, status }
}

export interface FirestorePerson {
  id: string
  name: string
  status: AttendanceStatus
}

export async function fetchPeople(): Promise<FirestorePerson[]> {
  const snapshot = await getDocs(collection(getTripDatabase(), 'Trips', 'indonesia-2027', 'people'))

  return snapshot.docs.map(document => {
    const data = document.data()
    // Accept the original local list's spellings during migration.
    const status = data.status === 'commited' ? 'committed'
      : data.status === 'interest' ? 'interested' : data.status

    if (typeof data.name !== 'string' || !data.name.trim()
      || !['invited', 'committed', 'interested'].includes(status)) {
      throw new Error('A guest entry has an invalid name or status. Please check the guest list.')
    }

    return { id: document.id, name: data.name.trim(), status: status as AttendanceStatus }
  }).sort((a, b) => a.name.localeCompare(b.name))
}

// UID-based profiles never claim pre-existing attendees by name or email.
export async function ensureAccountPerson(user: User): Promise<FirestorePerson> {
  const database = getTripDatabase()
  const reference = doc(database, 'Trips', 'indonesia-2027', 'people', user.uid)
  const snapshot = await getDoc(reference)
  if (snapshot.exists()) {
    const data = snapshot.data()
    return { id: snapshot.id, name: data.name, status: data.status }
  }
  const name = (user.displayName || 'Traveler').trim().slice(0, 120)
  const batch = writeBatch(database)
  batch.set(reference, { name, status: 'interested', ownerUid: user.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  if (user.email) batch.set(doc(reference, 'private', 'contact'), { email: user.email })
  await batch.commit()
  return { id: reference.id, name, status: 'interested' }
}
