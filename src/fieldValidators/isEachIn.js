"use strict";

const BaseFieldValidator = require("./base");

class IsEachIn extends BaseFieldValidator {
  constructor() {
    super("isEachIn", []);
  }

  execute(values, inArray) {
    return (
      Array.isArray(values) && values.every((value) => inArray.includes(value))
    );
  }

  getErrorMessage(inArray) {
    return `each value should be in [${inArray.map(String).join(", ")}]`;
  }
}

module.exports = new IsEachIn();
