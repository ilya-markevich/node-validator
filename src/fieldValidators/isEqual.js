'use strict';

const BaseFieldValidator = require('./base');

class IsEqual extends BaseFieldValidator {
  constructor() {
    super('isEqual');
  }

  execute(value, equalTo) {
    return value === equalTo;
  }

  getErrorMessage(value) {
    return `should be eql ${value}`;
  }
}

module.exports = new IsEqual();