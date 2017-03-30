'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isBoolean');

describe('IsBoolean Integration', () => {
  testsGenerator(testCases);
});