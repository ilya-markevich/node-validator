import BaseFieldValidator from './base';

const isValidRangeValue = (value) => Number.isInteger(value);

class IsNumber extends BaseFieldValidator {
  constructor() {
    super('isInteger', { min: 0, convert: true });
  }

  _isStringInteger(str) {
    const number = Math.floor(Number(str));

    return String(number) === str;
  }

  execute(value, opts) {
    const isNumber = typeof value === 'string' && opts.convert && this._isStringInteger(value);

    if (Number.isInteger(value) || isNumber) {
      return this._getRangeExecution(opts, value, isValidRangeValue);
    }

    return false;
  }

  getErrorMessage(opts) {
    const rangeMessage = this._getRangeErrorMessage(opts, isValidRangeValue);

    return `should be an integer${rangeMessage}`;
  }
}

export default new IsNumber();
