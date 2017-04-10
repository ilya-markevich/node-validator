'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isUrlString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isUrlString');

describe('IsUrlString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});