/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

// https://eslint.vuejs.org/user-guide/#faq
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true,
  },
  globals: {
    Atomics: 'writable',
    // Atomics: 'readonly',
    SharedArrayBuffer: 'writable',
    // SharedArrayBuffer: 'readonly',
    Foundation: true,
    whatInput: true,
    $: true,
    _: true,
  },
  // parser: '@babel/eslint-parser',
  parser: 'vue-eslint-parser',
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // parser: '@babel/eslint-parser',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  // plugins: [
  //   '@vue/eslint-config-typescript',
  //   //  '@typescript-eslint',
  // ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript'
    // '@vue/typescript/recommended',
    // '@vue/prettier',
    // 'prettier',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:prettier/recommended',
    // 'prettier/vue',
    // 21-02-21から記述不要
    // 'prettier/@typescript-eslint',
  ],
  // required to lint *.vue files
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': ['.(scss | less | css)$'],
  },
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-webpack-loader-syntax': 0,
    'vue/one-component-per-file': 0,
    'vue/custom-event-name-casing': 0,
    'vue/no-arrow-functions-in-watch': 0,
    'vue/no-custom-modifiers-on-v-model': 0,
    'vue/no-dupe-v-else-if': 0,
    // 'vue/no-multiple-template-root': 0,
    'vue/no-mutating-props': 0,
    'vue/no-v-for-template-key': 0,
    'vue/no-v-model-argument': 0,
    'vue/experimental-script-setup-vars': 0,
    // // タグの最後で改行しないで
    'vue/html-closing-bracket-newline': 'off',
    // 'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/name-property-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/multi-word-component-names': [1, {
    //   'ignores': []
    // }],
    'vue/no-v-html': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/require-v-for-key': 'off',
    'operator-linebreak': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     // printWidth: 360,
    //     htmlWhitespaceSensitivity: 'ignore'
    //   },
    // ],
    '@typescript-eslint/no-unused-vars': 0,
    //  [
    //   0,
    //   {multiline: 'never', singleline: 'never'},
    // ],
    // 'vue/valid-v-on': 1,
    // 'vue/max-attributes-per-line': 0,
    // 'vue/html-self-closing': 0,
    // 'vue/this-in-template': ['warn', 'never'],
    // // 不要なカッコは消す
    // 'no-extra-parens': 1,
    // // 無駄なスペースは削除
    // 'no-multi-spaces': 0,
    // // 不要な空白行は削除。2行開けてたらエラー
    // 'no-multiple-empty-lines': ['warn', {max: 1}],
    // // 関数とカッコはあけない(function hoge() {/** */})
    // 'func-call-spacing': [2, 'never'],
    // // true/falseを無駄に使うな
    // 'no-unneeded-ternary': 2,
    // // セミコロンは禁止
    // 'semi': [2, 'never'],
    // // 文字列はシングルクオートのみ
    // 'quotes': [2, 'single', 'avoid-escape'],
    // // varは禁止
    // 'no-var': 2,
    // // jsのインデントは２
    // // indent: [2, 2],
    // // かっこの中はスペースなし！違和感
    // 'space-in-parens': [2, 'never'],
    // // コンソールは許可
    // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // // カンマの前後にスペース入れる？
    // 'comma-spacing': 2,
    // // 配列のindexには空白入れるな(hogehoge[ x ])
    // 'computed-property-spacing': 2,
    // // キーワードの前後には適切なスペースを
    // 'keyword-spacing': 0,
    // 'import/no-named-as-default': 0,
    // 'import/no-unresolved': [2, {commonjs: true, amd: true}],
    // 'import/named': 2,
    // 'import/namespace': 0,
    // 'import/default': 2,
    // 'import/export': 2,
    // 'import/no-unresolved': 1,
    // 'space-before-function-paren': 1,
    // 'comma-dangle': 1
  },
}
