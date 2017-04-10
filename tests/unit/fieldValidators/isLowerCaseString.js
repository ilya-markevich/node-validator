'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isLowerCaseString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isLowerCaseString');

describe('IsLowerCaseString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});