'use strict';

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, ''),
  generateExecuteData(false, ' 123'),
  generateExecuteData(true, '123'),
  generateExecuteData(true, '0'),
  generateExecuteData(false, 0)
];

const errorMessageTestCases = [
  generateErrorMessageData('should be a string that contains only numbers')
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};