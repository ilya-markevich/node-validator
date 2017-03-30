'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isIn');

describe('IsIn Integration', () => {
  testsGenerator(testCases);
});