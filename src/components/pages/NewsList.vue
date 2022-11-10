<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { NewsCategories, NewsData } from "@/store/app.config";
import { getCategoryNewsData, getDataDateTime, findObjectByKey } from "@/store/app.utils";

export default defineComponent({
  name: "NewsList",
  props: {
    newsData: {
      type: Object as PropType<NewsData[]>,
      required: true,
    },
    newsCategories: {
      type: Object as PropType<NewsCategories[]>,
      required: true,
    },
    selectCategory: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // フィルタリング
    const filteredData = computed(() => {
      return getCategoryNewsData(props.newsData, props.selectCategory);
    });
    return { filteredData };
  },
  methods: {
    getDateTime(dateStr: string): string {
      return getDataDateTime(dateStr);
    },
    findObjectByKey(categories: object[], key: keyof object, value: string): object {
      return findObjectByKey(categories, key, value);
    },
  },
});
</script>

<template>
  <div class="News__tabPanel">
    <ul class="News__list">
      <li v-for="data in filteredData" :key="data.title.rendered" class="News__item">
        <span class="News__itemInfo">
          <time class="News__itemDate" :datetime="getDateTime(data.date)">
            {{ getDateTime(data.date) }}
          </time>
          <span class="News__itemCategory">
            {{ findObjectByKey(newsCategories, "id", data.categories[0]).name }}
          </span>
        </span>
        <router-link
          :to="{ path: '/news/' + data.id, hash: '#News' }"
          class="News__itemTitle"
        >
          {{ data.title.rendered }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.News__tabPanel {
  @apply mt-30px;

  // margin-top: 30px;
  @include md(max) {
    @apply mt-15px;
    // margin-top: 15px;
  }
}

.News__list {
  @apply m-0 p-0 list-none;
  // margin: 0;
  // padding: 0;
  // list-style-type: none;
}

.News__item {
  @apply py-26px px-30px text-base bg-white;
  // padding: 26px 30px;
  // font-size: 1rem;
  // background-color: #fff;
  box-shadow: $SHADOW_BASE;

  @include md(min) {
    @apply flex align-baseline;
    // display: flex;
    // align-items: baseline;
  }

  @include md(max) {
    @apply pt-16px pb-20px px-20px;
    // padding: 16px 20px 20px;
  }

  &:not(:first-child) {
    @apply mt-10px;

    // margin-top: 10px;
    @include md(max) {
      @apply mt-20px;
      // margin-top: 20px;
    }
  }
}

.News__itemInfo {
  @include md(min) {
    @apply flex items-center;
    // display: flex;
    // align-items: center;
  }

  @include md(max) {
    @apply block;
    // display: block;
  }
}

.News__itemDate {
  @apply text-hex-42b883 whitespace-nowrap font-normal;
  // color: $COLOR_MAIN;
  // font-weight: $FONT_WEIGHT_BASE_BOLD;

  @include md(max) {
    font-size: em(14, 16);
  }
}

.News__itemCategory {
  @apply min-w-70px py-2px px-5px text-center whitespace-nowrap text-white bg-hex-42b883 font-500;
  // min-width: 70px;
  // padding: 2px 0;
  font-size: em(14, 16);
  // font-weight: $FONT_WEIGHT_BASE_BOLD;

  // text-align: center;
  // color: #fff;
  // background-color: $COLOR_MAIN;
  @include md(max) {
    @apply inline-block;
    // display: inline-block;
    font-size: em(12, 16);
  }

  &:not(:first-child) {
    @apply ml-20px;

    // margin-left: 20px;
    @include md(max) {
      @apply ml-15px;
      // margin-left: 15px;
    }
  }
}

.News__itemTitle {
  @apply text-hex-42b883 no-underline;
  font-size: em(15, 16);
  font-weight: $FONT_WEIGHT_BASE_BOLD;
  line-height: 1.73;
  // color: $COLOR_BASE;
  // text-decoration: none;

  &:hover {
    @apply underline;
    // text-decoration: underline;
  }

  @include md(max) {
    @apply block;
    // display: block;
    font-size: em(14, 16);
    line-height: 1.64;
  }

  &:not(:first-child) {
    @apply ml-20px;

    // margin-left: 20px;
    @include md(max) {
      @apply mt-12px mb-0 mx-0;
      // margin: 12px 0 0;
    }
  }
}
</style>
