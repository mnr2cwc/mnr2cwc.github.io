import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { getTripDatabase } from '../firebase'

export async function recordGuestEntry() {
  await addDoc(collection(getTripDatabase(), 'Trips', 'indonesia-2027', 'guestEntries'), {
    enteredAt: serverTimestamp(),
  })
}

export async function recordMemberSignIn(uid: string) {
  await setDoc(doc(getTripDatabase(), 'Trips', 'indonesia-2027', 'memberActivity', uid), {
    lastSignedInAt: serverTimestamp(),
  })
}
