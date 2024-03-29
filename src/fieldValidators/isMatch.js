"use strict";

const BaseFieldValidator = require("./base");

class IsMatch extends BaseFieldValidator {
  constructor() {
    super("isMatch", /.*/u);
  }

  execute(value, regexp) {
    return typeof value === "string" && regexp.test(value);
  }

  getErrorMessage(regexp) {
    return `should match ${regexp}`;
  }
}

module.exports = new IsMatch();
