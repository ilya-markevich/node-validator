"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isIn";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest(1, [1, 2]),
  generateTest(2, [1], "should be in [1]"),
  generateTest("test", ["test", "test2"]),
];
