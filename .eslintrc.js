module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:vue/base',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {},
}
