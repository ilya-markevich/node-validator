'use strict';

const path = 'test';
const objectToValidate = {
  test: 'test string',
  name: 'test name'
};

const obj = {
  test: 'test string'
};
const objWithEmptyValue = {
  test: undefined
};
const customMessage = 'custom message';

const initialState = {
  path,
  obj,
  isOptional: false,
  checks: [],
  customMessage: null
};
const stateAfterOptional = {
  path,
  obj,
  isOptional: true,
  checks: [],
  customMessage: null
};
const stateAfterCustomMessage = {
  path,
  obj,
  isOptional: false,
  checks: [],
  customMessage
};

const expectedInfoWithoutErrors = {
  path,
  value: obj[path],
  isCorrect: true,
  errorMessage: null
};

const checkInfoWithError = {
  errorMessage: 'should pass tests'
};
const expectedInfoWithErrors = {
  path,
  value: obj[path],
  isCorrect: false,
  errorMessage: `${path} ${checkInfoWithError.errorMessage}`
};

const expectedInfoWithErrorsAndCustomMessage = {
  path,
  value: obj[path],
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
  obj,
  objWithEmptyValue,
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