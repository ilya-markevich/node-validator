'use strict';

const validatorName = 'isJsonString';
const errorMessage = 'should be a valid json string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(true, null, errorMessage),
  generateTest('{ "test": 2 }'),
  generateTest('test', null, errorMessage),
  generateTest(0, null, errorMessage)
];