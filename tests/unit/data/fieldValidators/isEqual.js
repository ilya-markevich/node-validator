'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(true, 'test', 'test'),
  generateExecuteData(false, '', ' '),
  generateExecuteData(false, null, undefined),
  generateExecuteData(true, 1, 1),
  generateExecuteData(false, 0, 1)
];

const errorMessageTestCases = [
  generateErrorMessageData('should be eql 2', 2),
  generateErrorMessageData('should be eql null', null),
  generateErrorMessageData('should be eql undefined', undefined),
  generateErrorMessageData('should be eql 0', 0)
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};