'use strict';

const BaseFieldValidator = require('./base');

class IsArrayLength extends BaseFieldValidator {
  constructor() {
    super('isArrayLength', {
      min: 0
    });
  }

  execute(value, opts) {
    const { min, max } = opts;

    if (Array.isArray(value)) {
      const arrayLength = value.length;

      if (Number.isInteger(min) && Number.isInteger(max)) {
        return arrayLength >= min && arrayLength <= max;
      } else if (Number.isInteger(min)) {
        return arrayLength >= min;
      } else if (Number.isInteger(max)) {
        return arrayLength <= max;
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

module.exports = new IsArrayLength();