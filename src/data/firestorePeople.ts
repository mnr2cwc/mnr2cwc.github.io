import { collection, doc, getDocs, serverTimestamp, writeBatch } from 'firebase/firestore/lite'
import { getTripDatabase } from '../firebase'

export type AttendanceStatus = 'invited' | 'committed' | 'interested'

export async function addPerson(name: string, status: AttendanceStatus, phone = '', email = ''): Promise<FirestorePerson> {
  const trimmedName = name.trim()
  if (!trimmedName || trimmedName.length > 120
    || !['invited', 'committed', 'interested'].includes(status)) {
    throw new Error('Enter a name of 1–120 characters and select a status.')
  }
  const database = getTripDatabase()
  const document = doc(collection(database, 'Trips', 'indonesia-2027', 'people'))
  const batch = writeBatch(database)
  batch.set(document, {
    name: trimmedName, status, createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
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
