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
    'jsdoc/require-jsdoc': ['error', {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
      contexts: ['ClassProperty'],
    }],
  },
};
