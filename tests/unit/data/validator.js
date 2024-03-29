"use strict";

const StateConstructor = require("../../../src/state");

const objectToValidate = {
  data: "test data",
  name: "test name",
};
const initialState = {
  _states: [],
  _objToValidate: objectToValidate,
  StateConstructor,
};

const path = "data";
const mockStateReturn = {};

const stateWithError = {
  getInfo() {
    return {
      isCorrect: false,
      path,
      message: "test error",
    };
  },
};
const stateWithoutError = {
  getInfo() {
    return {
      isCorrect: true,
      path,
      message: null,
    };
  },
};

const validatorErrors = (() => {
  const stateInfo = { ...stateWithError.getInfo() };
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
  validatorErrors,
};
