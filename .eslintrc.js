module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jsdoc'],
  root: true,
  extends: ['eslint:recommended', 'plugin:jsdoc/recommended', 'airbnb-base'],
  env: {
    es6: true,
  },
  rules: {
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-plusplus': 'off',
    semi: ['error', 'always', { omitLastInOneLineBlock: false }],
    'jsdoc/require-jsdoc': ['off'],
    'jsdoc/check-tag-names': ['error'],
    'jsdoc/require-description': ['error'],
    'jsdoc/require-description-complete-sentence': ['error'],
    'jsdoc/require-param': ['error'],
    'jsdoc/require-param-description': ['error'],
    'jsdoc/require-param-name': ['error'],
    'jsdoc/require-param-type': ['error'],
    'jsdoc/require-returns': ['error', { forceReturnsWithAsync: true }],
    'jsdoc/require-returns-check': ['error'],
    'jsdoc/require-returns-description': ['error'],
    'jsdoc/require-returns-type': ['error'],
    'jsdoc/require-throws': ['error'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
};
