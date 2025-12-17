import config from 'eslint-config-node-validator/server.mjs';

export default [
  ...config,
  {
    files: ['tests/**/*.js'],
    rules: {
      'no-magic-numbers': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'off'
    }
  },
  {
    files: ['src/**/*.js'],
    rules: {
      'no-extra-parens': 'off',
      'space-before-function-paren': 'off'
    }
  }
];
