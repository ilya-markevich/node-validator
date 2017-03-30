'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isInteger');

describe('IsInteger Integration', () => {
  testsGenerator(testCases);
});