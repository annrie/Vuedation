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
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.News__tabPanel {
  @apply mt-30px;

  @include md(max) {
    @apply mt-15px;
   }
}

.News__list {
  @apply m-0 p-0 list-none;
}

.News__item {
  @apply py-26px px-30px text-base bg-white;
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

  @screen md {
    @apply flex align-baseline;
  }

  @screen lt-tb {
    @apply pt-16px pb-20px px-20px;
  }

  &:not(:first-child) {
    @apply mt-10px;

    @screen lt-tb {
      @apply mt-20px;
    }
  }
}

.News__itemInfo {
  @screen md {
    @apply flex items-center;
  }

  @screen lt-tb {
    @apply block;
  }
}

.News__itemDate {
  @apply whitespace-nowrap;
  color: var(--COLOR_MAIN);
  font-weight: var(--FONT_WEIGHT_BASE_BOLD);

  @screen lt-tb {
    font-size: em(14, 16);
  }
}

.News__itemCategory {
  @apply min-w-70px py-2px px-5px text-center whitespace-nowrap text-white font-500;
  font-size: em(14, 16);
  font-weight: var(--FONT_WEIGHT_BASE_BOLD);
  background-color:var(--COLOR_MAIN);

  @screen lt-tb {
    @apply inline-block;
    font-size: em(12, 16);
  }

  &:not(:first-child) {
    @apply ml-20px;

    @screen lt-tb {
      @apply ml-15px;
    }
  }
}

.News__itemTitle {
  @apply no-underline;
  font-size: em(15, 16);
  font-weight: var(--FONT_WEIGHT_BASE_BOLD);
  line-height: 1.73;
  color: var(--COLOR_BASE);

  &:hover {
    @apply underline;
  }

  @screen lt-tb {
    @apply block;
    font-size: em(14, 16);
    line-height: 1.64;
  }

  &:not(:first-child) {
    @apply ml-20px;

    @screen lt-tb {
      @apply mt-12px mb-0 mx-0;
    }
  }
}
</style>
