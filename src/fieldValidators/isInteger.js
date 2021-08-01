"use strict";

const BaseFieldValidator = require("./base");

const isValidRangeValue = (value) => Number.isInteger(value);

class IsNumber extends BaseFieldValidator {
  constructor() {
    super("isInteger", { min: 0, convert: true });
  }

  _isStringIsInteger(str) {
    const number = Math.floor(Number(str));

    return String(number) === str;
  }

  execute(value, opts) {
    if (
      Number.isInteger(value) ||
      (typeof value === "string" &&
        opts.convert &&
        this._isStringIsInteger(value))
    ) {
      return this._getRangeExecution(opts, value, isValidRangeValue);
    }

    return false;
  }

  getErrorMessage(opts) {
    const rangeMessage = this._getRangeErrorMessage(opts, isValidRangeValue);

    return `should be an integer${rangeMessage}`;
  }
}

module.exports = new IsNumber();
