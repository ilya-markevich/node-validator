"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isUpperCaseString";
const errorMessage = "should be an upper case string";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("TEST"),
  generateTest("Test", null, errorMessage),
  generateTest(0, null, errorMessage),
  generateTest(undefined, null, errorMessage),
];
