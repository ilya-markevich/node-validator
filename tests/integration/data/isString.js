'use strict';

const validatorName = 'isString';
const errorMessage = 'should be a string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(true, null, errorMessage),
  generateTest('true'),
  generateTest('test'),
  generateTest(undefined, null, errorMessage)
];