<template>
  <div class="App" :class="{ '-home': isTop }" :data-page="nowPage">
    <AppHeader />
    <main id="main" class="Main">
      <AppHero :nowPage="nowPage" />
      <router-view />
    </main>
    <!-- <TheFooter /> -->
    <AppFooter />
    <CurrentBreakpoint />
    <!-- <ReloadPWA /> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";
import { Page } from "@/store";
import router from "@/router";
import AppHeader from "@/components/AppHeader.vue";
import AppHero from "@/components/AppHero.vue";
// import TheFooter from "@/components/TheFooter.vue";
import AppFooter from "@/components/AppFooter.vue";
import CurrentBreakpoint from "@/components/CurrentBreakpoint.vue";
// import {credentials} from '@/firebase/credentials'
// import ReloadPWA from "@/components/ReloadPWA.vue";
// import { useHead } from "@vueuse/head";
// import { isDark, preferredDark } from "@/composables/dark";
// useHead({
//   title: "Vuedation",
//   meta: [
//     // { name: "description", content: "Vuedation(Vue3 with Vite)による仮想書店サイト" },
//     {
//       name: "theme-color",
//       content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
//     },
//   ],
// link: [
//   {
//     rel: "icon",
//     type: "image/svg+xml",
//     href: computed(() => (preferredDark.value ? "/favicon-dark.svg" : "/safari-pinned-tab.svg")),
//   },
// ],
// });

const nowPage = computed(() => store.getters.nowPage);
const isTop = computed(() => router.currentRoute.value.name === Page.TOP);
</script>

<style lang="scss">
.App {
  // @apply container mx-auto pt-80px;
  @apply pt-80px;
  // padding-top: 80px;

  @include md(max) {
    @apply pt-70px;
    // padding-top: 70px;
  }
}

// .dg.ac {
//   @apply right-1/4 z-1;
//   // z-index: 1;
//   // right: 25%;
// }
</style>
