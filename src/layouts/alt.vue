<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";
import { Page } from "@/store";
import router from "@/router";
import AppHeader from "@/components/AppHeader.vue";
// import AppHero from "@/components/AppHero.vue";
import AppFooter from "@/components/AppFooter.vue";
import CurrentBreakpoint from "@/components/CurrentBreakpoint.vue";
// import {credentials} from '@/firebase/credentials'

const nowPage = computed(() => store.getters.nowPage);
const isTop = computed(() => router.currentRoute.value.name === Page.TOP);
</script>

<template>
  <div class="App" :class="{ '-home': isTop }" :data-page="nowPage">
    <AppHeader />
    <main id="main" class="Main">
      <!-- <AppHero :nowPage="nowPage" /> -->
      <router-view />
    </main>
    <AppFooter />
    <CurrentBreakpoint />
  </div>
</template>

<style lang="scss">
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.App {
  // @apply container mx-auto pt-80px;
  @apply bg-light-100 pt-80px;

  @screen lt-md {
    @apply pt-70px;
  }
}
.main {
  @apply container mx-auto;
}

.dg.ac {
  @apply right-1/4 z-1;
}
</style>
