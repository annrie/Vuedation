import {createStore} from 'vuex'
// import {layout} from '@/middleware/layout/fetch'
import {trackRouter} from 'vue-gtag-next'
// import type {Page} from '@/router'
import {ModalId, DispatchType} from '~/store/app.config'
// import * as Cookies from 'js-cookie'

// const debug = import.meta.env.MODE !== 'production'
// const debug = true
export const Page = {
  TOP: 'Top',
  ABOUT: 'About',
  AUTHOR: 'Author',
  PRODUCTIONNOTE: 'ProductionNote',
  FAQ: 'Faq',
  FORM: 'Form',
} as const

export default createStore({
  state: {
    nowPage: Page.TOP, //ページの現在地
    isMenuOpen: false, //メニューOPEN有無
    isModalOpen: false, //モーダルOPEN有無
    modalId: ModalId.NONE, //モーダルID
  },
  getters: {
    nowPage: (state) => state.nowPage,
    isMenuOpen: (state) => state.isMenuOpen,
    modalId: (state) => state.modalId,
    isModalOpen: (state) => state.isModalOpen,
  },
  mutations: {
    setPage(state, newPage) {
      if (newPage == 'TopNews') newPage = 'Top'
      state.nowPage = newPage
    },
    menuToggle(state) {
      state.isMenuOpen = !state.isMenuOpen
    },
    menuClose(state) {
      state.isMenuOpen = false
    },
    setModal(state, modalId) {
      state.modalId = modalId
    },
    modalOpen(state) {
      state.isModalOpen = true
    },
    modalClose(state) {
      state.isModalOpen = false
    },
  },
  actions: {
    async asyncLayout({state, commit, rootState}, data) {
      commit('setLayout', data)
    },
    setPage({commit}, newPage) {
      commit(DispatchType.SET_PAGE, newPage)
    },
    menuToggle({commit}) {
      commit(DispatchType.MENU_TOGGLE)
    },
    menuClose({commit}) {
      commit(DispatchType.MENU_CLOSE)
    },
    setModal({commit}, modalId) {
      commit(DispatchType.SET_MODAL, modalId)
    },
    modalOpen({commit}) {
      commit(DispatchType.MODAL_OPEN)
    },
    modalClose({commit}) {
      commit(DispatchType.MODAL_CLOSE)
    },
  },
  modules: {},
})
