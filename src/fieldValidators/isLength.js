"use strict";

const BaseFieldValidator = require("./base");

const isValidRangeValue = (value) => Number.isInteger(value);

class IsLength extends BaseFieldValidator {
  constructor() {
    super("isLength", { min: 0 });
  }

  execute(value, opts) {
    if (typeof value === "string") {
      const stringLength = value.length;

      return this._getRangeExecution(opts, stringLength, isValidRangeValue);
    }

    return false;
  }

  getErrorMessage(opts) {
    const rangeMessage = this._getRangeErrorMessage(opts, isValidRangeValue);

    return `should have length${rangeMessage}`;
  }
}

module.exports = new IsLength();
