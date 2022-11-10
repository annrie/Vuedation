<script setup lang="ts">
import PageBreadcrumbs from "@/components/pages/PageBreadcrumbs.vue";
import PageAccordion from "@/components/pages/PageAccordion.vue";
import { AppData } from "@/store/app.data";

const faqData = AppData.faqDataList;
</script>

<template>
  <PageBreadcrumbs label="Q&A" />
  <section class="QA">
    <h2 class="QA__heading">よくある質問</h2>
    <div class="QA__contents">
      <div v-for="data of faqData" :key="data.question" class="QA__item">
        <PageAccordion>
          <template #head>
            <span v-html="data.question"></span>
          </template>
          <template #body>
            <span class="Accordion__text" v-html="data.answer"></span>
          </template>
        </PageAccordion>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.QA {
  @apply mx-auto mt-36px mb-0 max-w-1000px;

  // max-width: 1000px;
  // margin: 36px auto 0;
  @include lg(max) {
    @apply py-0 px-20px;
    // padding: 0 20px;
  }
}

.QA__heading {
  @apply font-semibold m-0 text-hex-42b883;

  // margin: 0;
  font-size: em(30, 16);

  // color: $COLOR_MAIN;
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  @include md(max) {
    font-size: em(24, 16);
  }
}

.QA__contents {
  @apply mt-[60px];

  // margin-top: 60px;
  @include md(max) {
    @apply mt-[20px];
    // margin-top: 20px;
  }
}

.QA__item {
  @apply dark: bg-dark-200 ;

  & + & {
    @apply mt-[20px];
    // margin-top: 20px;
  }
}

.Accordion__text {
  @apply m-0 relative dark: text-white ;
  // position: relative;
  // margin: 0;
  line-height: 1.875;

  @include md(max) {
    font-size: em(14, 16);
    line-height: 1.64;
  }

  &::before {
    @apply h-22px top-1/2 -left-64px w-23px -translate-y-1/2 absolute;
    content: "";
    // position: absolute;
    // top: 50%;
    // left: -64px;
    // transform: translateY(-50%);
    // width: 23px;
    // height: 22px;
    background-image: url($PATH + "faq-a.svg");
    background-repeat: no-repeat;
    background-size: 100%;

    @include md(max) {
      @apply h-20px top-6px -left-40px w-21px;
      // top: 6px;
      // left: -40px;
      // width: 21px;
      // height: 20px;
    }
  }

  ::v-deep(a) {
    @apply text-hex-42b883;
    // color: $COLOR_MAIN;

    &:hover {
      @apply no-underline;
      // text-decoration: none;
    }
  }
}
</style>
