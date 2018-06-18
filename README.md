RedTurtle - eslint-config
=========================

[![Build Status](https://travis-ci.org/RedTurtle/eslint-config.svg?branch=master)](https://travis-ci.org/RedTurtle/eslint-config)

This package provides an eslint-config with mostly recommended rules. It already includes prettier configuration.

Installation and usage
----------------------

Install with yarn or npm:
```shell
# Yarn
$ yarn add --dev @redturtle/eslint-config

# Npm
$ npm install --save-dev @redturtle/eslint-config
```

If you don't have those already, install peer dependencies:
```shell
# Yarn
$ yarn add --dev babel-eslint eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier

# Npm
$ npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

Extend this config in your `.eslintrc` file:
```json
{
  "extends": "@redturtle/eslint-config"
}
```

