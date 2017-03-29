'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(false, 'test', {}),
  generateExecuteData(true, '01.01.2000', {}),
  generateExecuteData(true, '01.04.2000', {
    after: '01.01.2000',
    before: '01.05.2000'
  }),
  generateExecuteData(false, '01.04.2000', {
    after: '01.05.2000',
    before: '01.08.2000'
  }),
  generateExecuteData(true, '01.04.2000', {
    after: '01.02.2000'
  }),
  generateExecuteData(false, '01.04.2000', {
    after: '01.05.2000'
  }),
  generateExecuteData(true, '01.04.2000', {
    before: '01.05.2000'
  }),
  generateExecuteData(false, '01.04.2000', {
    before: '01.02.2000'
  })
];

const errorMessageTestCases = [
  generateErrorMessageData('should be date', {}),
  generateErrorMessageData('should be date between 01.01.2000 and 01.05.2000', {
    after: '01.01.2000',
    before: '01.05.2000'
  }),
  generateErrorMessageData('should be date more than 01.01.2000', {
    after: '01.01.2000'
  }),
  generateErrorMessageData('should be date less than 01.05.2000', {
    before: '01.05.2000'
  })
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};