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
.scrolltop {
  @apply fixed right-4 bottom-6 flex justify-center justify-center items-center p-2 bg-transparent rounded-lg z-3 delay-400 invisible;
  // position: fixed;
  // right: 1rem;
  // bottom: -20%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 0.5rem;
  // background-color: transparent;
  // // background-color: rgba(123 111 113 / 70%);
  // border-radius: 0.5rem;
  // z-index: 3;
  // transition: 0.4s;
  // visibility: hidden;

  &:hover {
    @apply bg-hex-f5f;
    // background-color: #f5f;
  }

  &__icon {
    @apply text-8xl;
    // font-size: 6rem;
    color: lighten(#f5f, 10%);
  }
}

.show-scroll {
  @apply visible bottom-14;
  // visibility: visible;
  // bottom: 1.5rem;
}
</style>
