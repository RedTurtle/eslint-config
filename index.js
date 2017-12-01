module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['flowtype', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
