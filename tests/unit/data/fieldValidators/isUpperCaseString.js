"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, "Test"),
  generateExecuteData(false, undefined),
  generateExecuteData(true, ""),
  generateExecuteData(true, "TEST STRING"),
  generateExecuteData(false, 0),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be an upper case string"),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
