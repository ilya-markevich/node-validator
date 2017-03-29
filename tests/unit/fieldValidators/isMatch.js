'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isMatch');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isMatch');

describe('IsMatch', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});