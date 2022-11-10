import firebase from 'firebase/compat/app'
import {credentials} from './credentials'
// import 'firebase/messaging'
// import 'firebase/firestore'

export const FirebaseApp: firebase.app.App = firebase.initializeApp(credentials.config)

// export const messaging = firebase.messaging()
// // Add the public key generated from the console here.
// messaging.getToken({
//   vapidKey: credentials.messagingConfig.vapidKey,
// })

// Firestore使用準備
// const db = firebase.firestore()
// const dbName = 'vue3'

// export const usersRef = db.collection(dbName)
