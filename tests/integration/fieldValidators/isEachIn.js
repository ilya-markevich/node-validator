'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isEachIn');

describe('IsEachIn Integration', () => {
  testsGenerator(testCases);
});