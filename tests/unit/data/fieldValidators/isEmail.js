"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(true, "test@test.com"),
  generateExecuteData(false, "test.com"),
  generateExecuteData(true, "test@test"),
];

const errorMessageTestCases = [generateErrorMessageData("should be an email")];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
