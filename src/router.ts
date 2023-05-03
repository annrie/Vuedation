import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import routes from '@/pages'
import store from '@/store'
import {DispatchType} from '@/store/app.config'
import Top from './pages/Index.vue'
// import Error404 from './pages/404.vue'
import {AppData} from '@/store/app.data'
// import {trackRouter} from 'vue-gtag-next'
// import log from '@/middleware/log'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top,
    meta: {
      // title: 'Topページ',
      // layout: 'default',
      description:
        'Vue.js 3.x完全対応！本書ではVue.jsの基礎はもちろん、実際の現場で使えるTipsを中心に解説しています。Vue.jsの実践スキルをこの一冊で身につける！',
    },
    children: [
      {
        path: 'news/:id',
        name: 'TopNews',
        props: true,
        component: () => import('./pages/TopNews.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue'),
    meta: {
      title: 'Aboutページ',
      // layout: 'default',
      description:
        '本書を徹底解剖！目次の紹介とともに、学んでいただきたい内容や意図をご紹介します。',
    },
  },
  {
    path: '/author',
    name: 'Author',
    component: () => import('./pages/Author.vue'),
    meta: {
      title: 'Authorページ',
      description:
        'Webと映像を融合して、世界にひとつのモノづくりを提供する。MONSTER DIVEは、「職人的なこだわりとオタク的な探究心」を持つプロフェッショナル＆スペシャリスト集団です。',
    },
  },
  {
    path: '/production-note',
    name: 'Production note',
    component: () => import('./pages/ProductionNote.vue'),
    meta: {
      title: 'ProductionNoteページ',
      description:
        '本書執筆にあたって、プロジェクト始動から販売/公開までの裏側をプロジェクトメンバーが会話形式で暴露しています。',
    },
  },
  {
    path: '/faq',
    name: 'Q&A',
    component: () => import('./pages/Faq.vue'),
    meta: {
      title: 'Faqページ',
      description: '本書やMONSTER DIVEについて、よくある質問とその回答をご紹介します。',
    },
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('./pages/Form.vue'),
    meta: {
      title: 'formkitページ',
      description: 'formkitのテストページ。',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('./pages/NotFound.vue'),
    meta: {
      title: 'NotFoundページ',
      description:
        'ページが見つかりません。お探しのページは、移動または削除された可能性があります。',
    },
  },
]
//TOP、NotFoundの削除の削除
export const menuRoutes = routes.slice(1, routes.length - 1)
export const breadRoutes = routes.slice(1, routes.length - 1)

// 循環参照になるため、@/store/index.tsに移した
// export const Page = {
//   TOP: 'Top',
//   ABOUT: 'About',
//   AUTHOR: 'Author',
//   PRODUCTIONNOTE: 'ProductionNote',
//   FAQ: 'Faq',
//   FORM: 'Form',
// } as const

const metaDescription = document.querySelector("meta[name='description']")
// const apiBaseUrl = import.meta.env.VITE_REMOTE_API_BASE_URL

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    //タイトルのセット
    if (to.meta.title) {
      document.title = to.meta.title + ' | ' + AppData.appTitle
    } else {
      document.title = AppData.appTitle
    }
    //ディスクリプションのセット
    if (metaDescription && to.meta.description) {
      metaDescription.setAttribute('content', to.meta.description)
    } else if (metaDescription) {
      metaDescription.setAttribute('content', '設定されていない場合のディスクリプション')
    }
    //現在ページのセット
    store.dispatch(DispatchType.SET_PAGE, to.name)

    if (to.hash) {
      return {el: to.hash}
    } else {
      return {left: 0, top: 0}
    }
  },
})
// trackRouter(router)

export default router
