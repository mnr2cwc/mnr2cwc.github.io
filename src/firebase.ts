import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

export function getTripApp() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
  const appId = import.meta.env.VITE_FIREBASE_APP_ID

  if (!apiKey || !projectId || !appId) {
    throw new Error('The guest list connection has not been configured yet.')
  }

  const app = getApps().find(app => app.name === 'trip') ?? initializeApp({
    apiKey,
    projectId,
    appId,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  }, 'trip')

  return app
}

export function getTripDatabase() {
  return getFirestore(getTripApp())
}
