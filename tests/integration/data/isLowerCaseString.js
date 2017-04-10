'use strict';

const validatorName = 'isLowerCaseString';
const errorMessage = 'should be a lower case string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test'),
  generateTest('Test', null, errorMessage),
  generateTest(0, null, errorMessage),
  generateTest(undefined, null, errorMessage)
];