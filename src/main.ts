// Import Vue stuff.
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createHead} from '@vueuse/head'
import {createAutoAnimatePlugin} from '@formkit/addons'
import {applicationIcons, ethereum} from '@formkit/icons'
import {plugin, defaultConfig} from '@formkit/vue'
import {generateClasses, createThemePlugin} from '@formkit/themes'
import '@formkit/themes/windicss'
import '@formkit/themes/unocss'
import theme from './theme'
import '@unocss/reset/tailwind.css'
import './styles'
import 'animate.css'
import 'uno.css'
// import VueGtag from 'vue-gtag-next'
// import VueLazyLoad from 'vue3-lazyload'
import Notifications from '@kyvg/vue3-notification'
import {registerSW} from 'virtual:pwa-register'
// import {defineRule} from 'vee-validate'
// import AllRules from '@vee-validate/rules'
import {faFileCode, faCircleUp, faFileCode} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faFacebook,
  faGithub,
  faVuejs,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {dom} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome'

library.add(
  far,
  faFileCode,
  faCircleUp,
  faGithub,
  faVuejs,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faFacebook
)
dom.watch()

// Object.keys(AllRules).forEach((rule) => {
//   defineRule(rule, AllRules[rule])
// })
const intervalMS = 60 * 60 * 1000

if (typeof window !== 'undefined') import('./pwa')

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
  onRegisteredSW(swUrl, r) {
    r &&
      setInterval(async () => {
        if (!(!r.installing && navigator)) return

        if ('connection' in navigator && !navigator.onLine) return

        const resp = await fetch(swUrl, {
          cache: 'no-store',
          'cache-control': 'no-cache',
        })

        if (resp?.status === 200) await r.update()
      }, intervalMS)
  },
})

const head = createHead()
createApp(App)
  .use(store)
  .use(router)
  .use(
    plugin,
    defaultConfig({
      icons: {
        ...applicationIcons,
        ethereum,
        formkit: ``,
      },
      config: {
        classes: generateClasses(theme),
      },
      plugins: [createAutoAnimatePlugin({}), createThemePlugin()],
    })
  )
  // .use(VueSocials)
  // .use(VueGtag, {id: 'GTM-MMZBBPV', router}) // https://cli.vuejs.org/guide/mode-and-env.html#environment-variables

  // .use(VueLazyLoad, {
  //   loading: '',
  //   error: '',
  //   lifecycle: {
  //     loading: (el: string) => {
  //       console.log('loading', el)
  //     },
  //     error: (el: string) => {
  //       console.log('error', el)
  //     },
  //     loaded: (el: string) => {
  //       console.log('loaded', el)
  //     },
  //   },
  // })
  .use(head)
  .use(Notifications)
  // .component('fa', FontAwesome)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layer-text', FontAwesomeLayersText)
  .mount('#app')

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     //今回はDocRoot以下をServiceWorkerのスコープとします
//     navigator.serviceWorker.register('/sw.js', {scope: './'}).then(
//       function (registration) {
//         // 登録成功
//         console.log('ServiceWorker registration successful with scope: ', registration.scope)
//       },
//       function (err) {
//         // 登録失敗
//         console.log('ServiceWorker registration failed: ', err)
//       }
//     )
//   })
// }
