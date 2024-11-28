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
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.AppMenu {
  @apply flex top-0 right-0 bottom-0 left-0 z-2 fixed items-center invisible;

  .AppHeader.-open & {
    @apply visible;
  }
}

.AppMenu__inner {
  @apply z-2 relative;
  padding-left: vw(700, 1280);

  @screen lt-tb {
    @apply h-full w-full px-0 pt-278px pb-0 box-border;
  }
}

.AppMenu__list {
}

.AppMenu__item {
  @screen lt-tb {
    @apply text-center;
  }
}

.AppMenu__logo {
  @apply flex rounded-[50%] top-1/2 absolute justify-center;
  left: vw(170, $XL);
  transform: translateY(-50%);
  width: vw(420, $XL);
  height: vw(420, $XL);

  background-color: #fff;

  @screen lt-tb {
    @apply h-158px top-100px left-1/2 w-158px translate-x--50%;
  }
}

.AppMenu__logoImage {
  width: vw(322, $XL);
  padding-top: vw(106, $XL);

  @screen lt-tb {
    @apply pt-38px w-120px;
  }
}
</style>
