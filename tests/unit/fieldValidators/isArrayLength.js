'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isArrayLength');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isArrayLength');

describe('IsArrayLength', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});