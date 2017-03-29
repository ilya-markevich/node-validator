'use strict';

const BaseFieldValidator = require('./base');

class IsLength extends BaseFieldValidator {
  constructor() {
    super('isLength', {
      min: 0
    });
  }

  execute(value, opts) {
    const { min, max } = opts;

    if (typeof value === 'string') {
      const stringLength = value.length;

      if (Number.isInteger(min) && Number.isInteger(max)) {
        return stringLength >= min && stringLength <= max;
      } else if (Number.isInteger(min)) {
        return stringLength >= min;
      } else if (Number.isInteger(max)) {
        return stringLength <= max;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    const { min, max } = opts;
    let message = 'should have length';

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

module.exports = new IsLength();