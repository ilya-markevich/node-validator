"use strict";

const BaseFieldValidator = require("./base");

class IsJsonString extends BaseFieldValidator {
  constructor() {
    super("isJsonString");
  }

  execute(value) {
    const isString = typeof value === "string";

    try {
      JSON.parse(value);
    } catch (err) {
      return false;
    }

    return isString;
  }

  getErrorMessage() {
    return "should be a valid json string";
  }
}

module.exports = new IsJsonString();
