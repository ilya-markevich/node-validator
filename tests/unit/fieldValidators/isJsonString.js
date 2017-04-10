'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isJsonString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isJsonString');

describe('IsJsonString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});