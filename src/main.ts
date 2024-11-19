// Import Vue stuff.
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import {createApp} from 'vue'
import App from './App.vue'
import Tabs from 'vue3-tabs';
import type { UserModule } from './types'
import router from './router'
import store from './store'
import {createHead} from '@vueuse/head'
import breadcrumbs from 'vue-3-breadcrumbs';
import {createAutoAnimatePlugin} from '@formkit/addons'
import {applicationIcons, ethereum} from '@formkit/icons'
import {plugin, defaultConfig} from '@formkit/vue'
import {generateClasses, createThemePlugin} from '@formkit/themes'
import formKitUnocssPlugin from '@formkit/themes/unocss'
import theme from './theme'
import '@unocss/reset/tailwind.css'
//import './styles/scss/index.scss'
//import './styles/scss/main.scss'
import 'animate.css'
import 'uno.css'
import 'virtual:unocss-devtools'
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
  .use(head)
 .use(breadcrumbs, {
    includeComponent: true
  })
  .use(Notifications)
  .use(Tabs)
  // .component('fa', FontAwesome)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layer-text', FontAwesomeLayersText)
  .mount('#app')
