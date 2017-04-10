'use strict';

const BaseFieldValidator = require('./base');

class IsNumericString extends BaseFieldValidator {
  constructor() {
    super('isNumericString');

    this.regexp = /^[0-9]+$/;
  }

  execute(value) {
    return typeof value === 'string' && value.length > 0 && this.regexp.test(value);
  }

  getErrorMessage() {
    return 'should be a string that contains only numbers';
  }
}

module.exports = new IsNumericString();