module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'love',
    'next/core-web-vitals',
    'prettier',
  ],
  overrides: [],
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
