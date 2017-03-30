'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isFloat');

describe('IsFloat Integration', () => {
  testsGenerator(testCases);
});