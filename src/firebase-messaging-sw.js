importScripts('https://www.gstatic.com/firebasejs/8.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAsrbbkbZW5cMuxBZwj8FWo4ZLdCyIDW2c',
  projectId: 'vue3-9f68a',
  messagingSenderId: '855052531200',
  appId: '1:855052531200:web:dcca98c5b45a9149a10ae5',
})

const messaging = firebase.messaging()

// バックグラウンドでのプッシュ通知受信
messaging.setBackgroundMessageHandler(function (payload) {
  let notificationTitle = payload.notification.title
  let notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  }
  return self.registration.showNotification(notificationTitle, notificationOptions)
})
