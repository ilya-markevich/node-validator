'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isIpString');

describe('IsIpString Integration', () => {
  testsGenerator(testCases);
});