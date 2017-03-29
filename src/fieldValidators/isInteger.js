'use strict';

const BaseFieldValidator = require('./base');

class IsNumber extends BaseFieldValidator {
  constructor() {
    super('isInteger', {
      min: 0
    });
  }

  execute(value, opts) {
    if (Number.isInteger(value)) {
      return this._getRangeExecution(opts, value, Number.isInteger.bind(Number));
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    return `should be an integer${this._getRangeErrorMessage(opts, Number.isInteger.bind(Number))}`;
  }
}

module.exports = new IsNumber();