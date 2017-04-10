'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isLowerCaseString');

describe('IsLowerCaseString Integration', () => {
  testsGenerator(testCases);
});