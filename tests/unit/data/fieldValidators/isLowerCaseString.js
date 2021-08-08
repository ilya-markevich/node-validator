"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, "Test"),
  generateExecuteData(false, undefined),
  generateExecuteData(true, ""),
  generateExecuteData(true, "test string"),
  generateExecuteData(false, 0),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be a lower case string"),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
