"use strict";

/* eslint no-magic-numbers: "off" */

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isArrayLength";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest([]),
  generateTest([1, 2], { min: 1, max: 3 }),
  generateTest([1], { min: 2 }, "should have length more than 2"),
];
