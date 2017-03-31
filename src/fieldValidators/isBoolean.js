'use strict';

const BaseFieldValidator = require('./base');

class IsBoolean extends BaseFieldValidator {
  constructor() {
    super('isBoolean', {
      convert: true
    });
  }

  execute(value, opts) {
    if (opts.convert && typeof value === 'string') {
      return value === 'true';
    }

    return typeof value === 'boolean';
  }

  getErrorMessage() {
    return 'should be a boolean';
  }
}

module.exports = new IsBoolean();