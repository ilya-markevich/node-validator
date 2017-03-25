'use strict';

const State = require('./state');
const BaseFieldValidator = require('./fieldValidators/base');

const get = require('get-value');

class Validator {
  constructor(objToValidate) {
    this.objToValidate = objToValidate;
    this.states = [];
  }

  property(path) {
    const { objToValidate, states } = this;
    const state = new State(path, get(objToValidate, path));

    states.push(state);
    return state;
  }

  extend(objWithMethods = {}) {
    Object.values(objWithMethods).forEach(this._checkCustomValidator);

    Object.keys(objWithMethods).forEach((methodName) => {
      const customValidator = objWithMethods[methodName];
      const fieldValidator = Object.create(BaseFieldValidator.prototype, {
        name: {
          value: methodName
        },
        defaultOpts: {
          value: Object(customValidator.defaultOpts)
        },
        apply: {
          value: customValidator.apply
        },
        getErrorMessage: {
          value: customValidator.getErrorMessage || function () {
            return `should pass ${this.name} validation`;
          }
        }
      });

      ValidityState.applyFieldValidator(fieldValidator);
    });
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

  _checkCustomValidator(validator) {
    if (typeof validator.apply !== 'function') {
      throw new Error('"apply" property should be function.');
    }
  }
}

module.exports = Validator;