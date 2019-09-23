module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  root: true,
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    es6: true,
  },
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    indent: ['error', 2],
    'no-plusplus': 'off',
    semi: ['error', 'always', { omitLastInOneLineBlock: false }],
    'valid-jsdoc': 'error',
  },
};
