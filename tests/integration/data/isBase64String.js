"use strict";

const {
  generateIntegrationTestCase,
} = require("../../helpers/generateFieldValidatorData");

const validatorName = "isBase64String";
const errorMessage = "should be a base64 string";

const generateTest = generateIntegrationTestCase(validatorName);

module.exports = [
  generateTest("test"),
  generateTest("dGVzdHRlc3Q="),
  generateTest("qweasd", null, errorMessage),
  generateTest(undefined, null, errorMessage),
];
