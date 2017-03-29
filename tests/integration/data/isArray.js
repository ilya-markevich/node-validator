'use strict';

const validatorName = 'isArray';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest([]),
  generateTest('test', null, 'should be an array'),
  generateTest(['test'])
];