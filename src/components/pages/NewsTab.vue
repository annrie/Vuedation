<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NewsData, NewsCategories } from "@/store/app.config";
import NewsList from "@/components/pages/NewsList.vue";

export default defineComponent({
  name: "NewsTab",
  components: {
    NewsList,
  },
  props: {
    newsData: {
      type: Object as PropType<NewsData[]>,
      required: true,
    },
    newsCategories: {
      type: Object as PropType<NewsCategories[]>,
      required: true,
    },
  },
  data() {
    return {
      selectCategory: 0,
    };
  },
  methods: {
    selectTab(tabName: number) {
      if (this.selectCategory !== tabName) this.selectCategory = tabName;
    },
  },
});
</script>

<template>
  <div class="News__tabs">
    <div class="News__tabList" role="tablist" aria-label="ニュース">
      <button
        v-for="data in newsCategories"
        :key="data.name"
        type="button"
        role="tab"
        class="News__tab"
        :class="{ '-active': selectCategory === (data.slug === 'all' ? 0 : data.id) }"
        @click="selectTab(data.slug === 'all' ? 0 : data.id)"
      >
        {{ data.name }}
      </button>
    </div>
    <NewsList
      :select-category="selectCategory"
      :news-data="newsData"
      :news-categories="newsCategories"
    />
  </div>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.News__tabs {
  @apply mt-30px;

  @screen lt-tb {
    @apply mt-15px;
  }
}

.News__tabList {
  @apply flex justify-between;
}

.News__tab {
  @apply py-24px px-0 rounded-none border-0 border-none rounded-10px cursor-pointer;
  width: calc((100% - 70px) / 3);
  font-family:var(--FONT_EN);
  font-size: em(20, 16);
  line-height: 1.6;
  color: var(--COLOR_MAIN);
  background-color: #fbfdf5;
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
  transition: box-shadow var(--SEC) ease;

  @screen lt-tb {
    @apply py-8px px-0 rounded-5px;
    width: calc((100% - 35px) / 3);
    font-size: em(15, 16);
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
  }

  &:hover {
    box-shadow: 3px 3px 24px rgba(#d9e6bd, 0.9);
  }

  &.-active {
    @apply text-white;
    background-color: var(--COLOR_MAIN);
  }
}
</style>
