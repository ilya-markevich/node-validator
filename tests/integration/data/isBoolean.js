"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isBoolean";
const errorMessage = "should be a boolean";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(true),
  generateTest("true"),
  generateTest("test", null, errorMessage),
  generateTest(null, null, errorMessage),
];
