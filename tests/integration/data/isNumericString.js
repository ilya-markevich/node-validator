"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isNumericString";
const errorMessage = "should be a string that contains only numbers";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(undefined, null, errorMessage),
  generateTest("true", null, errorMessage),
  generateTest("0123"),
  generateTest("", null, errorMessage),
];
