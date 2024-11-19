<script setup lang="ts">
import { computed, onUpdated } from "vue";
import AppMenuTrigger from "@/components/header/AppMenuTrigger.vue";
import AppMenu from "@/components/AppMenu.vue";
import store from "@/store";
import anime from "animejs";
import VueShareButton from "./header/VueShareButton.vue";

const isMenuOpen = computed(() => store.getters.isMenuOpen);

console.log(">>AppHeader >setup | isMenuOpen : " + isMenuOpen.value);

onUpdated(() => {
  anime({
    targets: ".AppHeader__bgMorph",
    d: [
      {
        value:
          "M 7.7423617,6.5524041 C 0.14213171,13.241204 -0.28352929, 25.218399 6.5488487,32.446038 13.237649,40.04627 24.578354, 40.568996 32.442483,33.639553 39.813699,26.434583 40.216105, 14.96193 33.635997,7.7459191 26.935569,0.39795815 15.101951, -0.40029585 7.7423617,6.5524041 Z",
      },
      {
        value:
          "M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459, 31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693, 39.467197 38.833611,39.035804 34.978274,30.942616 24.624859, 11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606, 1.4728946 19.499615,1.5030295 Z",
      },
    ],
    easing: isMenuOpen.value ? "easeOutQuad" : "easeInQuad",
    duration: 400,
  });
});
</script>

<template>
  <header class="AppHeader" :class="{ '-open': isMenuOpen }">
    <nav class="AppHeader__nav" aria-label="グローバルメニュー">
      <AppMenuTrigger />
      <div class="AppHeader__list" role="list">
        <div class="AppHeader__home" role="listitem">
          <router-link to="/" class="AppHeader__homeLink">
            <span class="AppHeader__homeLogo">
              <img src="/static/texture/logo-vuedation.svg" alt="ロゴ：Vue.js" />
            </span>
            <span class="AppHeader__homeText">
              <span class="AppHeader__homeTextMain">
                <span>Vuedation</span>
                <!-- <span>でWeb開発</span> -->
              </span>
              <!-- <span class="AppHeader__homeTextSub">(Vue3 + Vite)</span> -->
            </span>
            <span class="show-for-sr">ホーム</span>
          </router-link>
        </div>
        <VueShareButton />
        <!-- <div class="AppHeader__note" role="listitem">
          <router-link to="/production-note" class="AppHeader__noteLink">
            <em class="AppHeader__noteText">Production note</em>
          </router-link>
        </div> -->
        <div class="AppHeader__content">
          <AppMenu />
        </div>
      </div>
      <div class="AppHeader__bg">
        <svg
          class="AppHeader__bgImage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 50"
        >
          <path
            class="AppHeader__bgMorph"
            style="transform: rotate(180deg) scaleX(1.2); transform-origin: 41% 40%"
            d="M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,
            31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,
            39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,
            11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,
            1.4728946 19.499615,1.5030295 Z"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.AppHeader {
  @apply inset-x-0 top-0 right-0 left-0 z-1 fixed dark:bg-dark-50:30;
  background-color: rgba(#fff, 0.9);
  }

  .AppHeader__nav {
    @apply py-0 pr-160px pl-38px;

    @screen lt-lg {
      @apply py-0 pr-140px pl-38px;
    }

    @screen lt-md {
      @apply py-0 pr-83px pl-24px;
    }
  }

  .AppHeader__list {
    @apply flex h-80px items-center;

    @screen lt-md {
      @apply h-70px;
    }
  }

  .AppHeader__home {
    >a {
      &:focus {
        outline: 2px solid var(--COLOR_MAIN);
        outline-offset: 6px;
      }
    }
  }

  .AppHeader__homeLink {
    @apply flex items-center no-underline;
  }

  .AppHeader__homeLogo {
    @apply flex-shrink-0 w-58px;


    @screen lt-md {
      @apply w-46px;
    }
  }

  .AppHeader__homeText {
    font-size: em(18, 16);
    color: var(--COLOR_BASE);

    @screen lt-lg {
      @apply text-base;
    }

    @screen lt-md {
      margin-left: em(6, 14);
      font-size: em(14, 16);
    }

    >span {
      @apply inline-block;

      @screen lt-lg {
        @apply block;
      }
    }
  }

  .AppHeader__homeTextMain {
    @apply mr-20px text-xl at-sm:hidden dark:text-white:70;
    color: var(--COLOR_MAIN);

    @screen lt-lg {
      @apply mr-0;
      font-size: em(20, 16);
    }

    @screen lt-md {
      font-size: 1rem;
    }

    @screen at-sm {
      @include visually-hidden;
    }
  }

  .AppHeader__content {
    &::before {
      @apply opacity-0 top-0 right-0 bottom-0 left-0 z-1 fixed pointer-events-none content-empty;
      background-color: rgba(#fff, 0.8);
    }

    .AppHeader.-open & {
     &::before {
        @apply opacity-100;
     }
  }
}

.AppHeader__bg {
  @apply h-109px transition-transform -top-4px right-13px w-125px -z-1 duration-4 fixed pointer-events-none;

  @screen lt-md {
    @apply h-83px -right-12px w-96px;
  }

  .AppHeader.-open & {
    @apply right-auto z-1;
    top: vw(283, $XL);
    left: vw(930, $XL);
    width: vw(125, $XL);
    height: vw(109, $XL);
    transform: scale(19.5) rotate(-135deg);
    transform-origin: center;

    @screen lt-md {
      top: vw(153, $XS);
      transform: scale(10) rotate(-143deg);
      left: vw(180, $XS);
      width: vw(125, $XS);
      height: vw(109, $XS);
    }
  }
}

.AppHeader__bgImage {
  @apply h-full w-full block;
  fill: var(--COLOR_MAIN);
}
</style>
