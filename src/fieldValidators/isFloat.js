'use strict';

const BaseFieldValidator = require('./base');

class IsFloat extends BaseFieldValidator {
  constructor() {
    super('isFloat');

    this.floatRegexp = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/;
  }

  execute(value, opts) {
    const { min, max } = opts;

    if (typeof value === 'number' && this.floatRegexp.test(value.toString())) {
      if (Number.isFinite(min) && Number.isFinite(max)) {
        return value >= min && value <= max;
      } else if (Number.isFinite(min)) {
        return value >= min;
      } else if (Number.isFinite(max)) {
        return value <= max;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    const { min, max } = opts;
    let message = 'should be a float';

    if (Number.isFinite(min) && Number.isFinite(max)) {
      message = `${message} between ${min} and ${max}`;
    } else if (Number.isFinite(min)) {
      message = `${message} more than ${min}`;
    } else if (Number.isFinite(max)) {
      message = `${message} less than ${max}`;
    }

    return message;
  }
}

module.exports = new IsFloat();