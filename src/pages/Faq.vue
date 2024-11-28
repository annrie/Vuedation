<script setup lang="ts">
import PageAccordion from "@/components/pages/PageAccordion.vue";
import { AppData } from "@/store/app.data";

const faqData = AppData.faqDataList;
</script>

<template>
<AmBreadcrumbs
    :showCurrentCrumb="true"
/>
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
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.QA {
  @apply mx-auto mt-36px mb-0 max-w-1000px;

  @screen lt-xl {
    @apply py-0 px-20px;
  }
}

.QA__heading {
  @apply m-0;
  font-size: em(30, 16);
  color: var(--COLOR_MAIN);
  font-weight: var(--FONT_WEIGHT_BASE_DEMIBOLD);
  @screen lt-lg {
    font-size: em(24, 16);
  }
}

.QA__contents {
  @apply mt-[60px];

  @screen lt-lg {
    @apply mt-[20px];
  }
}

.QA__item {
  @apply dark:bg-dark-200;

  & + & {
    @apply mt-[20px];
  }
}

.Accordion__text {
  @apply m-0 relative dark:text-white;
  line-height: 1.875;

  @screen lt-tb {
    font-size: em(14, 16);
    line-height: 1.64;
  }

  &::before {
    @apply h-22px top-1/2 -left-64px w-23px -translate-y-1/2 absolute content-empty;
    background-image: url($PATH + "faq-a.svg");
    background-repeat: no-repeat;
    background-size: 100%;

    @screen lt-tb {
      @apply h-20px top-6px -left-40px w-21px;
    }
  }

  ::v-deep(a) {
    color: var(--COLOR_MAIN);

    &:hover {
      @apply no-underline;
    }
  }
}
</style>
