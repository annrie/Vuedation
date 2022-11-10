module.exports = {
  '*.{ts,vue}': ['eslint --fix --cache', 'prettier --write'],
  '*.{vue,css,less,sass,scss,styl,stylus,js}': [
    'stylelint --fix --cache',
    'prettier --write ',
  ],
  // '*.(htm|html)': ['htmlhint', 'prettier --write', 'git add'],
}
