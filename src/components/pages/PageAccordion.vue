<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";

export default defineComponent({
  name: "PageAccordion",
  setup() {
    const state = reactive({
      height: "1em",
      isOpen: false,
    });
    // <div class="head" ref="head">
    const head = ref<HTMLElement>();
    // <div class="body" ref="body">
    const body = ref<HTMLElement>();

    const open = () => {
      const headHeight: number = head.value?.offsetHeight || 0;
      const bodyHeight: number = body.value?.offsetHeight || 0;
      state.height = `${headHeight + bodyHeight}px`;
      state.isOpen = true;
    };

    const close = () => {
      state.height = `${head.value?.offsetHeight}px`;
      state.isOpen = false;
    };

    const toggle = () => {
      state.isOpen ? close() : open();
    };
    onMounted(() => {
      state.height = `${head.value?.offsetHeight}px`;
    });

    return {
      toggle,
      head,
      body,
      ...toRefs(state),
    };
  },
});
</script>

<template>
  <div class="Accordion" :class="{ '-open': isOpen }" :style="{ height }">
    <h3 class="Accordion__heading">
      <button ref="head" type="button" class="Accordion__headingButton" @click="toggle">
        <slot name="head" />
      </button>
    </h3>
    <div ref="body" class="Accordion__content">
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.Accordion {
  @apply rounded-10px relative overflow-hidden;
  transition: height var(--SEC) ease;
  will-change: height;
  box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);

  &.-open {
    &::after {
      transform: rotate(180deg);
    }
  }

  &::before {
    @apply h-[6px] top-[57px] right-[30px] w-[30px] absolute content-empty;
    background-color: var(--COLOR_MAIN);


    @screen lt-tb {
      @apply h-[3px] top-[35px] right-[15px] w-[15px];
    }
  }

  &::after {
    @apply bg-hex-42b883 h-[6px] top-[57px] right-[30px] w-[30px] absolute content-empty rotate-90deg;
    //transform: rotate(90deg);
    transform-origin: center;
    transition: transform var(--SEC) ease;

    @screen lt-tb {
      @apply h-3px top-35px right-15px w-15px;
    }
  }
}

.Accordion__heading {
  @apply m-0;
  font-size: em(16, 16);

  &::before {
    @apply h-24px top-48px left-58px w-26px absolute content-empty;
    background-image: url($PATH + "faq-q.svg");
    background-repeat: no-repeat;
    background-size: 100%;

    @screen lt-tb {
      @apply h-22px top-24px left-20px w-23px;
    }
  }
}

.Accordion__headingButton {
  @apply bg-transparent border-none cursor-pointer border-0 text-left w-full py-[44px] px-[120px] block dark:text-white;
  font-size: em(18, 16);
  color: var(--COLOR_BASE);
  line-height: 1.8;

  @screen lt-tb {
    @apply py-20px pr-40px pl-60px;
    font-size: em(15, 16);
  }

  &:focus {
    @apply outline-none;

    &::before {
      @apply opacity-100;
    }
  }

  &::before {
    @apply rounded-10px opacity-0 top-0 right-0 bottom-0 left-0 absolute pointer-events-none content-empty;
    border: 2px solid var(--COLOR_MAIN);
  }
}

.Accordion__content {
  @apply px-120px pt-20px pb-40px;

  @screen lt-tb {
    @apply py-20px pr-20px pl-60px;
  }
}
</style>
