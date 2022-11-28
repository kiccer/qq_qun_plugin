/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: ['error', 4]
    }
}
