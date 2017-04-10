'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isBase64String');

describe('IsBase64String Integration', () => {
  testsGenerator(testCases);
});