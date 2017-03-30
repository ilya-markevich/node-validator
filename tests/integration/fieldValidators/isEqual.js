'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isEqual');

describe('IsEqual Integration', () => {
  testsGenerator(testCases);
});