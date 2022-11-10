'use strict'

// import $ from 'jquery'
import 'foundation-sites'

// A helper for detecting the current screen size.
// https://get.foundation/sites/docs/media-queries.html
function currentScreen () {
  window.addEventListener('resize', () => {
    console.log('current screen size =',
      Foundation.MediaQuery.current
    )
  })
}

// You can create your own helper for for detecting the current screen size.
// https://get.foundation/sites/docs/media-queries.html#sass-reference
// Sass breakpoints:
// small: 0
// medium: 640px
// large: 1024px
// xlarge: 1200px
// xxlarge: 1440px
function currentBreakpoint () {
  const dev = import.meta.env.DEV
  if (!dev) {
    return
  }
  const xxlarge = '1440'
  const xlarge = '1200'
  const large = '1024'
  const medium = '640'
  const small = '0'
  window.addEventListener('resize', () => {
    const width = window.innerWidth
    let current
    if (width === xxlarge || width > xxlarge) {
      current = 'xxlarge'
    } else if (width === xlarge || width > xlarge) {
      current = 'xlarge'
    } else if (width === large || width > large) {
      current = 'large'
    } else if (width === medium || width > medium) {
      current = 'medium'
    } else if (width === small || width > small) {
      current = 'small'
    }
    console.log('current screen size =', current)
  })
}

function throwError (message = '', statusCode = '') {
  const error = new Error(message)
  error.statusCode = statusCode
  throw error
}

// Check if object/ array is empty. Will return true if empty.
// Object.entries({}).length === 0
// https://stackoverflow.com/a/66032827/413225
// https://stackoverflow.com/a/53968232/413225
function isEmpty (data) {
  // Check array.
  if (Array.isArray(data)) {
    return !data.length
  }

  // Check object.
  if (
    typeof data === 'object' &&
    !Array.isArray(data) &&
    data !== null
  ) {
    return !Object.entries(data).length
  }

  throwError(`"${data}" is not an object or array`, 500)
}

// Use `isNaN` to make sure the string is numberic.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function isNum (val){
  return !isNaN(val)
}

function delay (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export {
  currentScreen,
  throwError,
  isEmpty,
  isNum,
  delay
}
