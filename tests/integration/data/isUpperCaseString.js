'use strict';

const validatorName = 'isUpperCaseString';
const errorMessage = 'should be an upper case string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('TEST'),
  generateTest('Test', null, errorMessage),
  generateTest(0, null, errorMessage),
  generateTest(undefined, null, errorMessage)
];