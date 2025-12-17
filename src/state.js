import get from 'lodash.get';

import isArray from './fieldValidators/isArray';
import isArrayLength from './fieldValidators/isArrayLength';
import isBase64String from './fieldValidators/isBase64String';
import isBoolean from './fieldValidators/isBoolean';
import isDate from './fieldValidators/isDate';
import isEachIn from './fieldValidators/isEachIn';
import isEmail from './fieldValidators/isEmail';
import isEqual from './fieldValidators/isEqual';
import isFloat from './fieldValidators/isFloat';
import isIn from './fieldValidators/isIn';
import isInteger from './fieldValidators/isInteger';
import isIpString from './fieldValidators/isIpString';
import isJsonString from './fieldValidators/isJsonString';
import isLength from './fieldValidators/isLength';
import isLowerCaseString from './fieldValidators/isLowerCaseString';
import isMatch from './fieldValidators/isMatch';
import isNotEmpty from './fieldValidators/isNotEmpty';
import isNumericString from './fieldValidators/isNumericString';
import isString from './fieldValidators/isString';
import isUpperCaseString from './fieldValidators/isUpperCaseString';
import isUrlString from './fieldValidators/isUrlString';

const defaultValidators = [
  isArray,
  isArrayLength,
  isBase64String,
  isBoolean,
  isDate,
  isEachIn,
  isEmail,
  isEqual,
  isFloat,
  isIn,
  isInteger,
  isIpString,
  isJsonString,
  isLength,
  isLowerCaseString,
  isMatch,
  isNotEmpty,
  isNumericString,
  isString,
  isUpperCaseString,
  isUrlString
];

class ValidationState {
  constructor(pathToProp, obj) {
    this.pathToProp = pathToProp;
    this.obj = obj;

    this.isOptional = false;
    this.checks = [];
    this.customMessage = null;
  }

  optional() {
    this.isOptional = true;

    return this;
  }

  withMessage(message) {
    this.customMessage = message;

    return this;
  }

  async getInfo() {
    const { pathToProp, customMessage, checks } = this;
    const checksResults = await Promise.all(checks.map((execCheck) => execCheck()));
    const incorrectChecks = checksResults.filter((check) => !check.isCorrect);
    const result = {
      path: pathToProp,
      value: this._getValue(),
      isCorrect: incorrectChecks.length === 0,
      errorMessage: null
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks.map((check) => check.errorMessage).join('; ');

      result.errorMessage = customMessage || `${pathToProp} ${errorMessage}`;
    }

    return result;
  }

  _getValue() {
    const { pathToProp, obj } = this;

    return get(obj, pathToProp);
  }

  static applyFieldValidator(fieldValidator) {
    ValidationState.prototype[fieldValidator.name] = function (...opts) {
      const value = this._getValue();

      if (this.isOptional && (value === null || value === undefined)) {
        this.checks = [];
      } else {
        this.checks.push(() => fieldValidator.check(value, ...opts));
      }

      return this;
    };
  }

  static _applyDefaultValidators() {
    defaultValidators.forEach((fieldValidator) => {
      ValidationState.applyFieldValidator(fieldValidator);
    });
  }
}

ValidationState._applyDefaultValidators();

export default ValidationState;
