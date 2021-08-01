"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isUrlString";
const errorMessage = "should be an url string";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(true, null, errorMessage),
  generateTest("test.com", null, errorMessage),
  generateTest("http://test.com"),
  generateTest(undefined, null, errorMessage),
];
