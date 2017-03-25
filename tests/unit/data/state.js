'use strict';

const path = 'test';
const objectToValidate = {
  test: 'test string',
  name: 'test name'
};

const value = 'test string';
const emptyValue = undefined;
const customMessage = 'custom message';

const initialState = {
  path,
  value,
  isOptional: false,
  checks: [],
  customMessage: null
};
const stateAfterOptional = {
  path,
  value,
  isOptional: true,
  checks: [],
  customMessage: null
};
const stateAfterCustomMessage = {
  path,
  value,
  isOptional: false,
  checks: [],
  customMessage
};

const expectedInfoWithoutErrors = {
  path,
  value,
  isCorrect: true,
  errorMessage: null
};

const checkInfoWithError = {
  errorMessage: 'should pass tests'
};
const expectedInfoWithErrors = {
  path,
  value,
  isCorrect: false,
  errorMessage: `${path} ${checkInfoWithError.errorMessage}`
};

const expectedInfoWithErrorsAndCustomMessage = {
  path,
  value,
  isCorrect: false,
  errorMessage: customMessage
};

const newValidatorName = 'isTest';
const newValidatorOpts = {};
const newValidatorResult = {
  isCorrect: true,
  errorMessage: null
};

module.exports = {
  path,
  value,
  emptyValue,
  customMessage,
  objectToValidate,
  initialState,
  stateAfterOptional,
  stateAfterCustomMessage,
  expectedInfoWithoutErrors,
  checkInfoWithError,
  expectedInfoWithErrors,
  expectedInfoWithErrorsAndCustomMessage,
  newValidatorName,
  newValidatorOpts,
  newValidatorResult
};