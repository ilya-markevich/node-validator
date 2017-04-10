'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isString');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isString');

describe('IsString', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});