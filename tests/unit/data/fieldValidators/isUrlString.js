"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, "test"),
  generateExecuteData(false, undefined),
  generateExecuteData(false, "test.com"),
  generateExecuteData(false, "test"),
  generateExecuteData(true, "http://www.test.com"),
  generateExecuteData(true, "https://www.test.com"),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be an url string"),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
