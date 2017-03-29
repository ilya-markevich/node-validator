'use strict';

const BaseFieldValidator = require('./base');

class IsArrayLength extends BaseFieldValidator {
  constructor() {
    super('isArrayLength', {
      min: 0
    });
  }

  execute(value, opts) {
    if (Array.isArray(value)) {
      const arrayLength = value.length;

      return this._getRangeExecution(opts, arrayLength, Number.isInteger.bind(Number));
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    return `should have length${this._getRangeErrorMessage(opts, Number.isInteger.bind(Number))}`;
  }
}

module.exports = new IsArrayLength();