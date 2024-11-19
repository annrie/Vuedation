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
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.PageBanner {
  @apply mt-120px;

  @screen lt-tb {
    @apply mt-60px;
  }
}

.PageBanner__inner {
  @apply mx-auto my-0 max-w-1000px py-0 px-20px;
}

.PageBanner__list {
  @apply my-0 -mx-13px p-0;

  @screen md {
    @apply flex justify-center;
  }

  @screen lt-tb {
    @apply m-0;
  }
}

.PageBanner__item {
  @apply list-none py-0 px-13px w-1/2 box-border;

  @screen lt-tb {
    @apply text-center w-full p-0;
  }

  &:not(:last-child) {
    @screen lt-tb {
      @apply mb-15px;
    }
  }

  // }

  > a {
    @apply border-solid border-4 border-emerald-200 rounded-10px transition-shadow ease-linear duration-150 overflow-hidden block box-border dark: border-dark-200 ;
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

    @screen lt-tb {
      @apply max-w-340px inline-block align-top;
    }

    &:hover {
      @apply dark: bg-light-50 ;
      box-shadow: 3px 3px 24px rgba(#d9e6bd, 0.9);
    }
  }
}
</style>
