'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isArray');

describe('IsArray Integration', () => {
  testsGenerator(testCases);
});