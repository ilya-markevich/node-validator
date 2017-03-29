'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isFloat');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isFloat');

describe('IsFloat', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});