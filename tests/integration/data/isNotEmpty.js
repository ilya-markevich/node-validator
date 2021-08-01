"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isNotEmpty";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test"),
  generateTest("", null, "should be not empty"),
  generateTest("0"),
];
