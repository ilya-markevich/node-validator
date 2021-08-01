"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(true, "test"),
  generateExecuteData(false, ""),
  generateExecuteData(false, null),
  generateExecuteData(false, undefined),
  generateExecuteData(true, {}),
  generateExecuteData(true, "0"),
];

const errorMessageTestCases = [generateErrorMessageData("should be not empty")];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
