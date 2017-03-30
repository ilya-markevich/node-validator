'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isArrayLength');

describe('IsArrayLength Integration', () => {
  testsGenerator(testCases);
});