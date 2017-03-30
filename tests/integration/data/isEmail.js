'use strict';

const validatorName = 'isEmail';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test@test.com'),
  generateTest('test', null, 'should be an email'),
  generateTest(null, null, 'should be an email')
];