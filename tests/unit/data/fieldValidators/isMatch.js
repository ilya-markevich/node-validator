'use strict';

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(true, 'test', new RegExp()),
  generateExecuteData(true, 'test', /te/),
  generateExecuteData(false, 'test', /abc/),
  generateExecuteData(true, 'test', /s/)
];

const errorMessageTestCases = [
  generateErrorMessageData('should match /test/g', /test/g),
  generateErrorMessageData('should match /abc/', /abc/),
  generateErrorMessageData('should match /123/', /123/),
  generateErrorMessageData('should match /t01b/', /t01b/)
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};