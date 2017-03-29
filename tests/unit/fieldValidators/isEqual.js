'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isEqual');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isEqual');

describe('IsEqual', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});