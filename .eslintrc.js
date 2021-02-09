module.exports = {
  root: true,
  env: {
    browser: true,
    'cypress/globals': true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['cypress', 'prettier'],
  // add your custom rules here
  rules: {},
}
