<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import axios from "axios";
import { TabPanel, TabPanels, Tab, Tabs } from "vue3-tabs";
import {
  getCategoryNewsData,
  getDataDateTime,
  getCategoryStr,
  getCategoryNum,
} from "@/store/app.utils";
import { NewsData } from "@/store/app.config";

const tabs = ["All", "Book", "Site"];

export default defineComponent({
  name: "Top",
  components: {
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const newsData = ref([]);
    const state = reactive({
      selectedTab: tabs[0],
    });

    axios
      .get("/json/news.json")
      .then((response) => {
        newsData.value = response.data.response;
      })
      .catch((error) => {
        console.log("🚀 ~ file: index.vue ~ line 35 ~ setup ~ error", error);
      });
    return {
      newsData,
      tabs,
      ...toRefs(state),
    };
  },
  methods: {
    getDateTime(dateStr: string): string {
      return getDataDateTime(dateStr);
    },
    getCategoryNewsData(data: NewsData[], category: number): NewsData[] {
      return getCategoryNewsData(data, category);
    },
    getCategoryName(catNum: number): string {
      return getCategoryStr(catNum);
    },
    getCategoryNumber(catString: string): number {
      return getCategoryNum(catString);
    },
  },
});
</script>

<template>
  <div id="News" class="News">
    <h2 class="News__heading">News</h2>
    <div class="vue3-tabs">
      <Tabs v-model="selectedTab">
        <div class="vue3-tabs-tablist" role="tablist" aria-label="ニュース">
          <Tab
            class="vue3-tabs-tab"
            v-for="(tab, i) in tabs"
            :key="`t${i}`"
            :val="tab"
            :label="tab"
            :indicator="true"
            role="tab"
          />
        </div>
      </Tabs>
      <TabPanels v-model="selectedTab" :animate="true" :swipeable="true">
        <TabPanel v-for="(tab, i) in tabs" :key="`tp${i}`" :val="tab">
          <ul class="vue3-tabs-list">
            <li
              class="box-shadow-base vue3-tabs-item"
              v-for="data in getCategoryNewsData(newsData, getCategoryNumber(tab))"
              :key="data.title"
            >
              <span class="vue3-tabs-info">
                <time :datetime="getDateTime(data.date)" class="vue3-tabs-date">
                  {{ data.date }}
                </time>
                <span class="vue3-tabs-category">
                  {{ getCategoryName(data.category) }}
                </span>
              </span>
              <router-link
                :to="{ path: '/news/' + data.id, hash: '#News' }"
                class="prototype vue3-tabs-title"
              >
                {{ data.title }}
              </router-link>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.News {
  @apply mx-auto mt-98px mb-0 max-w-1000px py-0 px-20px;

  @screen lt-md {
    @apply mx-0 mt-30px mb-0;
  }
}

.News__heading {
  @apply m-0 font-xl;
  font-family: var(--FONT_EN);
  color: var(--COLOR_MAIN);
  font-size: em(60, 16);

  @screen lt-md {
    font-size: em(42, 16);
  }
}

.vue3-tabs {
  @apply -mx-6px mt-30px mb-0;
}

.tabs {
  @apply py-0 px-6px important-block;
}

.tab-panels {
  @apply mt-30px px-0 pt-0 pb-6px;
}

//.tab-panel {
// @apply bg-light-50 dark:bg-gray-200;
//  li {
//     @apply bg-white dark:bg-gray-100;
//    }
//}

.vue3-tabs-tablist {
  @apply flex justify-between;
}

.vue3-tabs-tab {
  @apply border-none cursor-pointer bg-gray-100 border-0 rounded-10px text-center py-14px px-0;
  width: calc((100% - 70px) / 3);
  font-family: var(--FONT_EN);
  font-size: em(20, 16);
  color: var(--COLOR_MAIN);
  line-height: 1.6;
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
  transition: box-shadow 0.3s ease;

  @screen lt-md {
    @apply rounded-5px py-8px px-0;
    width: calc((100% - 35px) / 3);
    font-size: em(15, 16);
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
  }

  &:hover {
    box-shadow: 3px 3px 24px rgba(#d9e6bd, 0.9);
  }

  &.active {
    @apply bg-main text-white;
    background-color: var(--COLOR_MAIN);
  }
}

.vue3-tabs-list {
  @apply list-none m-0 py-0 px-6px;
  }

.vue3-tabs-item {
  @apply text-base py-[26px] px-[30px]  bg-gray-200 dark:bg-gray-400;
  box-shadow:3px 3px 6px rgba(#d9e6bd, 0.63);
  //box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

  @screen md {
    @apply flex items-baseline;
  }

  @screen lt-md {
    @apply px-20px pt-16px pb-20px;
  }

  &:not(:first-child) {
    @apply mt-10px;
    @screen lt-md {
      @apply mt-20px;
    }
  }
}

.vue3-tabs-info {
  @screen md {
    @apply flex items-center;
  }

  @screen lt-md {
    @apply block;
  }
}

.vue3-tabs-date {
  @apply font-bold text-main text-black;

  @screen lt-tb {
    font-size: em(14, 16);
  }
}

.vue3-tabs-category {
  @apply bg-main font-bold text-center text-white min-w-70px py-2px px-0;
  font-size: em(14, 16);
  background-color: var(--COLOR_MAIN);

  @screen lt-tb {
    @apply inline-block;
    font-size: em(12, 16);
  }

  &:not(:first-child) {
    @apply ml-20px;

    @screen lt-md {
      @apply ml-15px;
    }
  }
}

.vue3-tabs-title {
//  @apply font-bold dark:(link:text-light-100 visited:text-pink-100) visited:text-gray-100;
  color: var(--COLOR_BASE);
  font-size: em(15, 16);
  font-weight: 700;
  line-height: 1.73;

  //link:text-gray-400;
  color: var(--COLOR_BASE);
  line-height: 1.73;

  @screen lt-tb {
    @apply block;
    font-size: em(15, 16);
    line-height: 1.64;
  }

  &:not(:first-child) {
    @apply ml-20px;

    @screen lt-md {
      @apply mx-0 mt-12px mb-0;
    }
  }

  &:hover {
    @apply no-underline;
  }
}
</style>
