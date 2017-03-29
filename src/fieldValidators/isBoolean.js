'use strict';

const BaseFieldValidator = require('./base');

class IsBoolean extends BaseFieldValidator {
  constructor() {
    super('isBoolean');
  }

  execute(value) {
    return typeof value === 'boolean';
  }

  getErrorMessage() {
    return 'should be boolean';
  }
}

module.exports = new IsBoolean();