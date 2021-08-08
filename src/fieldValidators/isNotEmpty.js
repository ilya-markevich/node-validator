"use strict";

const BaseFieldValidator = require("./base");

class NotEmpty extends BaseFieldValidator {
  constructor() {
    super("isNotEmpty");
  }

  execute(value) {
    if (typeof value === "string") {
      return value.length > 0;
    }

    return value !== undefined && value !== null;
  }

  getErrorMessage() {
    return "should be not empty";
  }
}

module.exports = new NotEmpty();
