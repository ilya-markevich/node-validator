'use strict';

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, 'test', {}),
  generateExecuteData(false, undefined, {}),
  generateExecuteData(true, '192.168.1.1', {
    v4: true
  }),
  generateExecuteData(true, 'FF80:0000:0000:0000:0123:1234:ABCD:EF12', {
    v6: true
  }),
  generateExecuteData(true, '192.168.1.2', {})
];

const errorMessageTestCases = [
  generateErrorMessageData('should be an ip string', {}),
  generateErrorMessageData('should be an ip string', {
    v4: true,
    v6: true
  }),
  generateErrorMessageData('should be an ipv4 string', {
    v4: true
  }),
  generateErrorMessageData('should be an ipv6 string', {
    v6: true
  })
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};