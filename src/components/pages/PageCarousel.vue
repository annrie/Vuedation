<script lang="ts">
import {defineComponent, computed, PropType, toRefs, reactive} from 'vue'
import store from '@/store'
import PageCarouselItem from './PageCarouselItem.vue'
import useWindowSize from '@/composables/use-window-size'
import {CarouselAboutData} from '@/store/app.config'
import {DispatchType} from '@/store/app.config'
import {gsap} from 'gsap'

export default defineComponent({
  name: 'PageCarousel',
  components: {
    PageCarouselItem,
  },
  props: {
    carouselData: {
      type: Object as PropType<CarouselAboutData[]>,
      required: true,
    },
  },
  setup(props) {
    const cData = computed(() => props.carouselData)
    //カルーセルの種類によって定義
    const state = reactive({
      //カルーセルの有無
      hasCarousel: false,
      //現在アクティブの番号
      nowCarouselNum: 0,
      //合計数
      maxCarouselNum: 0,
      //移動距離
      moveDis: 676 + 20,
      //初期
      defaultX: 150,
      //現在の移動値
      setX: 0,
    })
    state.hasCarousel = cData.value.length > 1 ? true : false

    const setPos = (dw: number) => {
      if (dw > 768) {
        //PC,TB
        state.moveDis = 676 + 20
        state.defaultX = 150
      } else {
        //SP
        state.moveDis = 310 + 20
        state.defaultX = 25
      }
      state.setX = state.defaultX - state.moveDis * state.nowCarouselNum
    }
    const {dw} = useWindowSize(() => {
      setPos(dw.value)
    })
    setPos(dw.value)
    state.maxCarouselNum = cData.value.length

    /**
     * 前へ
     */
    const onClickCarouselPrev = () => {
      console.log('🚀 ~ file: PageCarousel.vue ~ line 58 ~ onClickCarouselPrev')
      state.nowCarouselNum--
      if (state.nowCarouselNum < 0) state.nowCarouselNum = state.maxCarouselNum - 1
      state.setX = state.defaultX - state.moveDis * state.nowCarouselNum
    }
    /**
     * 次へ
     */
    const onClickCarouselNext = () => {
      console.log('🚀 ~ file: PageCarousel.vue ~ line 67 ~ onClickCarouselNext')
      state.nowCarouselNum++
      if (state.nowCarouselNum > state.maxCarouselNum - 1) state.nowCarouselNum = 0
      state.setX = state.defaultX - state.moveDis * state.nowCarouselNum
    }
    /**
     * モーダル
     */
    const onOpenModal = (id: number) => {
      store.dispatch(DispatchType.MODAL_OPEN)
      store.dispatch(DispatchType.SET_MODAL, id)
    }

    return {
      cData,
      onClickCarouselPrev,
      onClickCarouselNext,
      onOpenModal,
      ...toRefs(state),
    }
  },
})
</script>

<template>
  <div v-if="hasCarousel" class="Carousel">
    <div class="Carousel__inner">
      <ul ref="carouselRef" class="Carousel__contents">
        <PageCarouselItem v-for="(data, index) in cData" :key="index">
          <button type="button" class="Carousel__itemButton" @click="onOpenModal(index)">
            <img class="img" :src="data.src" :alt="data.alt" :data-id="data.id" />
          </button>
        </PageCarouselItem>
      </ul>
    </div>
    <div class="Carousel__controller">
      <button
        v-if="nowCarouselNum !== 0"
        type="button"
        class="Carousel__controllerButton -prev"
        @click="onClickCarouselPrev"
      >
        <span class="_VisuallyHidden">前のスライドへ</span>
      </button>
      <button
        v-if="nowCarouselNum !== maxCarouselNum - 1"
        type="button"
        class="Carousel__controllerButton -next"
        @click="onClickCarouselNext"
      >
        <span class="_VisuallyHidden">次のスライドへ</span>
      </button>
    </div>
  </div>
  <div v-else>
    <p>カルーセルなし</p>
  </div>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.Carousel {
  @apply mt-100px relative overflow-hidden;

    @screen lt-tb {
      @apply mt-60px;
    }
  }

  .Carousel__inner {}

  .Carousel__contents {
    transition: transform 0.2s;
    @apply flex justify-center;
  }

  .Carousel__item {
    @apply list-none flex-shrink-0 my-0 mx-10px w-676px;
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

    @screen lt-tb {
      @apply w-310px;
    }
  }

  .Carousel__itemButton {
    @apply bg-transparent border-none cursor-pointer border-0 p-0 block;

    &:focus {
      outline: 5px solid var(--COLOR_MAIN);
      outline-offset: -5px;
    }
  }

  .Carousel__controller {}

  .Carousel__controllerButton {
    @apply bg-transparent border-none cursor-pointer border-0 h-40px p-0 top-1/2 w-40px absolute;
    background-image: url($PATH+"arrow-slide.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @screen lt-tb {
      @apply h-20px w-20px;
    }

    &:focus {
      @include focus-base;
    }

    &.-prev {
      @apply left-20px;
    }

    &.-next {
      @apply origin-center right-20px rotate-180;
  }
}
</style>
