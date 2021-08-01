"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isArray";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest([]),
  generateTest("test", null, "should be an array"),
  generateTest(["test"]),
];
