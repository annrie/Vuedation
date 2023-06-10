<script lang="ts">
import { defineComponent } from "vue";
import PageModal from "@/components/pages/PageModal.vue";
import { AppData } from "@/store/app.data";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { DispatchType } from "@/store/app.config";
import store from "@/store";
// import "swiper/swiper.scss";
import "swiper/css/bundle";
// swiper core styles
import "swiper/css";

// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);

export default defineComponent({
  name: "About",
  components: {
    PageModal,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selectChapterIndexList: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      chapterData: AppData.chapterDataList,
      chapterDetailData2: AppData.chapterDetailDataList2,
      carouselAboutData: AppData.carouselAboutDataList,
      swiperCtrl: { realIndex: 0 },
      nowCarouselNum: 0,
      maxCarouselNum: AppData.chapterDetailDataList2.length,
    };
  },
  methods: {
    selectChapter(chapterIndex: number, detailIndex: number) {
      this.selectChapterIndexList[chapterIndex] = detailIndex;
    },
    onSwiper(e: SwiperCore) {
      console.log(e);
      this.swiperCtrl = e;
    },
    onSlideChange() {
      this.nowCarouselNum = this.swiperCtrl.realIndex;
    },
    onOpenModal(id: number) {
      store.dispatch(DispatchType.MODAL_OPEN);
      store.dispatch(DispatchType.SET_MODAL, id);
    },
    onClickCarouselPrev() {
      this.nowCarouselNum--;
      if (this.nowCarouselNum < 0) this.nowCarouselNum = this.maxCarouselNum - 1;
    },
    onClickCarouselNext() {
      this.nowCarouselNum++;
      if (this.nowCarouselNum > this.maxCarouselNum - 1) this.nowCarouselNum = 0;
    },
  },
});
</script>

<template>
<AmBreadcrumbs
    :showCurrentCrumb="true"
/>
  <section class="About">
    <h2 class="About__heading">
      <span> <em class="About__headingEn">Vue.js 3.x</em> を、 </span>
      <span>わかりやすく解説します。</span>
    </h2>
    <section class="AboutDetail -detail1">
      <h3 class="AboutDetail__heading">本書の対象読者</h3>
      <ul class="AboutDetail__list">
        <li class="AboutDetail__listItem">
          HTML/CSS、TypeScript（JavaScript）の基本的な知識をお持ちの方
        </li>
        <li class="AboutDetail__listItem">
          モダンなフレームワークというものに乗り遅れたと思われている方
        </li>
        <li class="AboutDetail__listItem">
          Vue.jsを用いて実際のWebサイトがどのように作られているか知りたい方
        </li>
        <li class="AboutDetail__listItem">
          Vue.jsをベースにさまざまな周辺技術の実際を知りたい方
        </li>
      </ul>
    </section>
    <section class="AboutDetail -detail2">
      <h3 class="AboutDetail__heading">本書の特徴</h3>
      <p class="AboutDetail__text">
        本書はVue.js
        3を使いこなし、最新バージョンの他のVue関連ライブラリや高位フレームワーク、例えばWindi
        CSS, Less CSS preprocessor, Vue Router, Vuex,
        Nuxt.jsと統合し、プロジェクト全体を構築できるようにする方法について学びます。<br />
        Vueプロジェクトのディレクトリ構成を学び、Vueのページ、レイアウト、ルーティング、コンポーネントを使用し、Vuexのストア、ミドルウェア、コンポジション、共通関数を記述してVueプロジェクトを作成することができるようになります。
      </p>
    </section>
    <div class="About__book">
      <img src="@/assets/images/about-book.png" alt="本書の表紙の画像。" />
    </div>
    <div class="About__links">
      <p class="About__link">
        <a href="#" class="Button" target="_blank"> Amazonで購入する </a>
      </p>
      <p class="About__link">
        <a href="#" class="Button" target="_blank"> HMV&BOOKS onlineで購入する </a>
      </p>
      <p class="About__link">
        <a href="#" class="Button" target="_blank"> 楽天ブックスで購入する </a>
      </p>
      <p class="About__link">
        <a href="#" class="Button" target="_blank"> ヨドバシ.comで購入する </a>
      </p>
    </div>
  </section>
  <section class="Contents">
    <h2 class="Contents__heading">
      <span class="Contents__headingMain">Table of Contents</span>
      <span class="Contents__headingSub">書籍の目次を紹介します。</span>
    </h2>
    <section
      v-for="(data, index) in chapterData"
      :key="data.category"
      class="ContentsSection"
    >
      <h3 :id="'toc-' + (index + 1)" class="ContentsSection__heading">
        <span class="ContentsSection__headingCategory">{{ data.category }}</span>
        <span class="ContentsSection__headingTitle">{{ data.title }}</span>
      </h3>
      <nav class="ContentsSection__menu" :aria-labelledby="'toc-' + (index + 1)">
        <ol class="ContentsSection__list">
          <li
            v-for="(cdata, cindex) in chapterDetailData2[index]"
            :key="cdata.title"
            class="ContentsSection__item"
          >
            <button
              type="button"
              class="ContentsSection__itemButton"
              :class="{ '-current': selectChapterIndexList[index] === cindex }"
              @click="selectChapter(index, cindex)"
            >
              <span class="ContentsSection__itemOrder">{{ cdata.index }}</span>
              <span class="ContentsSection__itemTitle">{{ cdata.title }}</span>
            </button>
          </li>
        </ol>
      </nav>
      <section class="ContentsSection__sub">
        <h4 class="_VisuallyHidden">
          {{ index + 1 }}-{{ selectChapterIndexList[index] }}
          {{ chapterDetailData2[index][selectChapterIndexList[index]].title }}
        </h4>
        <ol
          v-if="
            chapterDetailData2[index][selectChapterIndexList[index]].subList !== undefined
          "
          class="ContentsSection__subList"
        >
          <li
            v-for="sdata in chapterDetailData2[index][selectChapterIndexList[index]]
              .subList"
            :key="sdata"
            class="ContentsSection__subItem"
          >
            「{{ sdata }}」
          </li>
        </ol>
        <p
          class="ContentsSection__subDescription"
          v-html="chapterDetailData2[index][selectChapterIndexList[index]].detailHtml"
        ></p>
      </section>
    </section>
  </section>
  <Swiper
    :slides-per-view="2"
    :centered-slides="true"
    :space-between="10"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="(data, index) in carouselAboutData" :key="index">
      <button type="button" class="swiper-slide-button" @click="onOpenModal(index)">
        <img class="img" :src="data.src" :alt="data.alt" :data-id="data.id" />
      </button>
    </SwiperSlide>
    <div class="swiper-controller">
      <button
        v-show="nowCarouselNum !== 0"
        type="button"
        class="swiper-button-prev"
        @click="onClickCarouselPrev"
      >
        <span class="_VisuallyHidden">前のスライドへ</span>
      </button>
      <button
        v-show="nowCarouselNum !== maxCarouselNum"
        type="button"
        class="swiper-button-next"
        @click="onClickCarouselNext"
      >
        <span class="_VisuallyHidden">次のスライドへ</span>
      </button>
    </div>
  </Swiper>
  <PageModal :carouselData="carouselAboutData" />
</template>

<style lang="scss" scoped>
.Button {
  @apply bg-hex-42b883 rounded-10px text-center text-white block no-underline;
  padding: em(13, 15) em(20, 15);
  font-size: em(15, 18);
  line-height: 1.6;
  box-shadow: $SHADOW_BASE;
  transition: background-color $SEC ease, color $SEC ease;

  @include md(max) {
    padding: em(11, 12) em(4, 12);
    font-size: em(12, 16);
    line-height: 1.5;
  }

  &:hover {
    @apply bg-white text-hex-42b883;
    // color: $COLOR_MAIN;
    // background-color: #fff;
  }
}

.About {
  @apply mx-auto mt-20px mb-0 max-w-1000px grid;
  // max-width: 1000px;
  // margin: 20px auto 0;
  // display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 55% 45%;
  grid-template-areas:
    "heading heading"
    "detail1   image"
    "detail2   image"
    "link      image";

  @include md(max) {
    @apply mt-30px py-0 px-20px grid-cols-[100%];
    // margin-top: 30px;
    // padding: 0 20px;
    grid-template-rows: auto auto auto auto auto;
    // grid-template-columns: 100%;
    grid-template-areas:
      "heading"
      "detail1"
      "detail2"
      "image"
      "link";
  }
}

.About__heading {
  @apply m-0;
  // margin: 0;
  grid-area: heading;
  font-size: em(38, 16);

  @include md(max) {
    font-size: em(27, 16);
    line-height: 1.2;
  }

  span {
    @apply inline-block;
    // display: inline-block;
  }
}

.About__headingEn {
  @apply text-hex-42b883 not-italic;
  font-family: $FONT_EN;
  font-size: em(70, 38);

  // font-style: normal;
  // color: $COLOR_MAIN;
  @include md(max) {
    font-size: em(45, 27);
  }
}

.About__book {
  grid-area: image;

  @include md(min) {
    @apply ml-[50px];
    // margin-left: 50px;
  }
}

.About__links {
  @apply flex flex-wrap mt-60px justify-between;
  // margin-top: 60px;
  // display: flex;
  // justify-content: space-between;
  grid-area: link;

  // flex-wrap: wrap;
  @include md(max) {
    @apply mt-[30px];
    // margin-top: 30px;
  }
}

.About__link {
  @apply mx-0 mt-0 mb-[15px];
  width: calc((100% - 30px) / 2);

  // margin: 0 0 15px;
  @include md(max) {
    @apply mx-0 mt-0 mb-[10px];
    width: calc((100% - 15px) / 2);
    // margin: 0 0 10px;
  }
}

.AboutDetail {
  @apply mt-[50px];

  // margin-top: 50px;
  @include md(max) {
    @apply mt-[40px];
    // margin-top: 40px;
  }

  &.-detail1 {
    grid-area: detail1;
  }

  &.-detail2 {
    grid-area: detail2;
  }

  .About__heading + & {
    @apply mt-[60px];

    // margin-top: 60px;
    @include md(max) {
      @apply mt-30px;
      // margin-top: 30px;
    }
  }
}

.AboutDetail__heading {
  @apply font-semibold m-0 text-hex-42b883;

  // margin: 0;
  // font-size: em(24, 16);
  // color: $COLOR_MAIN;
  @include md(max) {
    font-size: em(17, 16);
  }
}

.AboutDetail__list {
  @apply mx-0 mt-[12px] mb-0 p-0;
  // margin: 12px 0 0;
  // padding: 0;
}

.AboutDetail__listItem {
  @apply font-semibold list-none pl-4 -indent-sm;

  // list-style-type: none;
  // padding-left: 1em;
  // text-indent: -1em;
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  &:not(:first-child) {
    @apply mt-[10px];
    // margin-top: 10px;
  }

  &::before {
    @apply content-・;
    // content: "・";
  }
}

.AboutDetail__text {
  @apply font-semibold;
  margin: em(12, 15) 0 0;
  font-size: em(15, 16);
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  line-height: 1.73;
}

.Contents {
  @apply mx-auto mt-t-100px mb-[100px] max-w-1000px py-0 px-[20px];

  // max-width: 1000px;
  // margin: 100px auto 0;
  // padding: 0 20px;
  @include md(max) {
    @apply mt-60px;
    // margin-top: 60px;
  }
}

.Contents__heading {
  @apply m-0;
  // margin: 0;
  font-size: em(46, 16);

  @include md(max) {
    font-size: em(35, 16);
  }
}

.Contents__headingMain {
  @apply text-hex-42b883 block;
  // display: block;
  font-family: $FONT_EN;
  // color: $COLOR_MAIN;
}

.Contents__headingSub {
  @apply block;
  // display: block;
  font-size: em(16, 46);

  @include md(max) {
    font-size: em(14, 35);
  }
}

.ContentsSection {
  @apply mt-[50px] grid;
  // margin-top: 50px;
  // display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 400px 1fr;
  grid-template-areas:
    "heading heading"
    "menu   contents";

  @include md(max) {
    @apply mt-[30px];
    // margin-top: 30px;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    grid-template-areas:
      "heading"
      "menu"
      "contents";
  }
}

.ContentsSection__heading {
  @apply m-0 pb-[8px];
  // margin: 0;
  // padding-bottom: 8px;
  grid-area: heading;
  font-size: em(20, 16);
  border-bottom: 2px solid $COLOR_MAIN;

  @include md(max) {
    font-size: em(17, 16);
  }
}

.ContentsSection__headingCategory {
  @apply font-normal text-hex-42b883;
  font-family: $FONT_EN;
  // font-weight: $FONT_WEIGHT_EN_NORMAL;
  font-size: em(30, 20);

  // color: $COLOR_MAIN;
  @include md(max) {
    @apply mb-[4px] block;
    // margin-bottom: 4px;
    // display: block;
    font-size: em(20, 17);
  }
}

.ContentsSection__headingTitle {
  @apply font-semibold;

  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  &:not(:first-child) {
    @include md(min) {
      @apply ml-[12px];
      // margin-l;eft: 12px;;
    }
  }
}

.ContentsSection__menu {
  @apply mt-[30px] pr-[40px];
  // margin-top: 30px;
  // padding-right: 40px;
  grid-area: menu;

  @include md(max) {
    @apply mt-[20px] pr-0;
    // margin-top: 20px;
    // padding-right: 0;
  }
}

.ContentsSection__list {
  @apply m-0 p-0;
  // margin: 0;
  // padding: 0;
}

.ContentsSection__item {
  @apply list-none;

  // list-style-type: none;
  &:not(:first-child) {
    @apply mt-[30px];

    // margin-top: 30px;
    @include md(max) {
      @apply mt-[12px];
      // margin-top: 12px;
    }
  }
}

.ContentsSection__itemButton {
  @apply bg-transparent border-none cursor-pointer border-0 text-left text-hex-35495e relative inline-flex;
  // position: relative;
  padding: 0 0 0 em(24, 16);
  // display: inline-flex;
  // text-align: left;
  // color: $COLOR_BASE;
  // background-color: transparent;
  // border: 0 none;
  // cursor: pointer;
  transition: color $SEC ease;

  @include md(max) {
    font-size: em(14, 16);
  }

  &:hover {
    @apply text-hex-42b883;
    // color: $COLOR_MAIN;
  }

  &:focus {
    outline: 2px solid $COLOR_MAIN;
    outline-offset: 6px;
  }

  &::before {
    @apply bg-no-repeat h-14px opacity-0 top-2px left-0 w-16px absolute;
    content: "";
    // position: absolute;
    // top: 2px;
    // left: 0;
    transform: translateX(-5px) rotate(-90deg);
    transform-origin: center;
    // width: 16px;
    // height: 14px;
    background-image: url($PATH + "logo-vue.svg");
    // background-repeat: no-repeat;
    background-size: 100%;
    // opacity: 0;
    transition: opacity $SEC ease, transform $SEC ease;

    @include md(max) {
      @apply h-[12px] w-[14px];
      // width: 14px;
      // height: 12px;
    }
  }

  &.-current {
    &::before {
      @apply opacity-100 -rotate-90;
      // opacity: 1;
      // transform: rotate(-90deg);
    }
  }
}

.ContentsSection__itemOrder {
  @apply flex-shrink-0 text-hex-42b883;
  min-width: em(40, 16);
  margin-right: em(8, 16);
  // flex-shrink: 0;
  // color: $COLOR_MAIN;
}

.ContentsSection__itemTitle {
  @apply dark: text-emerald-400;
}

.ContentsSection__sub {
  @apply mt-[30px];
  // margin-top: 30px;
  grid-area: contents;

  @include md(max) {
    @apply mt-[20px] pl-[21px];
    // margin-top: 20px;
    // padding-left: 21px;
  }
}

.ContentsSection__subList {
  @apply flex flex-wrap p-0;
  margin: em(-6, 15) 0 0 -0.6em;
  // padding: 0;
  font-size: em(15, 16);

  // display: flex;
  // flex-wrap: wrap;
  @include md(max) {
    @apply m-0 block;
    // margin: 0;
    // display: block;
    font-size: em(12, 16);
  }
}

.ContentsSection__subItem {
  @apply list-none;
  // list-style-type: none;
  margin: em(6, 15) 0 0 0;

  @include md(max) {
    @apply m-0;
    // margin: 0;
  }

  &:not(:first-child) {
    @include md(max) {
      margin-top: em(8, 12);
    }
  }
}

.ContentsSection__subDescription {
  @apply m-0;
  // margin: 0;
  font-size: em(15, 16);
  line-height: 1.73;

  @include md(max) {
    font-size: em(12, 16);
  }

  .ContentsSection__subList + & {
    @apply mt-[30px];

    // margin-top: 30px;
    @include md(max) {
      @apply mt-[12px];
      // margin-top: 12px;
    }
  }
}

.swiper-container {
  @apply mt-[100px] z-0 relative overflow-hidden;

  // position: relative;
  // z-index: 0;
  // overflow: hidden;
  // margin-top: 100px;
  @include md(max) {
    @apply mt-[60px];
    // margin-top: 60px;
  }
}

.swiper-wrapper {
  @apply flex m-0 px-0 pt-0 pb-[6px];
  // margin: 0;
  // padding: 0 0 6px;
  // display: flex;
}

.swiper-slide {
  @apply flex-shrink-0 w-auto;
  // width: auto;
  // flex-shrink: 0;
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

  @include md(max) {
    @apply w-[310px];
    // width: 310px;
  }
}

.swiper-slide-button {
  @apply bg-transparent border-none cursor-pointer border-0 p-0 block;
  // padding: 0;
  // display: block;
  // background-color: transparent;
  // border: 0 none;
  // cursor: pointer;

  &:focus {
    outline: 5px solid $COLOR_MAIN;
    outline-offset: -5px;
  }
}

.swiper-button-prev {
  @apply bg-transparent border-none border-0 h-[40px] p-0 top-1/2 left-[20px] w-[40px] z-2 absolute;
  // position: absolute;
  // top: 50%;
  // left: 20px;
  // z-index: 2;
  // width: 40px;
  // height: 40px;
  // padding: 0;
  // background-color: transparent;
  // border: 0 none;
  background-image: url($PATH + "arrow-slide.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @include md(max) {
    @apply h-[20px] w-[20px];
    // width: 20px;
    // height: 20px;
  }

  &::after {
    @apply hidden;
  }

  &:focus {
    @include focus-base;
  }

  &.swiper-button-disabled {
    @apply opacity-60 pointer-events-none;
    // opacity: 0.6;
    // pointer-events: none;
  }
}

.swiper-button-next {
  @apply bg-transparent bg-no-repeat border-none cursor-pointer border-0 h-[40px] p-0 top-1/2 right-[20px] w-[40px] z-2 absolute;
  // position: absolute;
  // top: 50%;
  // right: 20px;
  transform: rotate(180deg);
  transform-origin: center;
  // z-index: 2;
  // width: 40px;
  // height: 40px;
  // padding: 0;
  // background-color: transparent;
  // border: 0 none;
  background-image: url($PATH + "arrow-slide.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  // cursor: pointer;
  @include md(max) {
    @apply h-[20px] w-[20px];
    // width: 20px;
    // height: 20px;
  }

  &::after {
    @apply hidden;
  }
  &:focus {
    @include focus-base;
  }

  &.swiper-button-disabled {
    @apply opacity-0 pointer-events-none;
    // opacity: 0.6;
    // pointer-events: none;
  }
}
</style>
