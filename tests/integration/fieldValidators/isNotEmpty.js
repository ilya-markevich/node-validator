'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isNotEmpty');

describe('IsNotEmpty Integration', () => {
  testsGenerator(testCases);
});