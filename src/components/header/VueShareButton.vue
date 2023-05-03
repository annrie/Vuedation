<!-- https://mebee.info/2021/07/15/post-38818/ -->
<template>
  <div class="ShareButton">
    <TwitterButton
      url="https://vuedation.phantomoon.com/"
      class="share-button--circle share-button--outline"
      shareDescription="Vue + Vite で構築した仮想書籍サイトです"
      btnText=""
    />
    <FacebookButton
      url="https://vuedation.phantomoon.com/"
      class="share-button--circle share-button--outline"
      title="Vuedation"
      quote="Vue + Vite で構築した仮想書籍サイトです"
      btnText=""
    />
    <LinkedInButton
      url="https://vuedation.phantomoon.com/"
      class="share-button--circle share-button--outline"
      btnText=""
    />
    <!-- https://postsrc.com/code-snippets/how-to-add-dark-mode-toggle-in-vuejs -->
    <div class="bg-transparent rounded-lg w-auto p-4 pt-6 inline-flex at-tb:(pt-4)">
      <label for="toggle" class="cursor-pointer inline-flex relative items-center">
        <input
          type="checkbox"
          id="toggle"
          class="sr-only peer"
          :checked="isDark"
          @click="toggleDark()"
        />
        <div
          class="rounded-full bg-slate-200 h-6 w-11 peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-slate-300 dark:bg-slate-300 dark:peer-focus:ring-indigo-300 ''] after:absolute at-tb:(after:top-[2px] after:left-[2px]) lg:(after:-top-[10px] after:left-[2px]) after:bg-white dark:bg-slate-500 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-400 peer-checked:bg-indigo-600"
        ></div>
      </label>
    </div>
    <button class="mx-2 icon-btn !outline-none" @click="toggleDark()">
      <div class="inline-block align-super bg-black-100 mt-0 dark:bg-light-100" i="carbon-sun dark:carbon-moon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import TwitterButton from "vue-share-buttons/src/components/TwitterButton.vue";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton.vue";
import LinkedInButton from "vue-share-buttons/src/components/LinkedInButton.vue";
import { useToggle } from "@vueuse/shared";
import { isDark } from "@/composables/dark";

const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.ShareButton {
  @screen lg {
  @apply flex font-mono h-34px mr-10px ml-30px text-hex-2c3e50 inline-block justify-center antialiased ml-[10%] left-[50%] translate-x-[50%] absolute;
  }
}
@screen at-tb{
.ShareButton {
  @apply ml-[10%] left-[50%] -translate-x-[50%] absolute;
  // --uno: ml-[10%] left-[50%] -translate-x-[50%] absolute;
  }
}
@screen lt-md {
.ShareButton {
  @apply hidden;
  // --uno: h-8px mx-auto -mt-10 text-xs;
  }
}
.share-button--circle {
  @apply rounded-[50%] leading-none;
}
</style>
