'use strict';

/* eslint no-magic-numbers: "off" */

const validatorName = 'isInteger';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest(1),
  generateTest('1'),
  generateTest('test', null, 'should be an integer more than 0'),
  generateTest(2, {
    min: 1,
    max: 3
  })
];