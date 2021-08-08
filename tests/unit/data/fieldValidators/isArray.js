"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(true, []),
  generateExecuteData(false, "[]"),
  generateExecuteData(false, null),
  generateExecuteData(false, undefined),
  generateExecuteData(true, [0, 1]),
  generateExecuteData(false, "test"),
];

const errorMessageTestCases = [generateErrorMessageData("should be an array")];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
