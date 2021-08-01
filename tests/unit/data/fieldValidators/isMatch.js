"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(true, "test", /.*/u),
  generateExecuteData(true, "test", /te/u),
  generateExecuteData(false, "test", /abc/u),
  generateExecuteData(true, "test", /s/u),
];

const errorMessageTestCases = [
  generateErrorMessageData("should match /test/gu", /test/gu),
  generateErrorMessageData("should match /abc/u", /abc/u),
  generateErrorMessageData("should match /123/u", /123/u),
  generateErrorMessageData("should match /t01b/u", /t01b/u),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
