"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

/* eslint no-magic-numbers: "off" */

const validatorName = "isMatch";
const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test", /te/u),
  generateTest("test", /abc/u, "should match /abc/u"),
  generateTest("test", /t/u),
];
