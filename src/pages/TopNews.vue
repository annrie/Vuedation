<script lang="ts">
import { defineComponent, onUpdated, onMounted, toRefs, reactive } from "vue";
import { getDataDateTime, findObjectByKey, getCategoryStr } from "@/store/app.utils";
import { NewsData } from "@/store/app.config";
import axios from "axios";

export default defineComponent({
  name: "TopNews",
  props: ["id"],
  setup(props) {
    const state = reactive({
      detailDate: "",
      detailTitle: "",
      detailContent: "",
      detailCategory: 0,
    });
    const getNewsDetailData = (detailId: number) => {
      axios
        .get("/json/news.json")
        .then((response) => {
          const newsData: NewsData = findObjectByKey(
            response.data.response,
            "id" as keyof object,
            Number(detailId)
          ) as NewsData;
          state.detailDate = newsData.date;
          state.detailTitle = newsData.title;
          state.detailContent = newsData.content;
          state.detailCategory = newsData.category;
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: TopNews.vue ~ line 33 ~ getNewsDetailData ~ error",
            error
          );
        });
    };
    onMounted(() => {
      getNewsDetailData(props.id); // 記事詳細の取得
    });
    onUpdated(() => {
      getNewsDetailData(props.id);
    });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    getDateTime(dateStr: string): string {
      return getDataDateTime(dateStr);
    },
    getCategoryName(catNum: number): string {
      return getCategoryStr(catNum);
    },
  },
});
</script>

<template>
  <article class="NewsDetail">
    <div class="NewsDetail__content">
      <header class="NewsDetail__header">
        <p class="NewsDetail__date prototype">
          <time>{{ getDateTime(detailDate) }}</time>
        </p>
        <h3 class="NewsDetail__title prototype">{{ detailTitle }}</h3>
        <p class="NewsDetail__category">
          <span>{{ getCategoryName(detailCategory) }}</span>
        </p>
      </header>
      <div class="NewsDetail__body prototype"
        v-html="detailContent"></div>
      <p class="NewsDetail__close">
        <router-link to="/"
          class="NewsDetail__closeLink">
          <span class="NewsDetail__closeText">トップページへ戻る</span>
        </router-link>
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.NewsDetail {
  @apply flex bg-light-100/80 top-0 right-0 bottom-0 left-0 z-100 fixed items-center justify-center dark:bg-indigo-500/80;
}

.NewsDetail__content {
  @apply flex flex-col px-60px pt-67px pb-60px relative overflow-hidden box-border dark:bg-gray-500;
  width: calc(100% - #{vw(366, $LG)});
  background-color: #fbfdf5;
  max-height: calc(100% - #{vw(264, $LG)});
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

  @screen lt-tb {
    @apply px-30px pt-64px pb-30px;
    width: calc(100% - 30px);
    max-height: calc(100% - 120px);
  }
}

.NewsDetail__header {
  @apply mb-30px;
}

.NewsDetail__date {
  @apply m-0;
  font-size: em(16, 16);

  &:not(:last-child) {
    @apply mb-4px;
  }

  time {
    color: var(--COLOR_MAIN);
  }
}

.NewsDetail__title {
  @apply m-0;
  font-size: em(20, 16);
  font-weight: 400;
  line-height: 1.7;

  &:not(:last-child) {
    @apply mb-20px;
  }
}

.NewsDetail__category {
  @apply m-0;
  font-size: em(14, 16);

  > span {
    @apply text-white py-0 px-18px inline-block;
    line-height: 1.6;
    background-color: var(--COLOR_MAIN);
  }
}

.NewsDetail__body {
  @apply flex-grow overflow-y-auto;

  ::v-deep(p) {
    @apply m-0 break-words;
    line-height: 1.875;

    a {
      color: var(--COLOR_MAIN);
      &:hover {
        @apply no-underline;
       }
    }

    &:not(:last-child) {
      margin-bottom: em(30, 16);
    }

    &:empty {
      @apply hidden;
    }
  }
}

.NewsDetail__close {
  @apply h-30px m-0 top-20px right-20px w-30px absolute;

  @screen lt-tb {
    @apply h-24px w-24px;
  }
}

.NewsDetail__closeLink {
  @apply h-full m-0 w-full relative block;

  &::before {
    @apply rounded-[1px] h-42px top-1/2 left-1/2 w-3px absolute content-empty;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: var(--COLOR_MAIN);

    @screen lt-tb {
      @apply h-32px w-2px;
    }
  }

  &::after {
    @apply bg-hex-42b883 rounded-[1px] h-42px top-1/2 left-1/2 w-3px absolute content-empty;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: var(--COLOR_MAIN);

    @screen lt-tb {
      @apply h-32px w-2px;
    }
  }
}

.NewsDetail__closeText {
  @include visually-hidden;
}
</style>
