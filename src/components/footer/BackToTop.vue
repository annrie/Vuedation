<template>
  <div>
    <a
      href="#main"
      data-smooth-scroll
      class="scrolltop"
      :class="{ 'show-scroll': scrollHeader }"
      @click="scrollTop"
    >
      <font-awesome-icon icon="circle-up" size="3x" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const scrollHeader = ref(false);

function showScrollTop() {
  if (window.scrollY >= 560) {
    scrollHeader.value = true;
  } else {
    scrollHeader.value = false;
  }
}

function scrollTop() {
  if (window.scrollY >= 560) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
onMounted(() => {
  window.addEventListener("scroll", showScrollTop, { passive: true });
});
</script>

<style lang="scss" scoped>
@use 'sass:color';
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;


.scrolltop {
  @apply fixed right-4 bottom-6 flex justify-center justify-center items-center p-2 bg-transparent rounded-lg z-3 delay-400 invisible;

  &:hover {
    background-color: #f5f;
  }

  &__icon {
    @apply text-8xl;
    color: color.adjust(#f5f, $lightness: 10%);
  }
}

.show-scroll {
  @apply visible bottom-14;
}
</style>
