'use strict';

const validatorName = 'isIpString';
const errorMessage = 'should be an ip string';

const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('192.168.1.1', {
    v6: true
  }, errorMessage),
  generateTest('192.168.1.1'),
  generateTest('test', {}, errorMessage),
  generateTest(0, null, errorMessage)
];