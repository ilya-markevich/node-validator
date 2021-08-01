"use strict";

const State = require("./state");
const BaseFieldValidator = require("./fieldValidators/base");

class Validator {
  constructor(objToValidate) {
    this._objToValidate = objToValidate;
    this._states = [];

    this.StateConstructor = State;
  }

  getValidationObject() {
    return this._objToValidate;
  }

  property(path) {
    const { _objToValidate, _states, StateConstructor } = this;
    const state = new StateConstructor(path, _objToValidate);

    _states.push(state);

    return state;
  }

  hasErrors() {
    const errors = this.getErrors();

    return errors.length > 0;
  }

  getErrors() {
    return this._states
      .map((state) => state.getInfo())
      .filter((stateInfo) => !stateInfo.isCorrect)
      .map((stateInfo) => {
        delete stateInfo.isCorrect;

        return stateInfo;
      });
  }

  static extend(customValidators) {
    Object.keys(Object(customValidators)).forEach((validatorName) =>
      Validator._checkCustomValidator(customValidators[validatorName])
    );

    Object.keys(Object(customValidators)).forEach((validatorName) => {
      const customValidator = customValidators[validatorName];
      const defaultGetErrorMessage = () =>
        `should pass ${validatorName} validation`;

      const fieldValidator = Object.create(BaseFieldValidator.prototype, {
        name: { value: validatorName },
        defaultOpts: { value: customValidator.defaultOpts },
        execute: { value: customValidator.execute },
        getErrorMessage: {
          value: customValidator.getErrorMessage || defaultGetErrorMessage,
        },
      });

      State.applyFieldValidator(fieldValidator);
    });
  }

  static _checkCustomValidator(validator) {
    if (typeof validator.execute !== "function") {
      throw new Error('"execute" property should be function.');
    }

    if (
      validator.getErrorMessage &&
      typeof validator.getErrorMessage !== "function"
    ) {
      throw new Error('"getErrorMessage" property should be function.');
    }
  }
}

module.exports = Validator;
