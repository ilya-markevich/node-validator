'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, null, {
    min: 0
  }),
  generateExecuteData(true, [], {
    min: null,
    max: null
  }),
  generateExecuteData(true, [], {
    min: 0
  }),
  generateExecuteData(false, [], {
    min: 1
  }),
  generateExecuteData(true, [1, 2, 3], {
    min: 3,
    max: 5
  }),
  generateExecuteData(false, [1, 2, 3], {
    min: 4
  }),
  generateExecuteData(true, [1], {
    max: 2
  }),
  generateExecuteData(false, [1, 2, 3], {
    max: 2
  })
];

const errorMessageTestCases = [
  generateErrorMessageData('should have length', {}),
  generateErrorMessageData('should have length between 1 and 5', {
    min: 1,
    max: 5
  }),
  generateErrorMessageData('should have length more than 4', {
    min: 4
  }),
  generateErrorMessageData('should have length less than 10', {
    max: 10
  })
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};