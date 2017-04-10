'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isNumericString');

describe('IsNumericString Integration', () => {
  testsGenerator(testCases);
});