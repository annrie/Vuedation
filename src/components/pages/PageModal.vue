<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { CarouselAboutData } from "@/store/app.config";
import store from "@/store";
import { DispatchType, ModalId } from "@/store/app.config";

export default defineComponent({
  name: "PageModal",
  props: {
    carouselData: {
      type: Object as PropType<CarouselAboutData[]>,
      required: true,
    },
  },
  setup(props) {
    const cData = computed(() => props.carouselData);
    const cIndex = computed(() => store.getters.modalId);
    const isModalOpen = computed(() => store.getters.isModalOpen);
    /**
     * モーダル
     */
    const onCloseModal = () => {
      store.dispatch(DispatchType.MODAL_CLOSE);
      store.dispatch(DispatchType.SET_MODAL, ModalId.NONE);
    };

    return {
      cData,
      cIndex,
      isModalOpen,
      onCloseModal,
    };
  },
});
</script>

<template>
  <teleport to="#modal">
    <div class="Modal" :class="{ '-show': isModalOpen }">
      <div class="Modal__image">
        <img v-if="cIndex > -1" :src="cData[cIndex].srcL" :alt="cData[cIndex].alt" />
      </div>
      <button type="button" class="Modal__button" @click="onCloseModal()">
        <span class="_VisuallyHidden">閉じる</span>
        <span class="Modal__buttonBar -bar1"></span>
        <span class="Modal__buttonBar -bar2"></span>
      </button>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.Modal {
  @apply opacity-0 top-0 right-0 bottom-0 left-0 z-1000 fixed invisible;
  transform: scale(0.94);
  background-color: rgba(#fff, 0.9);
  transition: visibility 0s linear 0.3s, opacity 0.3s ease, transform 0.3s ease;

  &.-show {
    @apply opacity-100 scale-100 visible;
    transition: opacity var(--SEC) ease, transform var(--SEC) ease;
  }
}

.Modal__image {
  @apply flex h-full w-full p-100px items-center justify-center box-border;

  @screen lt-tb {
    @apply py-50px px-30px;
  }
}

.Modal__button {
  @apply bg-transparent border-none cursor-pointer border-0 h-30px top-60px right-60px w-30px absolute;

  @screen lt-tb {
    @apply top-30px right-20px;
  }
}

.Modal__buttonBar {
  @apply rounded-2px h-40px origin-center top-1/2 left-1/2 w-4px absolute;
  background-color: var(--COLOR_MAIN);

  &.-bar1 {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.-bar2 {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
