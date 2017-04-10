'use strict';

const BaseFieldValidator = require('./base');

class IsLowerCaseString extends BaseFieldValidator {
  constructor() {
    super('isLowerCaseString');
  }

  execute(value) {
    return typeof value === 'string' && value === value.toLowerCase();
  }

  getErrorMessage() {
    return 'should be a lower case string';
  }
}

module.exports = new IsLowerCaseString();