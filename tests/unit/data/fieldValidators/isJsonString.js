"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, ""),
  generateExecuteData(false, undefined),
  generateExecuteData(true, '{ "test": 2 }'),
  generateExecuteData(false, "{"),
  generateExecuteData(false, 0),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be a valid json string"),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
