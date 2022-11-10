<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import axios from "axios";
import { Tabs, Tab, TabPanels, TabPanel } from "vue3-tabs";
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
  <div id="News"
    class="News">
    <h2 class="News__heading">News</h2>
    <div class="vue3-tabs">
      <Tabs v-model="selectedTab">
        <div class="vue3-tabs-tablist"
          role="tablist"
          aria-label="ニュース">
          <Tab class="vue3-tabs-tab"
            v-for="(tab, i) in tabs"
            :key="`t${i}`"
            :val="tab"
            :label="tab"
            :indicator="true"
            role="tab" />
        </div>
      </Tabs>
      <TabPanels v-model="selectedTab"
        :animate="true"
        :swipeable="true">
        <TabPanel v-for="(tab, i) in tabs"
          :key="`tp${i}`"
          :val="tab">
          <ul class="vue3-tabs-list">
            <li class="box-shadow-base vue3-tabs-item"
              v-for="data in getCategoryNewsData(newsData, getCategoryNumber(tab))"
              :key="data.title">
              <span class="vue3-tabs-info">
                <time :datetime="getDateTime(data.date)"
                  class="vue3-tabs-date">
                  {{ data.date }}
                </time>
                <span class="vue3-tabs-category">
                  {{ getCategoryName(data.category) }}
                </span>
              </span>
              <router-link :to="{ path: '/news/' + data.id, hash: '#News' }"
                class="prototype vue3-tabs-title">
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
.News {
  @apply mx-auto mt-98px mb-0 max-w-1000px py-0 px-20px;

  // margin: 98px auto 0;
  // padding: 0 20px;
  @include md(max) {
    @apply mx-0 mt-30px mb-0;
    // margin: 30px 0 0;
  }
}

.News__heading {
  @apply m-0 text-hex-42b883;
  // margin: 0;
  font-family: $FONT_EN;
  font-size: em(60, 16);
  /* color: $COLOR_MAIN; */

  @include md(max) {
    font-size: em(42, 16);
  }
}

.vue3-tabs {
  @apply -mx-6px mt-30px mb-0;
  // margin: 30px -6px 0;
}

.tabs {
  @apply py-0 px-6px;
  display: block !important;
  // padding: 0 6px;
}

.tab-panels {
  @apply mt-30px px-0 pt-0 pb-6px;
  // margin-top: 30px;
  // padding: 0 0 6px;
}

// .tab-panel li {
//   @apply bg-light-50 dark: bg-dark-50 ;
// }

.vue3-tabs-tablist {
  @apply flex justify-between;
  // display: flex;
  // justify-content: space-between;
}

.vue3-tabs-tab {
  @apply border-none cursor-pointer bg-gray-100 border-0 rounded-10px text-center py-14px px-0 text-hex-42b883;
  width: calc((100% - 70px) / 3);
  // padding: 14px 0;
  font-family: $FONT_EN;
  font-size: em(20, 16);
  line-height: 1.6;
  // text-align: center;
  // color: $COLOR_MAIN;
  // background-color: #fbfdf5;
  // border: 0 none;
  // border-radius: 10px;
  box-shadow: $SHADOW_BASE;
  // cursor: pointer;
  transition: box-shadow $SEC ease;

  @include md(max) {
    @apply rounded-5px py-8px px-0;
    width: calc((100% - 35px) / 3);
    // padding: 8px 0;
    font-size: em(15, 16);
    // border-radius: 5px;
    box-shadow: $SHADOW_BASE;
  }

  &:hover {
    // @apply shadow-HOVER;
    box-shadow: $SHADOW_HOVER;
  }

  &.active {
    @apply bg-main text-white;
    // color: #fff;
    // background-color: $COLOR_MAIN;
  }
}

.vue3-tabs-list {
  @apply list-none bg-light-50 m-0 py-0 px-6px dark: bg-dark-200 ;
  // margin: 0;
  // padding: 0 6px;
  // list-style-type: none;
}

.vue3-tabs-item {
  @apply text-base py-[26px] px-[30px];
  // padding: 26px 30px;
  // font-size: 1rem;
  // background-color: #fff;
  box-shadow: $SHADOW_BASE;

  @include md(min) {
    @apply flex items-baseline;
    // display: flex;
    // align-items: baseline;
  }

  @include md(max) {
    @apply px-20px pt-16px pb-20px;
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

.vue3-tabs-info {
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

.vue3-tabs-date {
  @apply font-bold text-main;

  // color: $COLOR_MAIN;
  // font-weight: bold;
  @include md(max) {
    // @apply text-sm;
    font-size: em(14, 16);
  }
}

.vue3-tabs-category {
  @apply bg-main font-bold text-center text-white min-w-70px py-2px px-0;

  // min-width: 70px;
  // padding: 2px 0;
  font-size: em(14, 16);

  // font-weight: bold;
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

.vue3-tabs-title {
  @apply font-bold dark: (link: text-light-200 visited:text-pink-300) visited: text-gray-400 link: text-gray-700 ;
  // color: $COLOR_BASE;
  // font-size: em(15, 16);
  // font-weight: 700;
  line-height: 1.73;

  @include md(max) {
    @apply text-sm block;
    // display: block;
    // font-size: em(14, 16);
    line-height: 1.64;
  }

  &:not(:first-child) {
    @apply ml-20px;

    // margin-left: 20px;
    @include md(max) {
      @apply mx-0 mt-12px mb-0;
      // margin: 12px 0 0;
    }
  }

  &:hover {
    @apply no-underline;
    // text-decoration: none;
  }
}
</style>
