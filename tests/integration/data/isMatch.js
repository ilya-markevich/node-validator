'use strict';

/* eslint no-magic-numbers: "off" */

const validatorName = 'isMatch';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('test', /te/),
  generateTest('test', /abc/, 'should match /abc/'),
  generateTest('test', /t/)
];