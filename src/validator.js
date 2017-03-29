'use strict';

const State = require('./state');
const BaseFieldValidator = require('./fieldValidators/base');

const get = require('get-value');

class Validator {
  constructor(objToValidate) {
    this.objToValidate = objToValidate;
    this.states = [];

    this.StateConstructor = State;
    this.FieldValidatorConstructor = BaseFieldValidator;
  }

  property(path) {
    const { objToValidate, states, StateConstructor } = this;
    const state = new StateConstructor(path, get(objToValidate, path));

    states.push(state);
    return state;
  }

  hasErrors() {
    const errors = this.getErrors();

    return errors.length > 0;
  }

  getErrors() {
    return this.states.map(state => state.getInfo()).filter(stateInfo => !stateInfo.isCorrect).map((stateInfo) => {
      delete stateInfo.isCorrect;
      return stateInfo;
    });
  }

  static extend(objWithMethods) {
    Object.keys(Object(objWithMethods)).forEach(methodName => Validator._checkCustomValidator(objWithMethods[methodName]));

    Object.keys(Object(objWithMethods)).forEach((methodName) => {
      const customValidator = objWithMethods[methodName];
      const fieldValidator = Object.create(BaseFieldValidator.prototype, {
        name: {
          value: methodName
        },
        defaultOpts: {
          value: Object(customValidator.defaultOpts)
        },
        execute: {
          value: customValidator.execute
        },
        getErrorMessage: {
          value: customValidator.getErrorMessage || function () {
            return `should pass ${this.name} validation`;
          }
        }
      });

      State.applyFieldValidator(fieldValidator);
    });
  }

  static _checkCustomValidator(validator) {
    if (typeof validator.execute !== 'function') {
      throw new Error('"execute" property should be function.');
    }

    if (validator.getErrorMessage && typeof validator.getErrorMessage !== 'function') {
      throw new Error('"getErrorMessage" property should be function.');
    }
  }
}

module.exports = Validator;