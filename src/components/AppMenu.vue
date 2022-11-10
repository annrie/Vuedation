<script setup lang="ts">
import { ref } from "vue";
import AppMenuLink from "@/components/AppMenuLink.vue";
import { menuRoutes } from "@/router";
// import {getStatic} from '@/modules/image'

const href = ref(null);
const pages = ref(menuRoutes);
// const images = {
//   public: [
//     {
//       src: 'texture/logo-vue.svg',
//       alt: 'ロゴ：Vue.js'
//     }
//   ]
// }
// export default defineComponent({
// name: 'AppMenu',
// components: {
//   AppMenuLink,
// },
// data() {
//   return {
//     href: '',
//     pages: menuRoutes,
//   }
// },
// })
</script>

<template>
  <div class="AppMenu">
    <div class="AppMenu__inner">
      <div class="AppMenu__list">
        <div v-for="page in pages" :key="page.path" class="AppMenu__item" role="listitem">
          <AppMenuLink :href="page.path">{{ page.name }}</AppMenuLink>
        </div>
      </div>
      <div class="AppMenu__logo">
        <div class="AppMenu__logoImage">
          <img src="/static/texture/logo-vuedation.svg" alt="ロゴ：Vuedation.js" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// '!' use from https: //bytemeta.vip/repo/windicss/vite-plugin-windicss/issues/218
.AppMenu {
  @apply flex top-0 right-0 bottom-0 left-0 z-2 fixed items-center invisible;
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // z-index: 2;
  // display: flex;
  // align-items: center;
  // visibility: hidden;

  .AppHeader.-open & {
    @apply visible;
    // visibility: visible;
  }
}

.AppMenu__inner {
  @apply z-2 relative;
  // position: relative;
  // z-index: 2;
  padding-left: vw(700, $XL);

  @include md(max) {
    @apply h-full w-full px-0 pt-278px pb-0 box-border;
    // width: 100%;
    // height: 100%;
    // padding: 278px 0 0;
    // box-sizing: border-box;
  }
}

.AppMenu__list {
}

.AppMenu__item {
  @include md(max) {
    @apply text-center;
    // text-align: center;
  }
}

.AppMenu__logo {
  @apply flex rounded-[50%] top-1/2 absolute justify-center;
  // position: absolute;
  // top: 50%;
  left: vw(170, $XL);
  transform: translateY(-50%);
  width: vw(420, $XL);
  height: vw(420, $XL);

  // display: flex;
  // justify-content: center;
  background-color: #fff;

  // border-radius: 50%;
  @include md(max) {
    @apply h-158px top-100px left-1/2 w-158px;
    // top: 100px;
    // left: 50%;
    transform: translateX(-50%);
    // width: 158px;
    // height: 158px;
  }
}

.AppMenu__logoImage {
  width: vw(322, $XL);
  padding-top: vw(106, $XL);

  @include md(max) {
    @apply pt-38px w-120px;
    // width: 120px;
    // padding-top: 38px;
  }
}
</style>
