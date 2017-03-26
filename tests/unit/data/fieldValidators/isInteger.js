'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, 'test', {}),
  generateExecuteData(true, 8, {}),
  generateExecuteData(true, 10, {
    min: 1,
    max: 11
  }),
  generateExecuteData(false, 4, {
    min: 5,
    max: 10
  }),
  generateExecuteData(true, 5, {
    min: 4
  }),
  generateExecuteData(false, 2, {
    min: 5
  }),
  generateExecuteData(true, 10, {
    max: 12
  }),
  generateExecuteData(false, 5, {
    max: 2
  })
];

const errorMessageTestCases = [
  generateErrorMessageData('should be an integer', {}),
  generateErrorMessageData('should be an integer between 1 and 5', {
    min: 1,
    max: 5
  }),
  generateErrorMessageData('should be an integer more than 4', {
    min: 4
  }),
  generateErrorMessageData('should be an integer less than 10', {
    max: 10
  })
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};