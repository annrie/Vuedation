import {transform} from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'
import {defineConfig} from 'vite-plugin-windicss'

import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import plugin from 'windicss/plugin'

// function range(size, startAt = 1) { // for safelist
//   return Array.from(Array(size).keys()).map((i) => i + startAt)
// }

const formKitWindi = require('@formkit/themes/windicss')
const formsPlugin = require('windicss/plugin/forms')

export default defineConfig({
  extract: {
    include: ['index.html', '**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
      'tailwind.config.{ts,js}',
    ],
  },
  attributify: true,
  darkMode: 'media',
  transformCSS: 'pre',
  safelist: 'select-none', // [
  // range(3).map((i) => `p-${i}`), // p-1 to p-3
  // range(10).map((i) => `mt-${i}`), // mt-1 to mt-10
  // ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      red: '#ff4b00', // rgb (255,75,0)
      orange: '#f6aa00', // rgb (246,170,0)
      yellow: '#f2e700', // rgb (242,231,0)
      green: '#00b06b', // rgb (0,176,107)
      blue: '#1971ff', //  rgb (25,113,255)
      magenta: '#990', // rgb (153,0,153)
      main: '#42b883',
      primary: '#1779ba',
      secondary: '#767676',
      success: '#3adb76',
      warning: '#ffae00',
      alert: '#cc4b37',
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'center-bottom': 'center bottom',
      'center-top': 'center top',
    },
    dropShadow: {
      base: 'drop-shadow(3px 3px 6px rgba(#d9e6bd, 0.63))',
      hover: 'drop-shadow(3px 3px 24px rgba(#d9e6bd, 0.9))',
    },
    extend: {
      screens: {
        sm: '320px',
        md: '640px',
        tb: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans'],
        // sans: ['ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans].join(','),
        serif: ['Hiragino Sans', 'メイリオ', 'Meiryo', 'sans-serif'],
        // ...(defaultTheme.fontFamily.sans - serif),
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Oswald'],
        body: ['Open Sans'],
      },
      colors: {
        main: '#42b883',
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      outline: {
        main: ['2px solid #42b88', '6px'],
      },
      lineHeight: {
        narrow: '1.4',
        just: '1.6',
      },
    },
  },
  // shortcuts: {
  //   btn: {
  //     '@apply':
  //       'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:(cursor-default disabled:bg-gray-600 disabled:opacity-50)',
  //   },
  //   'icon-btn':
  //     'inline-block text-lx cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
  //   'box-shadow-base': '3px 3px 6px rgba(#d9e6bd, 0.63)',
  //   'box-shadow-hover': '3px 3px 24px rgba(#d9e6bd, 0.9)',
  // },

  // plugins: [formsPlugin, formKitWindi],
  plugins: [
    formsPlugin,
    formKitWindi,
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      dark: true,
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
    require('@windicss/plugin-heropatterns')({
      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#dfdbe5',
        'blue-dark': '#000044', //also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        '100': '1.0',
      },
    }),
    plugin(({addUtilities}) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
        '.skew-31deg': {
          transform: 'skewX(-31deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({addComponents}) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
        // '.banner': {
        //   display: 'block',
        //   color: '#0a0a0a',
        //   backgroundColor: '#fefefe',
        //   padding: '.5rem 1rem',
        //   borderRadius: '.25rem',
        //   fontWeight: '700',
        //   height: '150px',
        //   width: '487px',
      }
      // },
      addComponents(buttons)
      // },
    }),
    plugin(({addDynamic, variants}) => {
      addDynamic(
        'skew',
        ({Utility, Style}) => {
          return Utility.handler
            .handleStatic(Style('skew'))
            .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
            .createProperty('transform')
        },
        variants('skew')
      )
    }),
  ],
})
