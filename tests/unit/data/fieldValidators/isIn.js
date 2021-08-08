"use strict";

/* eslint no-magic-numbers: "off" */

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(true, "test", ["test", "test2", "test3"]),
  generateExecuteData(true, true, [true, false]),
  generateExecuteData(true, 1, [1, 2, 3]),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be in [1, 2, 3]", [1, 2, 3]),
  generateErrorMessageData("should be in [null, undefined]", [null, undefined]),
  generateErrorMessageData("should be in [true, false]", [true, false]),
  generateErrorMessageData("should be in [test1, test2]", ["test1", "test2"]),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
