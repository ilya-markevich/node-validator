'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isUpperCaseString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isUpperCaseString');

describe('IsUpperCaseString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});