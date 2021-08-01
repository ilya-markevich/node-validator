"use strict";

const BaseFieldValidator = require("./base");

const isValidRangeValue = (value) => Number.isInteger(value);

class IsArrayLength extends BaseFieldValidator {
  constructor() {
    super("isArrayLength", { min: 0 });
  }

  execute(value, opts) {
    if (Array.isArray(value)) {
      const arrayLength = value.length;

      return this._getRangeExecution(opts, arrayLength, isValidRangeValue);
    }

    return false;
  }

  getErrorMessage(opts) {
    const rangeMessage = this._getRangeErrorMessage(opts, isValidRangeValue);

    return `should have length${rangeMessage}`;
  }
}

module.exports = new IsArrayLength();
