'use strict';

const validatorName = 'isUrlString';
const errorMessage = 'should be an url string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(true, null, errorMessage),
  generateTest('test.com', null, errorMessage),
  generateTest('http://test.com'),
  generateTest(undefined, null, errorMessage)
];