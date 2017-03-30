'use strict';

const BaseFieldValidator = require('./base');

class IsFloat extends BaseFieldValidator {
  constructor() {
    super('isFloat', {
      min: 0
    });

    this.floatRegexp = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/;
  }

  execute(value, opts) {
    if (typeof value === 'number' && this.floatRegexp.test(value.toString())) {
      return this._getRangeExecution(opts, value, Number.isFinite.bind(Number));
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    return `should be a float${this._getRangeErrorMessage(opts, Number.isFinite.bind(Number))}`;
  }
}

module.exports = new IsFloat();