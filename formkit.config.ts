import { generateClasses } from '@formkit/themes';
// import {WindiCSS} from 'vite-plugin-windicss'
// import {ja} from '@formkit/i18n'
import {DefaultConfigOptions} from '@formkit/vue'
import {ja, en} from '@formkit/i18n'
// import '@formkit/themes/genesis'
import genesis from '@formkit/themes/unocss/genesis'
import {generateClasses} from '@formkit/themes'
import theme from './src/theme.js'
import {createAutoAnimatePlugin} from '@formkit/addons'

function addAsteriskPlugin(node) {
  node.on('created', () => {
    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      const isRequired = node.props.parsedRules.some((rule) => rule.name === 'required')

      if (isRequired) {
        // this input has the required rule so we modify
        // the schema to add an astrics to the label.
        sectionsSchema.label = {
          children: ['$label', '*'],
        }
      }
      return schemaFn(sectionsSchema)
    }
  })
}

function messageToHTMLPlugin(node) {
  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Artboard 10</title><path d="M50,19A31,31,0,1,0,81,50,31,31,0,0,0,50,19Zm0,56A25,25,0,1,1,75,50,25,25,0,0,1,50,75Z"></path><rect x="47" y="34" width="6" height="19"></rect><circle cx="50" cy="62" r="3"></circle></svg>'

  node.on('created', () => {
    const original = node.props.definition.schema
    node.context.warningIcon = icon
    node.props.definition.schema = (extensions) => {
      if (!extensions.message) {
        extensions.message = {
          attrs: {
            innerHTML: '$warningIcon + " " + $message.value',
          },
          children: null,
        }
      }
      return original(extensions)
    }
  })
}

export default {
  config: {
    icons: {
      ...genesisIcons,,
    }
    // classes: generateClasses(genesis),
    classes: generateClasses({
      text: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner:
          'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 ',
        input:
          'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
      },
    }),
  },
  plugins: [createAutoAnimatePlugin(), addAsteriskPlugin, messageToHTMLPlugin],
  // iconLoaderUrl: (iconName) =>
  //   `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${iconName}.svg`,
}

const config: DefaultConfigOptions = {
  locales: {ja, en},
  locale: 'ja',
}
export default config
