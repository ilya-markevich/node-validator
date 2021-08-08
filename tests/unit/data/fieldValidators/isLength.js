"use strict";

/* eslint no-magic-numbers: "off" */

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, null, {}),
  generateExecuteData(true, "test", {}),
  generateExecuteData(true, "test", { min: 1, max: 11 }),
  generateExecuteData(false, "test", { min: 5, max: 10 }),
  generateExecuteData(true, "test", { min: 4 }),
  generateExecuteData(false, "test", { min: 5 }),
  generateExecuteData(true, "test", { max: 12 }),
  generateExecuteData(false, "test", { max: 2 }),
];

const errorMessageTestCases = [
  generateErrorMessageData("should have length", {}),
  generateErrorMessageData("should have length between 1 and 5", {
    min: 1,
    max: 5,
  }),
  generateErrorMessageData("should have length more than 4", { min: 4 }),
  generateErrorMessageData("should have length less than 10", { max: 10 }),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
