module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single']
  }
};
