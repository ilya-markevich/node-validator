'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isUrlString');

describe('IsUrlString Integration', () => {
  testsGenerator(testCases);
});