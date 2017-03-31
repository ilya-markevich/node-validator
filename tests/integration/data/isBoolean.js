'use strict';

const validatorName = 'isBoolean';
const errorMessage = 'should be a boolean';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(true),
  generateTest('true'),
  generateTest('test', null, errorMessage),
  generateTest(null, null, errorMessage)
];