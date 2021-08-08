"use strict";

const BaseFieldValidator = require("./base");

class IsUpperCaseString extends BaseFieldValidator {
  constructor() {
    super("isUpperCaseString");
  }

  execute(value) {
    return typeof value === "string" && value === value.toUpperCase();
  }

  getErrorMessage() {
    return "should be an upper case string";
  }
}

module.exports = new IsUpperCaseString();
