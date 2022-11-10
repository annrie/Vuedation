<script lang="ts">
import { defineComponent } from "vue";
import { AppData } from "@/store/app.data";

export default defineComponent({
  name: "PageBanner",
  data() {
    return {
      bannerData: AppData.bannerDataList,
    };
  },
});
</script>

<template>
  <aside class="PageBanner">
    <div class="PageBanner__inner">
      <ul class="PageBanner__list">
        <li v-for="banner of bannerData" :key="banner.src" class="PageBanner__item">
          <a :href="banner.href" target="_blank" rel="noopener noreferrer">
            <img :src="banner.src" :alt="banner.alt" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.PageBanner {
  @apply mt-120px;

  @include md(max) {
    @apply mt-60px;
  }
}

.PageBanner__inner {
  @apply mx-auto my-0 max-w-1000px py-0 px-20px;
}

.PageBanner__list {
  @apply my-0 -mx-13px p-0;

  @include md(min) {
    @apply flex justify-center;
  }

  @include md(max) {
    @apply m-0;
  }
}

.PageBanner__item {
  @apply list-none py-0 px-13px w-1/2 box-border;

  @include md(max) {
    @apply text-center w-full p-0;
  }

  &:not(:last-child) {
    @include md(max) {
      @apply mb-15px;
    }
  }

  // }

  > a {
    @apply border-solid border-4 border-emerald-200 rounded-10px transition-shadow ease-linear duration-150 overflow-hidden block box-border dark: border-dark-200 ;
    box-shadow: $SHADOW_BASE;

    @include md(max) {
      @apply max-w-340px inline-block align-top;
      // max-width: 340px;
      // display: inline-block;
      // vertical-align: top;
    }

    &:hover {
      @apply dark: bg-light-50 ;
      box-shadow: $SHADOW_HOVER;
    }
  }
}
</style>
