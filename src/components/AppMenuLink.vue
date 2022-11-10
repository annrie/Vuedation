<script lang="ts" setup>
import {withDefaults} from 'vue';
import store from "@/store";
import { DispatchType } from "@/store/app.config";

const props=withDefaults(
  defineProps<{
    href: string; // デフォルトでrequire:true
  }>(),
  {
    href: "/", // デフォルト値を設定
  },
);
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
.AppMenu__link {
  @apply font-semibold text-white inline-block align-top no-underline;
  // display: inline-block;
  // vertical-align: top;
  font-family: $FONT_EN;
  // font-weight: $FONT_WEIGHT_EN_BOLD;
  font-size: em(63, 16);
  line-height: 1.4;
  // color: #fff;
  // text-decoration: none;
  @include md(max) {
    font-size: em(40, 16);
  }
}
</style>
