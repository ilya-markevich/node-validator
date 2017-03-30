'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isDate');

describe('IsDate Integration', () => {
  testsGenerator(testCases);
});