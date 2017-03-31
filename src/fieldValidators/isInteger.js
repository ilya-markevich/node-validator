'use strict';

const BaseFieldValidator = require('./base');

class IsNumber extends BaseFieldValidator {
  constructor() {
    super('isInteger', {
      min: 0,
      convert: true
    });
  }

  _isStringIsInteger(str) {
    const number = Math.floor(Number(str));
    return String(number) === str;
  }

  execute(value, opts) {
    const self = this;

    if (Number.isInteger(value) || typeof value === 'string' && opts.convert && self._isStringIsInteger(value)) {
      return self._getRangeExecution(opts, value, Number.isInteger.bind(Number));
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    return `should be an integer${this._getRangeErrorMessage(opts, Number.isInteger.bind(Number))}`;
  }
}

module.exports = new IsNumber();