<script setup lang="ts">
import PageBreadcrumbs from "@/components/pages/PageBreadcrumbs.vue";
// import {getAsset} from '@/modules/image'

// const images = {
//   assets: [
//     {
//       id: 1,
//       src: 'logo-monsterdive.svg',
//       alt: 'ロゴ：MONSTER DIVE'
//     },
//     {
//       id: 2,
//       src: 'author-member.jpg',
//       alt: 'MONSTER DIVEのメンバーが会議をしている写真。'
//     }
//   ]
// }
</script>

<template>
  <PageBreadcrumbs label="Author" />
  <section class="Introduction">
    <h2 class="Introduction__heading">
      <span class="Introduction__headingLogo">
        <!-- <span class="Introduction__headingLogo" v-for="image in images.assets" :key="image.id"> -->
        <img src="@/assets/images/logo-phantomoon.svg" alt="logo" />
        <!-- <img
                            v-if="image.id === 1"
                            :src="getAsset(image.src)"
                            :alt="image.alt"
                        /> -->
      </span>
      <span class="Introduction__headingText">とは</span>
    </h2>
    <div class="Introduction__content">
      <p class="Introduction__description prototype">
        Lorem ipsum dolor sit amet. At tempore cupiditate id pariatur unde aut nesciunt
        minus. Ea quis doloremque aut tempora eaque ea beatae eaque ea omnis atque quo
        quibusdam vero ad atque quos. Eos obcaecati beatae sed sint vitae ut recusandae
        architecto. Aut odio quas eos doloribus ducimus et laborum accusantium sed
        recusandae voluptatibus est dignissimos sint. <br />
        Eum natus dicta et corporis molestiae est corporis nisi qui adipisci nihil et
        cumque iure. Et consequatur quia eos deserunt culpa rem molestiae doloremque id
        maxime provident est possimus odit. Rem deleniti suscipit vel galisum consequatur
        aut nobis facere At omnis possimus.
      </p>
      <div class="Introduction__image">
        <div class="Introduction__imageItem">
          <video
            autoplay
            muted
            loop
            playsinline
            src="@/assets/images/author-member.mp4"
          ></video>

          <!-- <div class="Introduction__imageItem" v-for="image in images.assets" :key="image.id"> -->
          <!-- <img src="@/assets/images/author-member.jpg" alt="メンバー" /> -->
          <!-- <img
                                              v-if="image.id === 2"
                                                :src="getAsset(image.src)"
                                                :alt="image.alt"
                                              /> -->
        </div>
      </div>
      <p class="Introduction__link">
        <a href="https://phantomoon/" target="_blank">Phantomoonの詳しい情報</a>
      </p>
    </div>
  </section>
  <section class="Narrative">
    <h2 class="Narrative__heading">本書籍を出版するにあたって</h2>
    <p class="Narrative__text prototype">
      Et minima odio ex eaque alias aut accusamus aspernatur qui enim consectetur aut
      laboriosam laudantium ab quisquam nemo. Non ratione suscipit est nisi rerum et atque
      porro aut necessitatibus fugit qui laudantium delectus et nostrum possimus.<br />
      Et minima odio ex eaque alias aut accusamus aspernatur qui enim consectetur aut
      laboriosam laudantium ab quisquam nemo. Non ratione suscipit est nisi rerum et atque
      porro aut necessitatibus fugit qui laudantium delectus et nostrum possimus.<br />
      Non expedita dolores et quae dolores vel esse nulla eum aspernatur voluptatibus qui
      molestias deserunt. Sit dolores perspiciatis est asperiores tempore ab veniam
      provident eos consequuntur exercitationem est odio sint qui praesentium error.
    </p>
    <p class="Narrative__link">
      <router-link to="/production-note">Production Noteを見る</router-link>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.Introduction {
  @apply mx-auto mt-30px mb-0 max-w-1000px;

  // max-width: 1000px;
  // margin: 30px auto 0;
  @include lg(max) {
    @apply py-0 px-20px;
    // padding: 0 20px;
  }
}

.Introduction__heading {
  @apply flex m-0 text-base items-center;
  // margin: 0;
  // font-size: em(16, 16);
  // display: flex;
  // align-items: center;
}

.Introduction__headingLogo {
  @apply w-433px;
  // width: 433px;

  @include md(max) {
    @apply w-285px;
    // width: 285px;
  }
}
.Introduction__headingText {
  @apply mt-12px mr-0 mb-0 ml-24px;
  // margin: 12px 0 0 24px;
  @include md(max) {
    @apply mt-8px mr-0 mb-0 ml-8px;
    // margin: 8px 0 0 8px;
    font-size: em(15, 16);
  }
}

.Introduction__content {
  @apply mt-20px grid;
  // margin-top: 20px;
  // display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 460px;
  grid-template-areas:
    "text image"
    "link image";

  @include lg(max) {
    grid-template-columns: auto 360px;
  }

  @include md(max) {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
    grid-template-areas:
      "text"
      "image"
      "link";
  }
}

.Introduction__description {
  @apply font-bold my-0 mr-40px text-base ml-0;
  // margin: 0 40px 0 0;
  grid-area: text;
  // font-size: em(16, 16);
  // font-weight: $FONT_WEIGHT_BASE_BOLD;
  line-height: 2.125;

  @include lg(max) {
    @apply my-0 mr-30px ml-0;
    // margin: 0 30px 0 0;
  }

  @include md(max) {
    @apply m-0 text-sm;
    // margin: 0;
    // font-size: em(14, 16);
    line-height: 1.64;
  }
}

.Introduction__image {
  grid-area: image;

  @include md(max) {
    @apply mt-25px;
    // margin-top: 25px;
  }
}

.Introduction__imageItem {
  @apply rounded-20px overflow-hidden;

  // overflow: hidden;
  // border-radius: 20px;
  @include md(max) {
    @apply rounded-10px;
    // border-radius: 10px;
  }
}

.Introduction__link,
.Narrative__link {
  @apply mt-30px mr-40px text-right mb-0 ml-0;
  // margin: 30px 40px 0 0;
  grid-area: link;

  // text-align: right;
  @include lg(max) {
    @apply mt-20px mr-30px mb-0 ml-0;
    // margin: 20px 30px 0 0;
  }

  @include md(max) {
    @apply mx-0 mt-30px text-center mb-0;
    // margin: 30px 0 0 0;
    // text-align: center;
  }

  > a {
    @apply bg-hex-fbfdf5 text-center min-w-[260px] py-[13px] px-[25px] text-hex-42b883 inline-block no-underline;
    // min-width: 260px;
    // padding: 13px 25px;
    // display: inline-block;
    font-size: em(15, 16);
    line-height: 1.6;
    // text-align: center;
    // text-decoration: none;
    // color: $COLOR_MAIN;
    // background-color: #fbfdf5;
    box-shadow: $SHADOW_BASE;
    // border-radius: 10px;
    transition: box-shadow $SEC ease;
    box-sizing: border-box;

    @include md(max) {
      @apply text-sm min-w-240px py-9px px-20px;
      // min-width: 240px;
      // padding: 9px 20px;
      // font-size: em(14, 16);
    }

    &:hover {
      box-shadow: $SHADOW_HOVER;
    }
  }
}

.Narrative {
  @apply mx-auto mt-100px mb-0 max-w-1000px;

  // max-width: 1000px;
  // margin: 100px auto 0;
  @include lg(max) {
    @apply py-0 px-20px;
    // padding: 0 20px;
  }

  @include md(max) {
    @apply mt-50px;
    // margin-top: 50px;
  }
}

.Narrative__heading {
  @apply font-semibold m-0 text-2xl text-hex-42b883;

  // margin: 0;
  // font-size: em(24, 16);
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  // color: $COLOR_MAIN;
  @include md(max) {
    font-size: em(17, 16);
  }
}

.Narrative__text {
  @apply font-semibold mx-0 mt-36px mb-0;
  // margin: 36px 0 0;
  font-size: em(15, 16);
  // font-weight: $FONT_WEIGHT_BASE_DEMIBOLD;
  line-height: 1.73;

  @include md(max) {
    @apply mt-20px text-sm;
    // margin-top: 20px;
    // font-size: em(14, 16);
    line-height: 1.64;
  }
}

// .Narrative__link {
//   @apply mx-0 mt-40px text-right mb-0;

//   // margin: 40px 0 0;
//   // text-align: right;
//   @include md(max) {
//     @apply mx-0 mt-25px text-center mb-0;
//     // margin: 25px 0 0;
//     // text-align: center;
//   }

//   > a {
//     @apply rounded-10px text-center min-w-260px py-13px px-25px text-hex-35495e inline-block no-underline;
//     // min-width: 260px;
//     // padding: 13px 25px;
//     // display: inline-block;
//     font-size: em(15, 16);
//     line-height: 1.6;
//     // text-align: center;
//     // text-decoration: none;
//     // color: $COLOR_MAIN;
//     // background-color: #fbfdf5;
//     box-shadow: $SHADOW_BASE;
//     // border-radius: 10px;
//     transition: box-shadow $SEC ease;
//     box-sizing: border-box;

//     @include md(max) {
//       @apply text-sm min-w-240px py-9px px-20px;
//       // min-width: 240px;
//       // padding: 9px 20px;
//       // font-size: em(14, 16);
//     }

//     &:hover {
//       box-shadow: $SHADOW_HOVER;
//     }
//   }
// }
</style>
