'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isLength');

describe('IsLength Integration', () => {
  testsGenerator(testCases);
});