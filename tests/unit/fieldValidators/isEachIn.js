'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isEachIn');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isEachIn');

describe('IsEachIn', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});