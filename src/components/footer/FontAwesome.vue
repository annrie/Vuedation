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
            rel="noopener">
            <font-awesome-icon :icon="item.cls"
              size="3x" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.FontAwesome {
  @apply mt-120px;

  @screen lt-tb {
    @apply mt-60px;
  }
}

.FontAwesome__inner {
  @apply mx-auto my-0 max-w-1000px py-0 px-20px;
}

.FontAwesome__list {
  @apply my-0 -mx-13px p-0;

  @screen md {
    @apply flex justify-center;
  }

  @screen lt-tb {
    @apply flex m-0 justify-around;
  }
}

.FontAwesome__item {
  @apply list-none py-0 px-[13px] box-border;
  width: calc(100% / 12);

  @screen lt-tb {
    @apply text-center text-sm w-full p-0;
  }

  &:not(:last-child) {
    @screen lt-tb {
      @apply mb-[15px];
    }
  }

  > a {
    @apply rounded-10px p-1 text-green-600/80 border-1px border-solid border-hex-#e5e5e5 overflow-hidden block box-border dark:(text-blue-400 border-blue-500);
    box-shadow: 3px 3px 6px rgba(#d9e6bd, 0.63);
    transition: box-shadow var(--SEC) ease;

    @screen lt-tb {
      @apply max-w-340px inline-block align-top;
    }

    &:hover {
      @apply bg-sky-400/50;
      box-shadow: 3px 3px 24px rgba(#d9e6bd, 0.9);
    }
  }
}
</style>
