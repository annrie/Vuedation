import {Credentials} from './types/credentials'

export const credentials: Credentials = {
  config: {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STRAGE_BUCKET,
    databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
    // messagingSenderId: import.meta.env.VITE_APP_MESSAGEING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
  },
  // messagingConfig: {
  //   vapidKey:
  //     import.meta.env.VITE_APP_VAPID_KEY,
  // },
}
