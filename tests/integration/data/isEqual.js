"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isEqual";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test", "test"),
  generateTest(null, undefined, "should be equal undefined"),
  generateTest(0, 0),
];
