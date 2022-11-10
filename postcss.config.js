// https://github.com/postcss/postcss-load-config

module.exports = {
  parser: 'postcss-scss',
  map: true,
  plugins: {
    'postcss-windicss': {
      config:'./windi.config.ts',
      touchMode: 'insert-comment'
    },
    // 'autoprefixer': { grid: 'autoplace' },
  }
}
// module.exports = (ctx) => ({
//   // map: ctx.options.map,
//   plugins: [
//     require('postcss-import'),
//     require('windicss'),
//     require('postcss-nested'),
//     require('autoprefixer')({
//       "browsers": [
//         "last 2 versions",
//         "not ie 11",
//       ]
//     }),
//   ],
// })
