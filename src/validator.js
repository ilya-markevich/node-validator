import FieldState from './fieldState';
import ArrayFieldState from './arrayFieldState';
import BaseFieldValidator from './fieldValidators/base';
import { ARRAY_SELECTOR, DEFAULT_VALIDATORS } from './constants';

class Validator {
  #objToValidate;

  #states;

  constructor(objToValidate) {
    this.#objToValidate = objToValidate;
    this.#states = [];
  }

  getValidationObject() {
    return this.#objToValidate;
  }

  property(path) {
    const State = path.includes(ARRAY_SELECTOR) ? ArrayFieldState : FieldState;
    const state = new State(path, this.#objToValidate);

    this.#states.push(state);

    return state;
  }

  async hasErrors() {
    const errors = await this.getErrors();

    return errors.length > 0;
  }

  async getErrors() {
    const statesInfo = await Promise.all(this.#states.map((state) => state.getInfo()));

    return statesInfo
      .flat()
      .filter((stateInfo) => !stateInfo.isCorrect)
      .map((stateInfo) => {
        delete stateInfo.isCorrect;

        return stateInfo;
      });
  }

  static extend(customValidators) {
    Object.keys(Object(customValidators)).forEach((validatorName) =>
      Validator.#checkCustomValidator(customValidators[validatorName])
    );

    Object.keys(Object(customValidators)).forEach((validatorName) => {
      const customValidator = customValidators[validatorName];
      const defaultGetErrorMessage = () => `should pass ${validatorName} validation`;

      const fieldValidator = Object.create(BaseFieldValidator.prototype, {
        name: { value: validatorName },
        defaultOpts: { value: customValidator.defaultOpts },
        execute: { value: customValidator.execute },
        getErrorMessage: {
          value: customValidator.getErrorMessage || defaultGetErrorMessage
        }
      });

      FieldState.applyFieldValidator(fieldValidator);
      ArrayFieldState.applyFieldValidator(fieldValidator);
    });
  }

  static #checkCustomValidator(validator) {
    if (typeof validator.execute !== 'function') {
      throw new Error('"execute" property should be function.');
    }

    if (validator.getErrorMessage && typeof validator.getErrorMessage !== 'function') {
      throw new Error('"getErrorMessage" property should be function.');
    }
  }
}

DEFAULT_VALIDATORS.forEach((fieldValidator) => {
  FieldState.applyFieldValidator(fieldValidator);
  ArrayFieldState.applyFieldValidator(fieldValidator);
});

export default Validator;
