'use strict';

const BaseFieldValidator = require('./base');

class IsDate extends BaseFieldValidator {
  constructor() {
    super('isDate', {});
  }

  execute(value, opts) {
    const { before, after } = opts;
    const isDate = (new Date(value)).toString() !== 'Invalid Date';

    if (value instanceof Date || (typeof value === 'string' && isDate)) {
      const dateValue = new Date(value);

      if (before && after) {
        return dateValue >= new Date(after) && dateValue <= new Date(before);
      } else if (after) {
        return dateValue >= new Date(after);
      } else if (before) {
        return dateValue <= new Date(before);
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getErrorMessage(opts) {
    const { before, after } = opts;
    let message = 'should be date';

    if (before && after) {
      message = `${message} between ${after} and ${before}`;
    } else if (after) {
      message = `${message} more than ${after}`;
    } else if (before) {
      message = `${message} less than ${before}`;
    }

    return message;
  }
}

module.exports = new IsDate();