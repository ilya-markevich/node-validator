"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isFloat";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(1.2),
  generateTest("1.2"),
  generateTest("test", null, "should be a float more than 0"),
  generateTest(1.2, { min: 2, max: 3 }, "should be a float between 2 and 3"),
];
