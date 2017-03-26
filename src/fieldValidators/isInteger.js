'use strict';

const BaseFieldValidator = require('./base');

class IsNumber extends BaseFieldValidator {
  constructor() {
    super('isInteger', {
      min: 0
    });
  }

  execute(value, opts) {
    const { min, max } = opts;

    if (typeof value === 'number') {
      if (Number.isInteger(min) && Number.isInteger(max)) {
        return value >= min && value <= max;
      } else if (Number.isInteger(min)) {
        return value >= min;
      } else if (Number.isInteger(max)) {
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
    let message = 'should be an integer';

    if (Number.isInteger(min) && Number.isInteger(max)) {
      message = `${message} between ${min} and ${max}`;
    } else if (Number.isInteger(min)) {
      message = `${message} more than ${min}`;
    } else if (Number.isInteger(max)) {
      message = `${message} less than ${max}`;
    }

    return message;
  }
}

module.exports = new IsNumber();