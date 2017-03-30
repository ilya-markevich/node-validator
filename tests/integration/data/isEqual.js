'use strict';

const validatorName = 'isEqual';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test', 'test'),
  generateTest(null, undefined, 'should be equal undefined'),
  generateTest(0, 0)
];