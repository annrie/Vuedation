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
.NewsDetail {
  @apply flex bg-light-100/80 top-0 right-0 bottom-0 left-0 z-100 fixed items-center justify-center dark: bg-indigo-500/80 ;
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // z-index: 100;
  // background-color: rgba(#fff, 0.8);
  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.NewsDetail__content {
  @apply flex flex-col bg-light-50 px-60px pt-67px pb-60px relative overflow-hidden box-border dark: bg-gray-500 ;
  // position: relative;
  width: calc(100% - #{vw(366, $LG)});
  max-height: calc(100% - #{vw(264, $LG)});
  // overflow: hidden;
  // padding: 67px 60px 60px;
  // display: flex;
  // flex-direction: column;
  // background-color: #fbfdf5;
  box-shadow: $SHADOW_BASE;

  // box-sizing: border-box;
  @include md(max) {
    @apply px-30px pt-64px pb-30px;
    width: calc(100% - 30px);
    max-height: calc(100% - 120px);
    // padding: 64px 30px 30px;
  }
}

.NewsDetail__header {
  @apply mb-30px;
  // margin-bottom: 30px;
}

.NewsDetail__date {
  @apply m-0;
  font-size: em(16, 16);

  // margin: 0;
  &:not(:last-child) {
    @apply mb-4px;
    // margin-bottom: 4px;
  }

  time {
    @apply text-hex-fbfdf5;
    // color: $COLOR_MAIN;
  }
}

.NewsDetail__title {
  @apply font-normal m-0;
  // margin: 0;
  font-size: em(20, 16);
  // font-weight: 400;
  line-height: 1.7;

  &:not(:last-child) {
    @apply mb-20px;
    // margin-bottom: 20px;
  }
}

.NewsDetail__category {
  @apply m-0;
  // margin: 0;
  font-size: em(14, 16);

  >span {
    @apply bg-hex-fbfdf5 text-white py-0 px-18px inline-block;
    // display: inline-block;
    // padding: 0 10px;
    line-height: 1.6;
    // color: #fff;
    // background-color: $COLOR_MAIN;
  }
}

.NewsDetail__body {
  @apply flex-grow overflow-y-auto;
  // flex-grow: 1;
  // overflow-y: auto;

  ::v-deep(p) {
    @apply m-0 break-words;
    // margin: 0;
    line-height: 1.875;

    // word-break: break-word;
    a {
      @apply text-hex-fbfdf5;

      // color: $COLOR_MAIN;
      &:hover {
        @apply no-underline;
        // text-decoration: none;
      }
    }

    &:not(:last-child) {
      margin-bottom: em(30, 16);
    }

    &:empty {
      @apply hidden;
      // display: none;
    }
  }
}

.NewsDetail__close {
  @apply h-30px m-0 top-20px right-20px w-30px absolute;

  // position: absolute;
  // top: 20px;
  // right: 20px;
  // width: 30px;
  // height: 30px;
  // margin: 0;
  @include md(max) {
    @apply h-24px w-24px;
    // width: 24px;
    // height: 24px;
  }
}

.NewsDetail__closeLink {
  @apply h-full m-0 w-full relative block;
  // position: relative;
  // display: block;
  // margin: 0;
  // width: 100%;
  // height: 100%;

  &::before {
    @apply bg-hex-42b883 rounded-[1px] h-42px top-1/2 left-1/2 w-3px absolute;
    content: "";
    // position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);

    // width: 3px;
    // height: 42px;
    // background-color: $COLOR_MAIN;
    // border-radius: 1px;
    @include md(max) {
      @apply h-32px w-2px;
      // width: 2px;
      // height: 32px;
    }
  }

  &::after {
    @apply bg-hex-42b883 rounded-[1px] h-42px top-1/2 left-1/2 w-3px absolute;
    content: "";
    // position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);

    // width: 3px;
    // height: 42px;
    // background-color: $COLOR_MAIN;
    // border-radius: 1px;
    @include md(max) {
      @apply h-32px w-2px;
      // width: 2px;
      // height: 32px;
    }
  }
}

.NewsDetail__closeText {
  @include visually-hidden;
}
</style>
