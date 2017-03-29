'use strict';

const StateConstructor = require('../../../src/state');
const FieldValidatorConstructor = require('../../../src/fieldValidators/base');

const objectToValidate = {
  data: 'test data',
  name: 'test name'
};
const initialState = {
  states: [],
  objToValidate: objectToValidate,
  StateConstructor,
  FieldValidatorConstructor
};

const path = 'data';
const mockStateReturn = {};

const stateWithError = {
  getInfo() {
    return {
      isCorrect: false,
      path,
      message: 'test error'
    };
  }
};
const stateWithoutError = {
  getInfo() {
    return {
      isCorrect: true,
      path,
      message: null
    };
  }
};

const validatorErrors = (() => {
  const stateInfo = Object.assign({}, stateWithError.getInfo());

  delete stateInfo.isCorrect;
  return [stateInfo];
})();

module.exports = {
  objectToValidate,
  initialState,
  path,
  mockStateReturn,
  stateWithError,
  stateWithoutError,
  validatorErrors
};