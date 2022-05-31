/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true //解决vue单文件 的全局变量未定义 比如defineProps
  },
  globals: {
    getApp: true,
    __wxConfig: true,
    uni: true,
    TDict: true,
    TAnyObject: true,
    TAnyArray: true,
    TAny: true,
    TAnyFunc: true,
    TRemovableRef: true
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never'
        },
        svg: 'never',
        math: 'never'
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/multi-word-component-names': 0
  }
}
