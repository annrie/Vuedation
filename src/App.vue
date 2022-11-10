<template>
  <component :is="layout">
    <template v-if="ClientReloadPrompt">
      <ClientReloadPrompt />
    </template>
    <!-- <Suspense> -->
    <router-view />
    <!-- </Suspense> -->
    <notifications />
  </component>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";
// import { useHead } from "@vueuse/head";
// import { isDark, preferredDark } from "@/composables/dark";
// https://router.vuejs.org/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup
import { useRoute } from "vue-router";
import ReloadPWA from "./components/ReloadPWA.vue";

// Import layouts.
import Default from "@/layouts/default.vue";
import Alt from "@/layouts/alt.vue";

import { notify } from "@kyvg/vue3-notification";
// useHead({
//   title: "Vuedation",
//   meta: [
//     { name: "description", content: "Vuedation(Vue3 with Vite)による仮想書店サイト" },
//     {
//       name: "theme-color",
//       content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
//     },
//   ],
//   // link: [
//   //   {
//   //     rel: "icon",
//   //     type: "image/svg+xml",
//   //     href: computed(() => (preferredDark.value ? "/favicon-dark.svg" : "/favicon.svg")),
//   //   },
//   // ],
// });
notify({
  title: "Authorization",
  text: "You have been logged in!",
});
// const router = useRouter();
const route = useRoute();

// Create a lookup object to reference the components.
const layouts = {
  default: Default,
  alt: Alt,
};

// Return the referenced variable rather than the component name.
// @ts-ignore
const layout = computed(() => layouts[route.meta.layout || "default"]);

const ClientReloadPrompt =
  typeof window !== "undefined"
    ? defineAsyncComponent(() => import("./components/ReloadPWA.vue"))
    : null;

// // Handle error - page/post not found or general errors.
// onErrorCaptured((error) => {
//   console.log("name =", error.name);
//   console.log("message =", error.message);
//   console.log("statusCode =", error.statusCode);

//   // Push to 404 or general error page.
//   // 404 - Page Not Found
//   // 400 - Bad Request
//   // 500 - Internal Server Error
//   const pathArray = route.path.substring(1).split("/");
//   const name = error.statusCode === 404 ? "all" : "error";
//   const params = {
//     name: error.name,
//     statusCode: error.statusCode,
//     message: error.message,
//     stack: error.stack,
//   };

//   if (error.statusCode === 404) {
//     params.all = pathArray;
//   } else {
//     params.error = pathArray;
//   }

//   router.push({
//     name,
//     params,
//   });

//   // Return false to prevent the error from propagating further.
//   return false;
// });
</script>
