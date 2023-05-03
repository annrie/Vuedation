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
.AppFooter {
  @apply bg-hex-35495e mt-120px text-center text-white py-21px px-0;
  // margin-top: 120px;
  // padding: 21px 0;
  // font-weight: $FONT_WEIGHT_BASE_BOLD;
  font-size: em(12, 16);
  line-height: 1.5;

  // text-align: center;
  // color: #fff;
  // background-color: #35495e;
  @screen lt-md {
    @apply mt-60px;
    // margin-top: 60px;
    font-size: em(10, 16);
  }
}
</style>
