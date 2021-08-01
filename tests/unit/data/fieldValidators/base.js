"use strict";

const name = "isTest";
const defaultOpts = {
  data: "test",
};

const value = "test opts";
const opts = {};
const appliedDefaultOpts = { ...opts, ...defaultOpts };
const errorMessage = "test error message";

const expectedIncorrectCheckResult = {
  isCorrect: false,
  errorMessage,
};
const expectedCorrectCheckResult = {
  isCorrect: true,
};

module.exports = {
  name,
  defaultOpts,
  value,
  opts,
  appliedDefaultOpts,
  errorMessage,
  expectedIncorrectCheckResult,
  expectedCorrectCheckResult,
};
