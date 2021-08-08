"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isInteger";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(1),
  generateTest("1"),
  generateTest("test", null, "should be an integer more than 0"),
  generateTest(2, { min: 1, max: 3 }),
];
