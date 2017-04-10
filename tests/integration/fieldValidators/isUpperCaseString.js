'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isUpperCaseString');

describe('IsUpperCaseString Integration', () => {
  testsGenerator(testCases);
});