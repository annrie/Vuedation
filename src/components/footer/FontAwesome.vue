<script lang="ts">
import {defineComponent} from "vue";
import {AppData} from "@/store/app.data";

export default defineComponent({
  name: "FontAwesome",
  data() {
    return {
      fontAwesomeData: AppData.fontAwesomeDataList,
    };
  },
});
</script>

<template>
  <aside class="FontAwesome">
    <div class="FontAwesome__inner">
      <ul class="FontAwesome__list">
        <li v-for="item of fontAwesomeData"
          :key="item.name"
          class="FontAwesome__item">
          <a :href="item.link"
            target="_blank"
            rel="noopener noreferrer">
            <font-awesome-icon :icon="item.cls"
              size="3x" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.FontAwesome {
  @apply mt-120px;

  // margin-top: 120px;
  @include md(max) {
    @apply mt-60px;
    // margin-top: 60px;
  }
}

.FontAwesome__inner {
  @apply mx-auto my-0 max-w-[1000px] py-0 px-[20px];
  // max-width: 1000px;
  // margin: 0 auto;
  // padding: 0 20px;
}

.FontAwesome__list {
  @apply my-0 -mx-[13px] p-0;

  // margin: 0 -13px;
  // padding: 0;
  @include md(min) {
    @apply flex justify-center;
    // display: flex;
    // justify-content: center;
  }

  @include md(max) {
    @apply flex m-0 justify-around;
    // margin: 0;
  }
}

.FontAwesome__item {
  @apply list-none py-0 px-[13px] box-border;
  width: calc(100% / 12);

  // padding: 0 13px;
  // list-style-type: none;
  // box-sizing: border-box;
  @include md(max) {
    @apply text-center text-sm w-full p-0;
    // width: 100%;
    // padding: 0;
    // text-align: center;
  }

  &:not(:last-child) {
    @include md(max) {
      @apply mb-[15px];
      // margin-bottom: 15px;
    }
  }

  >a {
    @apply rounded-10px p-1 text-green-600/80 overflow-hidden block box-border dark: text-blue-400 ;
    // overflow: hidden;
    // display: block;
    // border: 4px solid #e5e5e5;
    // border-radius: 10px;
    // box-shadow: $SHADOW_BASE;
    transition: box-shadow $SEC ease;

    // box-sizing: border-box;
    @include md(max) {
      @apply max-w-340px inline-block align-top;
      // max-width: 340px;
      // display: inline-block;
      // vertical-align: top;
    }

    &:hover {
      @apply bg-sky-400/50;
      box-shadow: $SHADOW_HOVER;
    }
  }
}
</style>
