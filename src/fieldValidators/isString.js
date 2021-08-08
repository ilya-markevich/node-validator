"use strict";

const BaseFieldValidator = require("./base");

class IsString extends BaseFieldValidator {
  constructor() {
    super("isString");
  }

  execute(value) {
    return typeof value === "string";
  }

  getErrorMessage() {
    return "should be a string";
  }
}

module.exports = new IsString();
