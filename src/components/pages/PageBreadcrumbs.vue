<script lang="ts" setup>
// https://technical-seo.jp/structured-data-for-breadcrumb/
// import { defineComponent } from "vue";
import { breadRoutes } from "@/router";

// export default defineComponent({
// name: "PageBreadcrumbs",
// props: {
//   label: {
//     type: String,
//     required: true,
//   },
// },
interface Props {
  label: string;
}

const props = defineProps<Props>();

// setup(props) {
let routeData;
for (const data of breadRoutes) {
  if (data.name === props.label) routeData = data;
}
const paths: string[] = ["/"];
const names: string[] = ["Top"];
if (routeData) {
  paths.push(routeData.path);
  names.push(props.label);
}
// return { paths, names };
// },
// });
</script>
<template>
  <nav class="PageBreadcrumbs" aria-label="パンくずリスト">
    <ul
      class="PageBreadcrumbs__list"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      <li
        v-for="(path, index) in paths"
        :key="path"
        class="PageBreadcrumbs__item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <router-link
          v-if="index !== paths.length - 1"
          class="PageBreadcrumbs__link"
          itemprop="item"
          :to="path"
        >
          <span itemprop="name">{{ names[index] }}</span>
        </router-link>
        <a v-else>{{ names[index] }}</a>
        <meta itemprop="position" :content="'index' + 1" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@forward "@/styles/scss/global";
@use "@/styles/scss/global" as *;

.PageBreadcrumbs {
  @apply mx-auto mt-50px mb-0 max-w-1000px;

  @include lg(max) {
    @apply py-0 px-20px;
  }
}

.PageBreadcrumbs__list {
  @apply flex m-0 p-0;
}

.PageBreadcrumbs__item {
  @apply list-none;
  font-size: em(13, 16);

  &:not(:first-child) {
    @apply pl-4 relative;
    margin-left: em(6, 13);

    &::before {
      @apply top-0 left-0 text-hex-42b883 absolute translate-y--50%;
      content: '>'
      color: var(--COLOR_MAIN);
    }
  }

  > a {
    @apply no-underline;
    color: var(--COLOR_MAIN);

    &[href] {
      &:hover {
        @apply hover:underline;
      }
    }
  }
}
</style>
