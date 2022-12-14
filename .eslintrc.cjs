/* eslint-env node */
module.exports = {
    root: true,

    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-standard'
    ],

    parserOptions: {
        ecmaVersion: 'latest'
    },

    globals: {
        chrome: 'readonly'
    },

    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off'
    }
}
