'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const validator = require('../../../src/fieldValidators/isBoolean');

const { executeTestCases, errorMessageTestCases } = require('../data/fieldValidators/isBoolean');

describe('IsBoolean', () => {
  testsGenerator.generateExecuteTests(validator, executeTestCases);

  testsGenerator.generateErrorMessageTests(validator, errorMessageTestCases);
});