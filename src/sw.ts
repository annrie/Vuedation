/// <reference lib="webworker" />

import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching'
import {clientsClaim} from 'workbox-core'

self.addEventListener('install', (event) => {
  console.log('Inside the UPDATED install handler:', event)
})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  console.log('Inside the activate handler:', event)
})

self.addEventListener(fetch, (event) => {
  console.log('Inside the fetch handler:', event)
})

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
clientsClaim()
