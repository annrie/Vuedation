import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Unocss from 'unocss/vite'
// import presetWind from '@unocss/preset-wind'
import presetUno from '@unocss/preset-uno'
import Restart from 'vite-plugin-restart'
import {VitePWA} from 'vite-plugin-pwa'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import dns from 'dns'

import {startServer} from 'windicss-analysis'
import UnocssIcons from '@unocss/preset-icons'
import {presetUno, presetAttributify} from 'unocss'
dns.setDefaultResultOrder('verbatim')
// ↑ https://vitejs.dev/config/server-options.html#server-host

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // AutoImport({
    //   imports: [
    //     // presets
    //     'vue',
    //     'vue-router',

    //     // custom
    //     {
    //       vuex: [],
    //       axios: [
    //         // default imports
    //         ['default', 'axios'], // import { default as axios } from 'axios',
    //       ],
    //     },
    //   ],

    //   dts: 'src/auto-imports.d.ts',
    //   dirs: ['./src/composables', './src/store', './src/modules'],
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/,
    //     /\.vue\?vue/, // .vue
    //     /\.md$/, // .md
    //   ],
    // }),

    // https://github.com/antfu/unplugin-vue-components
    // Components({
    //   dirs: ['src/components'],
    //   deep: true,
    //   directoryAsNamespace: true,
    //   // allow auto load markdown components under `./src/components/`
    //   extensions: ['vue', 'md'],
    //   // allow auto import and register components used in markdown
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    //   dts: 'src/components.d.ts',
    // }),

    // Pages({
    //   extensions: ['vue', 'md'],
    // }),
    // Unocss(),
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
    Restart({
      restart: ['./dist/*.js'],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // Unocss(),

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
        name: 'Vuedation with vite',
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
    Unocss({
      // when `presets` is specified, the default preset will be disabled
      // so you could only use the pure CSS icons in addition to your
      // existing app without polluting other CSS
      presets: [
        presetAttributify({}),
        presetUno(),
        UnocssIcons({
          // options
          extraProperties: {
            display: 'inline-block',
          },
        }),
        // presetUno() - if you want to use other atomic CSS as well
      ],
    }),
  ],

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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue'], // https://github.com/antonreshetov/vue-unicons/issues/49
  },

  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // https://blog.ikappio.com/use-global-css-with-vue-cli/
        // additionalData: `@import "@/styles/scss/math.scss";\
        //                   @import "@/styles/scss/components/mixins/mixin.scss";`,
        // additionalData: `@use "sass:math"; \
        additionalData: `@import "@/styles/scss/main.scss";`,
        // @import "@/styles/less/main.scss";`,
        //  @import "@/styles/less/main.less";`,
      },
    },
  },
})
