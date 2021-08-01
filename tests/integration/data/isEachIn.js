"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isEachIn";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test", null, "each value should be in []"),
  generateTest([1, 2, 3], [3, 4, 5], "each value should be in [3, 4, 5]"),
  generateTest([1, 2], [1, 2, 3]),
];
