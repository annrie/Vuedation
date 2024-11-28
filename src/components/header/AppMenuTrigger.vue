<script lang="ts" setup>
import store from "@/store";
import { DispatchType } from "@/store/app.config";
// import {computed} from 'vue'

// export default defineComponent({
//   name: 'AppMenuTrigger',
//   methods: {
const onClickMenuToggle = () => {
  store.dispatch(DispatchType.MENU_TOGGLE);
};
//   },
// })
</script>

<template>
  <button type="button" class="AppHeader__trigger" @click="onClickMenuToggle">
    <span class="_VisuallyHidden">メニューを開く</span>
    <span class="-top AppHeader__triggerBar"></span>
    <span class="AppHeader__triggerBar -center"></span>
    <span class="-bottom AppHeader__triggerBar"></span>
  </button>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.AppHeader__trigger {
  @apply h-78px p-0 top-0 right-28px w-94px z-10 fixed bg-transparent border-none border-0 cursor-pointer;

  @screen lt-tb {
    @apply h-60px right-0 w-72px;
  }

  &:focus {
    outline: 2px solid var(--COLOR_MAIN);
    outline-offset: -2px;
  }
}

.AppHeader__triggerBar {
  @apply rounded-2px h-3px absolute left-50% bg-white;

  @screen lt-tb {
    @apply h-2px;
  }

  &.-top {
    @apply top-19px w-32px translate-x--50%;

    @screen lt-tb {
      @apply top-19px w-20px;
    }

    .AppHeader.-open & {
      @apply top-32px translate-x--50% rotate-45deg;

      @screen lt-tb {
        @apply top-27px;
      }
    }
  }

  &.-center {
    @apply top-32px w-20px translate-x--50%;

    @screen lt-tb {
      @apply top-27px w-14px;
    }

    .AppHeader.-open & {
      @apply opacity-0;
    }
  }

  &.-bottom {
    @apply top-45px w-32px translate-x--50%;

    @screen lt-tb {
      @apply top-35px w-20px;
    }

    .AppHeader.-open & {
      @apply top-32px translate-x--50% rotate--45deg;

      @screen lt-md {
        @apply top-27px;
      }
    }
  }
}
</style>
