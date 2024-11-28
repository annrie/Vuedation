<script setup lang="ts">
import PageBanner from "@/components/footer/PageBanner.vue";
import BackToTop from "@/components/footer/BackToTop.vue";
import FontAwesome from "@/components/footer/FontAwesome.vue";

const thisYear = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    <PageBanner />
    <BackToTop />
    <FontAwesome />
    <footer class="AppFooter"> Copyright &copy; 2020 - {{ thisYear }} vuedation project. All Rights Reserved. </footer>
  </div>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.AppFooter {
  @apply mt-120px text-center text-white py-21px px-0;
  font-weight: var(--FONT_WEIGHT_BASE_BOLD);
  font-size: em(12, 16);
  background-color:var(--COLOR_BASE);
  line-height: 1.5;

  @screen lt-md {
    @apply mt-60px;
    font-size: em(10, 16);
  }
}
</style>
