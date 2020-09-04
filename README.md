# @dwp/eslint-config-base
[![Build Status](https://travis-ci.org/dwp/eslint-config-base.svg?branch=main)](https://travis-ci.org/dwp/eslint-config-base) [![Known Vulnerabilities](https://snyk.io/test/github/dwp/eslint-config-base/badge.svg)](https://snyk.io/test/github/dwp/eslint-config-base)

Shareable [`eslint`](http://eslint.org) config enforcing our lint and style convention.

## Getting started

```sh
npm install --save-dev @dwp/eslint-config-base eslint
```

## Rules

Add an `.eslintrc.js` file that looks something like:

```js
module.exports = require('@dwp/eslint-config-base');
```

You can add your own rules to enhance this, but in doing so please ensure you don't weaken the baseline ruleset.

Don't use `.eslintrc` (low precedence) or `package.json` (even lower, and just plain bad!), lest you incur the wrath of a patient adversary.

## Linting

Add `eslint` to your test suite like this, or see our [package.json](package.json) for an example of how we do it:

```json
"test": "eslint ."
```

## Recommendations

### Unary operators

It is recommended that developers use the `++`/`--` operators as pre (`++variable`) rather than post (`variable++`), unless explicitly required in the statement.

### Dangling commas

This config enforces dangling commas in multiline function arguments, which is supported from node version 8 onwards. If you're using an older version of node, you'll need to ignore this rule for functions according to the documentation here: https://eslint.org/docs/rules/comma-dangle.
