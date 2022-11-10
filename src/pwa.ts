import type {Router} from 'vue-router'
export const registerPWA = (router: Router) => {
  router.isReady().then(async () => {
    const {registerSW} = await import('virtual:pwa-register')
    registerSW({immediate: true})
  })
}
