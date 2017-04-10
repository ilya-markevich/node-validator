'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isString');

describe('IsString Integration', () => {
  testsGenerator(testCases);
});