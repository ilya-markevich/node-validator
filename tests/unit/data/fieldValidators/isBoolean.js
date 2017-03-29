'use strict';

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(true, true),
  generateExecuteData(false, 'true'),
  generateExecuteData(false, null),
  generateExecuteData(false, undefined),
  generateExecuteData(true, false),
  generateExecuteData(false, 0)
];

const errorMessageTestCases = [
  generateErrorMessageData('should be a boolean')
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};