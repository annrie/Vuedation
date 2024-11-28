<script lang="ts" setup>
//import {withDefaults} from 'vue';
import store from "@/store";
import { DispatchType } from "@/store/app.config";

interface Props {
    href: string; // デフォルトでrequire:true
};

const props = defineProps<Props>();

//const props=withDefaults(
//  defineProps<{
 //   href: string; // デフォルトでrequire:true
 // }>(),
 // {
 //   href: "/", // デフォルト値を設定
 // },
//);

const onClickMenuClose = () => {
  store.dispatch(DispatchType.MENU_CLOSE);
};
</script>

<template>
  <router-link :to="href" class="AppMenu__link">
    <span @click="onClickMenuClose">
      <slot />
    </span>
  </router-link>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.AppMenu__link {
  @apply text-white inline-block align-top no-underline;
  font-family: var(--FONT_EN);
  font-weight: var(--FONT_WEIGHT_EN_BOLD);
  font-size: em(63, 16);
  line-height: 1.4;
  @screen lt-tb {
    @apply text-2.50em;
    font-size: em(40, 16);
  }
}
</style>
