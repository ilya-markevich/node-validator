'use strict';

const BaseFieldValidator = require('./base');
const isUrl = require('is-url');

class IsUrlString extends BaseFieldValidator {
  constructor() {
    super('isUrlString');
  }

  execute(value) {
    return typeof value === 'string' && isUrl(value);
  }

  getErrorMessage() {
    return 'should be an url string';
  }
}

module.exports = new IsUrlString();