'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isNotEmpty');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isNotEmpty');

describe('IsNotEmpty', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});