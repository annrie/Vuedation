<script lang="ts">
import { defineComponent, computed, PropType, onUpdated, ref } from "vue";
import { HeroData } from "@/store/app.config";
import { gsap } from "gsap";

export default defineComponent({
  name: "PageHeroInner",
  props: {
    heroData: {
      type: Object as PropType<HeroData>,
      required: true,
    },
  },
  setup(props) {
    const hData = computed(() => props.heroData);
    const content = ref<HTMLElement>();
    /**
     * 更新
     */
    onUpdated(() => {
      if (content.value != undefined) {
        gsap.set(content.value, { alpha: 0 });
        gsap.to(content.value, {
          delay: 1,
          duration: 1,
          alpha: 1,
          ease: "power2.in",
        });
      }
    });
    return { hData, content };
  },
});
</script>

<template>
  <div class="PageHero__wrap" :class="hData.cls">
    <div class="PageHero__inner">
      <div class="PageHero__content">
        <h1 class="PageHero__heading">
          <slot name="heading" />
        </h1>
        <p class="PageHero__description">
          <slot name="desc" />
        </p>
      </div>
      <div class="PageHero__scroll">
        <span>Scroll</span>
        <!-- <span class="PageHero__scrollDot"></span> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.PageHero__wrap {
  @apply top-0 right-0 bottom-0 left-0 z-2 absolute lg: pointer-events-none;

  @screen md {
    @apply py-0 px-20px;
  }
}

// .PageHero__wave {
//   @apply m-auto w-full right-0 -bottom-[10px] left-0 z-3 absolute;
//   // position: absolute;
//   // right: 0;
//   // bottom: -10px;
//   // left: 0;
//   // margin: auto;
//   // width: 100%;
// }
.PageHero__inner {
  @apply h-full mx-auto my-0 max-w-1366px box-border;
  @include md(min) {
    @apply flex items-center justify-center;
  }
}

.PageHero__content {
  @apply mx-auto my-0 w-full max-w-1150px z-0 relative box-border;
   padding-right: percentage(calc(575 / 1326));

  @include md(min) {
    @apply flex flex-col justify-center;
  }

  @include md(max) {
    @apply h-full px-20px pt-130px pb-0;
  }
}

.PageHero__heading {
  @apply text-hex-42b883;
  margin: 0 0 em(40, 110);
  font-family: $FONT_EN;
  font-size: em(110, 16);
  line-height: 0.8;

  // color: $COLOR_MAIN;
  @include md(max) {
    margin: 0 0 em(40, 65);
    font-size: em(65, 16);
  }

  .PageHero__wrap.-home & {
    @apply text-hex-35495e;
    margin: 0 0 em(60, 36);
    font-size: em(36, 16);
    line-height: 1.15;

    // color: $COLOR_BASE;
    @include lg(max) {
      font-size: em(26, 16);
    }

    @include md(max) {
      margin: 0 0 em(24, 20);
      font-size: em(20, 16);
    }

    b {
      font-size: em(54, 36);

      @include lg(max) {
        font-size: em(36, 26);
      }

      @include md(max) {
        font-size: em(25, 20);
      }
    }
  }

  .PageHero__wrap.-about & {
    @apply text-white;
  }

  .PageHero__wrap.-author & {
    @apply text-white;
  }

  .PageHero__wrap.-qa & {
    @apply dark: text-white;
  }

  .PageHero__wrap.-inquiry & {
    @apply text-white;
  }

  .PageHero__wrap.-note & {
    @apply text-bluegray dark: text-white;

    @include md(max) {
      text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;
    }
  }

  span {
    @apply inline-block;
  }
}

.PageHero__headingEn {
  @apply w-full text-hex-42b883;
  margin-bottom: em(24, 100);
  font-size: em(100, 36);
  line-height: 1.2;
  text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;

  @include lg(max) {
    font-size: em(80, 26);
  }

  @include md(max) {
    @apply text-5xl;
    margin-bottom: em(8, 60);
  }
}

.PageHero__description {
  @apply m-0 text-xl;
  line-height: 2.3;

  @include lg(max) {
    font-size: em(18, 16);
  }

  @include md(max) {
    @apply text-lg;
    line-height: 1.5625;
  }

  .PageHero__wrap.-about & {
    @apply text-white;
  }

  .PageHero__wrap.-author & {
    @apply text-white;
  }

  .PageHero__wrap.-form & {
    @apply text-white;
  }
}

.PageHero__logo {
  @apply top-1/2 left-1/2 -z-1 absolute;
    transform: translate(-48px, -50%);
    width: percentage(calc(649 / 1113));

  @include md(max) {
    @apply top-38px w-336px -translate-x-86px;
  }

  & img {
    @apply opacity-0;
  }

  &::after {
    @apply bg-no-repeat -z-1 absolute;
    content: "";
    background-size: 100%;
  }

  .PageHero__wrap.-home & {
    &::after {
      @apply h-269px -right-20px bottom-45px w-784px;
      background-image: url($PATH + "hero-bg-home.svg");

      @include md(max) {
        @apply right-auto h-110px -bottom-16px -left-36px w-321px;
      }
    }
  }

  .PageHero__wrap.-about & {
    &::after {
      @apply h-208px right-8px bottom-99px w-779px;
      background-image: url($PATH + "hero-bg-about.svg");

      @include md(max) {
        @apply right-auto h-85px bottom-14px -left-320px w-319px;
      }
    }
  }

  .PageHero__wrap.-author & {
    &::after {
      @apply h-208px right-27px bottom-99px w-902px;
       background-image: url($PATH + "hero-bg-author.svg");

      @include md(max) {
        @apply right-auto h-85px bottom-10px -left-65px w-369px;
       }
    }
  }

  .PageHero__wrap.-note & {
    &::after {
      @apply h-228px -right-16px bottom-63px w-709px;
      background-image: url($PATH + "hero-bg-note.svg");

      @include md(max) {
        @apply h-163px -right-7px -bottom-72px w-484px;
      }
    }
  }

  .PageHero__wrap.-qa & {
    &::after {
      @apply h-248px -right-20px bottom-48px w-674px;
      background-image: url($PATH + "hero-bg-qa.svg");

      @include md(max) {
        @apply h-102px right-55px -bottom-6px w-276px;
      }
    }
  }

  .PageHero__wrap.-form & {
    &::after {
      @apply h-248px -right-20px bottom-48px w-674px;
       background-image: url($PATH + "hero-bg-form.svg");

      @include md(max) {
        @apply h-102px right-55px -bottom-6px w-276px;
      }
    }
  }
}

.PageHero__scroll {
  @apply h-[60px] bottom-[1%] left-1/2 w-[2px] z-4 -translate-x-[50%] absolute;
  animation: arrowMove 1s ease-in-out infinite;
  @include md(max) {
    @apply bottom-[10px];
   }

  .PageHero__wrap.-home & {
    @apply bg-gray-500 dark: bg-white;
  }

  .PageHero__wrap.-about & {
    @apply bg-white;
  }

  .PageHero__wrap.-author & {
    @apply bg-white;
  }

  // .PageHero__wrap.-note & {
  //   @apply bg-gray-500 dark: bg-white;
  // }

  .PageHero__wrap.-qa & {
    @apply bg-gray-500 dark: bg-white;
  }

  .PageHero__wrap.-form & {
    @apply bg-white;
  }
}

/*下からの距離が変化して全体が下→上→下に動く*/

@keyframes arrowMove {
  0% {
    bottom: 1%;
  }

  50% {
    bottom: 3%;
  }

  100% {
    bottom: 1%;
  }
}

/*Scrollテキストの描写*/
.PageHero__scroll span {
  @apply text-xs bottom-[10px] -left-[20px] text-gray-500 tracking-[0.05em] absolute dark: text-light-500;
  /*描画位置*/
  //position: absolute;
  //left: -20px;
  //bottom: 10px;

  /*テキストの形状*/
  //color: #6b7280;
  //font-size: 0.7rem;
  //letter-spacing: 0.05em;

  /*縦書き設定*/
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;

  .PageHero__wrap.-about & {
    @apply text-light-500;
  }

  .PageHero__wrap.-author & {
    @apply text-light-500;
  }

  .PageHero__wrap.-form & {
    @apply text-light-500;
  }
}

/* 矢印の描写 */
.PageHero__scroll::before {
  @apply h-[20px] -right-[6px] bottom-0 w-[2px] absolute dark: bg-light-500;
  content: "";

  /*描画位置*/
  //position: absolute;
  //bottom: 0;
  //right: -6px;

  /*矢印の形状*/
  //width: 1px;
  //height: 20px;
  //background: #6b7280;
  transform: skewX(-31deg);

  .PageHero__wrap.-home & {
    @apply bg-gray-500 dark: bg-white;
  }

  .PageHero__wrap.-about & {
    @apply bg-light-500;
  }

  .PageHero__wrap.-author & {
    @apply bg-light-500;
  }

  // .PageHero__wrap.-note & {
  //   @apply bg-gray-500 dark: bg-white;
  // }

  .PageHero__wrap.-qa & {
    @apply bg-gray-500 dark: bg-white;
  }

  .PageHero__wrap.-form & {
    @apply bg-light-500;
  }
}

.PageHero__scroll::after {
  @apply h-[60px] right-0 bottom-0 w-[1px] absolute dark: bg-light-500;
  content: "";

  /*描画位置*/
  //position: absolute;
  //bottom: 0;
  //right: 0;

  /*矢印の形状*/
  //width: 1px   ;
  //height: 60px;
  //background: #eee;

  // .PageHero__wrap.-home & {
  //   @apply bg-gray-500;
  // }
}
</style>
