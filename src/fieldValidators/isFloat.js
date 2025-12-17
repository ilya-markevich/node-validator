import BaseFieldValidator from './base';

const isValidRangeValue = (value) => Number.isFinite(value);

class IsFloat extends BaseFieldValidator {
  constructor() {
    super('isFloat', { min: 0, convert: true });

    this.floatRegexp = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/u;
  }

  execute(value, opts) {
    const isFloatString = this.floatRegexp.test(value.toString());
    const shouldTryToConvert = opts.convert && typeof value === 'string';

    if (isFloatString && (typeof value === 'number' || shouldTryToConvert)) {
      return this._getRangeExecution(opts, value, isValidRangeValue);
    }

    return false;
  }

  getErrorMessage(opts) {
    const rangeMessage = this._getRangeErrorMessage(opts, isValidRangeValue);

    return `should be a float${rangeMessage}`;
  }
}

export default new IsFloat();
