'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isEmail');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isEmail');

describe('IsEmail', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});