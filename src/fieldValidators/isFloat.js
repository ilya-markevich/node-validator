'use strict';

const BaseFieldValidator = require('./base');

class IsFloat extends BaseFieldValidator {
  constructor() {
    super('isFloat', {
      min: 0,
      convert: true
    });

    this.floatRegexp = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/;
  }

  execute(value, opts) {
    const isFloatString = this.floatRegexp.test(value.toString());

    if (isFloatString && (typeof value === 'number' || opts.convert && typeof value === 'string')) {
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