"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isLowerCaseString";
const errorMessage = "should be a lower case string";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test"),
  generateTest("Test", null, errorMessage),
  generateTest(0, null, errorMessage),
  generateTest(undefined, null, errorMessage),
];
