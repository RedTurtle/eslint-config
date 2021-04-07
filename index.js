module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['import', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
