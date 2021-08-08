"use strict";

const BaseFieldValidator = require("./base");

class IsDate extends BaseFieldValidator {
  constructor() {
    super("isDate", {});
  }

  execute(value, opts) {
    const { before, after } = opts;
    const isDate = new Date(value).toString() !== "Invalid Date";

    if (value instanceof Date || (typeof value === "string" && isDate)) {
      const dateValue = new Date(value);

      return this._getRangeExecution(
        {
          min: after && new Date(after),
          max: before && new Date(before),
        },
        dateValue
      );
    }

    return false;
  }

  getErrorMessage(opts) {
    const { before, after } = opts;
    const rangeMessage = this._getRangeErrorMessage({
      min: after,
      max: before,
    });

    return `should be a date${rangeMessage}`;
  }
}

module.exports = new IsDate();
