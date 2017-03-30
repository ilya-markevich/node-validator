'use strict';

/* eslint no-magic-numbers: "off" */

const validatorName = 'isNotEmpty';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test'),
  generateTest('', null, 'should be not empty'),
  generateTest('0')
];