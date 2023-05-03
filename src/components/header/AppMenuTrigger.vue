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
.AppHeader__trigger {
  @apply h-78px p-0 top-0 right-28px w-94px z-10 fixed;
  // position: fixed;
  // top: 0;
  // right: 28px;
  // z-index: 10;
  // width: 94px;
  // height: 78px;
  // padding: 0;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;

  @screen lt-md {
    @apply h-60px right-0 w-72px;
    // right: 0;
    // width: 72px;
    // height: 60px;
  }

  &:focus {
    outline: 2px solid $COLOR_MAIN;
    outline-offset: -2px;
  }
}

.AppHeader__triggerBar {
  @apply rounded-2px h-3px absolute;

  // position: absolute;
  left: 50%;

  // height: 3px;
  // border-radius: 2px;
  background-color: #fff;

  @screen lt-md {
    @apply h-2px;
    // height: 2px;
  }

  &.-top {
    @apply top-19px w-32px;

    // top: 19px;
    transform: translateX(-50%);

    // width: 32px;
    @screen lt-md {
      @apply top-19px w-20px;
      //   top: 19px;
      //   width: 20px;
    }

    .AppHeader.-open & {
      @apply top-32px;

      // top: 32px;
      transform: translateX(-50%) rotate(45deg);

      @screen lt-md {
        @apply top-27px;
        // top: 27px;
      }
    }
  }

  &.-center {
    @apply top-32px w-20px;

    // top: 32px;
    transform: translateX(-50%);

    // width: 20px;
    @screen lt-md {
      @apply top-27px w-14px;
      // top: 27px;
      // width: 14px;
    }

    .AppHeader.-open & {
      @apply opacity-0;
      // opacity: 0;
    }
  }

  &.-bottom {
    @apply top-45px w-32px;

    // top: 45px;
    transform: translateX(-50%);

    // width: 32px;
    @screen lt-md {
      @apply top-35px w-20px;
      // top: 35px;
      // width: 20px;
    }

    .AppHeader.-open & {
      @apply top-32px;

      // top: 32px;
      transform: translateX(-50%) rotate(-45deg);

      @screen lt-md {
        @apply top-27px;
        // top: 27px;
      }
    }
  }
}
</style>
