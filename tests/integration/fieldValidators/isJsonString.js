'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isJsonString');

describe('IsJsonString Integration', () => {
  testsGenerator(testCases);
});