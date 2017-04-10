'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isBase64String');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isBase64String');

describe('IsBase64String', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});