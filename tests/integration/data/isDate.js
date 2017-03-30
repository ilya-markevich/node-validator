'use strict';

const validatorName = 'isDate';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('01.01.2000'),
  generateTest('test', null, 'should be a date'),
  generateTest('01.01.2000', {
    before: '01.05.2000',
    after: '01.02.2000'
  }, 'should be a date between 01.02.2000 and 01.05.2000'),
  generateTest('01.02.2000', {
    before: '01.05.2000',
    after: '01.01.2000'
  })
];