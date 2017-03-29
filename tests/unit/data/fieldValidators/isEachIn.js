'use strict';

/* eslint no-magic-numbers: "off" */

const { generateExecuteData, generateErrorMessageData } = require('../../../helpers/generateFieldValidatorData');

const executeTestCases = [
  generateExecuteData(true, ['test', 'test2'], ['test', 'test2', 'test3']),
  generateExecuteData(true, [true, false], [true, false]),
  generateExecuteData(false, [1, 2, 3, 4], [1, 2, 3]),
  generateExecuteData(true, [null, undefined], [null, undefined, 0]),
  generateExecuteData(false, [0, undefined], [undefined, 1])
];

const errorMessageTestCases = [
  generateErrorMessageData('each value should be in [1, 2, 3]', [1, 2, 3]),
  generateErrorMessageData('each value should be in [null, undefined]', [null, undefined]),
  generateErrorMessageData('each value should be in [true, false]', [true, false]),
  generateErrorMessageData('each value should be in [test1, test2]', ['test1', 'test2'])
];

module.exports = {
  executeTestCases,
  errorMessageTestCases
};