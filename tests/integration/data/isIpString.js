'use strict';

const validatorName = 'isIpString';
const generateTest = require('../../helpers/generateFieldValidatorData').generateIntegrationTestCase.bind(null, validatorName);

module.exports = [
  generateTest('192.168.1.1', {
    v6: true
  }, 'should be an ipv6 string'),
  generateTest('192.168.1.1'),
  generateTest('test', {}, 'should be an ip string'),
  generateTest(0, {
    v4: true
  }, 'should be an ipv4 string')
];