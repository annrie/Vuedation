//import {fileURLToPath, URL} from 'node:url'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import presetUno from '@unocss/preset-uno'
import ViteRestart from 'vite-plugin-restart'
import {VitePWA} from 'vite-plugin-pwa'
import VueDevTools from 'vite-plugin-vue-devtools'
//import Components from 'unplugin-vue-components/vite'
//import AutoImport from 'unplugin-auto-import/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'
import VueRouter from 'unplugin-vue-router/vite'
//import { VueRouterAutoImports } from 'unplugin-vue-router'
import dns from 'dns'

// @ts-expect-error failed to resolve types
import VueMacros from 'unplugin-vue-macros/vite'

import UnocssIcons from '@unocss/preset-icons'
import {presetUno, presetAttributify} from 'unocss'
dns.setDefaultResultOrder('verbatim')
// ↑ https://vitejs.dev/config/server-options.html#server-host

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  // base: './',
  plugins: [
		VueMacros({
//      setupBlock: true,
//      defineOptions: true,
//      shortEmits: true,
//      hoistStatic: true,
//      defineSlots: true,
//      defineModels: true,
//      namedTemplate: false,

			plugins: {
				vue: Vue({
					include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
         }),
      },
    }),
//     AutoImport({
//       imports: [
//         // presets
//         'vue',
//         'vue-router',
//        '@vueuse/head',
//        '@vueuse/core',
//        VueRouterAutoImports,
//        {
//          // add any other imports you were relying on
//          'vue-router/auto': ['useLink'],
//        },
//      ],
//      dts: 'src/auto-imports.d.ts',
//      dirs: [
//        'src/composables',
//        'src/stores',
//      ],
//      vueTemplate: true,
//    }),
    // https://github.com/antfu/unplugin-vue-components
//     Components({
//      // allow auto load markdown components under `./src/components/`
//      extensions: ['vue', 'md'],
//      // allow auto import and register components used in markdown
//      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
//      dts: 'src/components.d.ts',
//     }),


    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),

    ViteRestart({
      restart: ['./dist/*.js'],
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      // https://css-tricks.com/vitepwa-plugin-offline-service-worker/
      base:
        process.env.NODE_ENV === 'production'
          ? './' // prod
          : '/', // dev
      srcDir: 'src',
      filename: 'sw.ts',
      strategies: 'injectManifest',
      useCredentials: true,
      manifest: {
        name: 'Vuedation',
        short_name: 'Vuedation',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/favicon/android-chrome-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
        // enabled: process.env.SW_DEV === 'true',
        type: 'module',
        navigateFallbackAllowlist: [/^index.html$/],
      },
      injectManifest: {
        maximumFileSizeToCacheInBytes: 3000000,
      },
      workbox: {
        swDest: 'sw.js',
        globPatterns: ['**/*.{js,css,ico,png,svg,ttf,eot,woff,woff2,mp4}'],
        navigateFallback: null,
        sourcemap: true,
        maximumFileSizeToCacheInBytes: 3000000,
        runtimeCaching: [
          // {
          //   handler: 'NetworkOnly',
          //   urlPattern: /\/api\/.*\/*.json/,
          //   method: 'POST',
          //   options: {
          //     backgroundSync: {
          //       name: 'myQueueName',
          //       options: {
          //         maxRetentionTime: 24 * 60,
          //       },
          //     },
          //   },
          // },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // UnoCSS({
    //   // when `presets` is specified, the default preset will be disabled
    //   // so you could only use the pure CSS icons in addition to your
    //   // existing app without polluting other CSS
    //   presets: [
    //     presetAttributify({}),
    //     presetUno(),
    //     UnocssIcons({
    //       // options
    //       extraProperties: {
    //         display: 'inline-block',
    //       },
    //     }),
    //     // presetUno() - if you want to use other atomic CSS as well
    //   ],
    // }),
    // UnoCSS({
    //   // when `presets` is specified, the default preset will be disabled
    //   // so you could only use the pure CSS icons in addition to your
    //   // existing app without polluting other CSS
    //   presets: [
    //     presetAttributify({}),
    //     presetUno(),
    //     UnocssIcons({
    //       // options
    //       extraProperties: {
    //         display: 'inline-block',
    //       },
    //     }),
    //     // presetUno() - if you want to use other atomic CSS as well
    //   ],
    // }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap()
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window'],
  },

  server: {
    host: true,
    open: true,
    port: 3000,
    // strictPort: true,
  },
  build: {
    sourcemap: false,
    // manifest: true,
    // ssrManifest: true,
    // emptyOutDir: true,
    preview: {
      host: true,
    },
    minify: 'terser',
    chunkSizeWarningLimit: 1500,
  },
  logLevel: 'info',
//  resolve: {
//    alias: {
//      '@': fileURLToPath(new URL('./src', import.meta.url)),
//    },
//    dedupe: ['vue'], // https://github.com/antonreshetov/vue-unicons/issues/49
//  },

  css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          // https://vitejs.dev/config/shared-options#css-preprocessoroptions
          api: 'modern-compiler',
          //api: 'legacy',
          additionalData: `
            @use 'sass:math';
            @use 'sass:list';
            @use '@/styles/scss/global/index.scss';`
        // @import "@/styles/less/main.scss";`,
        //  @import "@/styles/less/main.less";`,
          },
       },
    },
  })
