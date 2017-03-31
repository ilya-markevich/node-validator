'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, 'test', {}),
  generateExecuteData(true, '1.25', {
    convert: true
  }),
  generateExecuteData(true, 8, {}),
  generateExecuteData(true, 8.0, {}),
  generateExecuteData(true, 10.5, {
    min: 1,
    max: 11
  }),
  generateExecuteData(false, 4.8, {
    min: 5,
    max: 10
  }),
  generateExecuteData(true, 5.7, {
    min: 4
  }),
  generateExecuteData(false, 2.5, {
    min: 5
  }),
  generateExecuteData(true, 10.7, {
    max: 12
  }),
  generateExecuteData(false, 5.3, {
    max: 2
  })
];

const errorMessageTestCases = [
  generateErrorMessageData('should be a float', {}),
  generateErrorMessageData('should be a float between 1.2 and 5.4', {
    min: 1.2,
    max: 5.4
  }),
  generateErrorMessageData('should be a float more than 4', {
    min: 4
  }),
  generateErrorMessageData('should be a float less than 10', {
    max: 10
  })
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};