'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isNumericString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isNumericString');

describe('IsNumericString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});