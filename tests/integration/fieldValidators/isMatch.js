'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isMatch');

describe('IsMatch Integration', () => {
  testsGenerator(testCases);
});