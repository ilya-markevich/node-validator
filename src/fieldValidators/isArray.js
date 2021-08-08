"use strict";

const BaseFieldValidator = require("./base");

class IsArray extends BaseFieldValidator {
  constructor() {
    super("isArray");
  }

  execute(value) {
    return Array.isArray(value);
  }

  getErrorMessage() {
    return "should be an array";
  }
}

module.exports = new IsArray();
