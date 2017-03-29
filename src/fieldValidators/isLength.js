'use strict';

const BaseFieldValidator = require('./base');

class IsLength extends BaseFieldValidator {
  constructor() {
    super('isLength', {
      min: 0
    });
  }

  execute(value, opts) {
    if (typeof value === 'string') {
      const stringLength = value.length;

      return this._getRangeExecution(opts, stringLength, Number.isInteger.bind(Number));
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    return `should have length${this._getRangeErrorMessage(opts, Number.isInteger.bind(Number))}`;
  }
}

module.exports = new IsLength();