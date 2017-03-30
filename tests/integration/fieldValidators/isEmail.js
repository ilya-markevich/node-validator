'use strict';

require('should');

const testsGenerator = require('./testsGenerator');
const testCases = require('../data/isEmail');

describe('IsEmail Integration', () => {
  testsGenerator(testCases);
});