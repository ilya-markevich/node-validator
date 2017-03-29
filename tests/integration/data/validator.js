'use strict';

const objectForCustomValidator = {
  field1: 'test 1',
  field2: 'test 2'
};
const isTestValidatorErrorMessage = 'should be eql test';
const isTest2ValidatorErrorMessage = 'field2 should pass isTest2 validation';

const customValidatorErrors = [
  {
    path: 'field1',
    value: objectForCustomValidator.field1,
    errorMessage: `field1 ${isTestValidatorErrorMessage}`
  },
  {
    path: 'field2',
    value: objectForCustomValidator.field2,
    errorMessage: isTest2ValidatorErrorMessage
  }
];

const incorrectCustomValidatorWithoutExecute = {
  isTest: {}
};
const incorrectCustomValidatorWithFakeGetErrorMessage = {
  isTest: {
    execute: () => true,
    getErrorMessage: 'test'
  }
};

const objectToValidate = {
  field1: '1',
  field2: null,
  field3: 'test'
};

const customErrorMessage = 'Incorrect field.';
const customErrorResults = [
  {
    path: 'field3',
    value: 'test',
    errorMessage: customErrorMessage
  }
];

module.exports = {
  objectForCustomValidator,
  customValidatorErrors,
  isTestValidatorErrorMessage,
  objectToValidate,
  customErrorMessage,
  customErrorResults,
  incorrectCustomValidatorWithoutExecute,
  incorrectCustomValidatorWithFakeGetErrorMessage
};