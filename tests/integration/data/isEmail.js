"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isEmail";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test@test.com"),
  generateTest("test", null, "should be an email"),
  generateTest(null, null, "should be an email"),
];
