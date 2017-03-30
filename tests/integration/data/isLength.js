'use strict';

/* eslint no-magic-numbers: "off" */

const validatorName = 'isLength';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test', {
    min: 1,
    max: 5
  }),
  generateTest('test', {
    min: 5,
    max: 10
  }, 'should have length between 5 and 10'),
  generateTest('test', {
    min: 1,
    max: 5
  })
];