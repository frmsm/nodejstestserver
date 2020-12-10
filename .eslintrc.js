module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    node: 1,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'never'],
    quotes: ['error', 'double', { avoidEscape: true }],
    // quotes: [2, 'single', { avoidEscape: true }],
    'semi-style': ['error', 'none'],
  },
};
