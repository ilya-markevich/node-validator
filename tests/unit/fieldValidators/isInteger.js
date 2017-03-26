'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isInteger');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isInteger');

describe('IsInteger', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});