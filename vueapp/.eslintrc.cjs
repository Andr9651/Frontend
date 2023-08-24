/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": false,
    }],
    "vue/v-on-event-hyphenation": ["error", "always", {
      "autofix": true
    }]
  }
}
