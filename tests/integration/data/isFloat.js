'use strict';

/* eslint no-magic-numbers: "off" */

const validatorName = 'isFloat';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(1),
  generateTest('test', null, 'should be a float more than 0'),
  generateTest(1.2, {
    min: 2,
    max: 3
  }, 'should be a float between 2 and 3')
];