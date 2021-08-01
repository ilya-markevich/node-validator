"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isString";
const errorMessage = "should be a string";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(true, null, errorMessage),
  generateTest("true"),
  generateTest("test"),
  generateTest(undefined, null, errorMessage),
];
