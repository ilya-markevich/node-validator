"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, null),
  generateExecuteData(false, undefined),
  generateExecuteData(true, ""),
  generateExecuteData(true, "true"),
  generateExecuteData(false, 0),
];

const errorMessageTestCases = [generateErrorMessageData("should be a string")];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
