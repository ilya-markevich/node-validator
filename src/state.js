'use strict';

const fs = require('fs');
const path = require('path');

const get = require('lodash.get');

class ValidationState {
  constructor(path, obj) {
    this.path = path;
    this.obj = obj;

    this.isOptional = false;
    this.checks = [];
    this.customMessage = null;
  }

  optional() {
    const self = this;

    self.isOptional = true;
    return self;
  }

  withMessage(message) {
    const self = this;

    self.customMessage = message;
    return self;
  }

  getInfo() {
    const self = this;
    const { path, customMessage, checks } = self;
    const incorrectChecks = checks.filter(check => !check.isCorrect);
    const result = {
      path,
      value: self._getValue(),
      isCorrect: incorrectChecks.length === 0,
      errorMessage: null
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks.map(check => check.errorMessage).join('; ');

      result.errorMessage = customMessage || `${path} ${errorMessage}`;
    }

    return result;
  }

  _getValue() {
    const { path, obj } = this;

    return get(obj, path);
  }

  static applyFieldValidator(fieldValidator) {
    ValidationState.prototype[fieldValidator.name] = function (...opts) {
      const self = this;
      const value = self._getValue();

      if (self.isOptional && (value === null || value === undefined)) {
        self.checks = [];
      } else {
        self.checks.push(fieldValidator.check(value, ...opts));
      }

      return self;
    };
  }

  static _applyDefaultValidators() {
    const fieldValidatorsPath = path.join(__dirname, 'fieldValidators');

    fs.readdirSync(fieldValidatorsPath).filter(f => !f.startsWith('base')).forEach((fileName) => {
      const fieldValidator = require(path.join(fieldValidatorsPath, fileName));

      ValidationState.applyFieldValidator(fieldValidator);
    });
  }
}

ValidationState._applyDefaultValidators();

module.exports = ValidationState;