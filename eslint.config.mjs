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
  }
];
