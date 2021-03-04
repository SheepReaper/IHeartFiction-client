module.exports = {
  root: true,
  env: {
    browser: true,
    'cypress/globals': true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['cypress', 'prettier'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {},
}
