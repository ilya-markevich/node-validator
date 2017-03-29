'use strict';

const fs = require('fs');
const path = require('path');

class ValidationState {
  constructor(path, value) {
    this.path = path;
    this.value = value;

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
    const { path, value, customMessage, checks } = this;
    const incorrectChecks = checks.filter(check => !check.isCorrect);
    const result = {
      path,
      value,
      isCorrect: incorrectChecks.length === 0,
      errorMessage: null
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks.map(check => check.errorMessage).join('; ');

      result.errorMessage = customMessage || `${path} ${errorMessage}`;
    }

    return result;
  }

  static applyFieldValidator(fieldValidator) {
    ValidationState.prototype[fieldValidator.name] = function (...opts) {
      const self = this;

      if (self.isOptional && (self.value === null || self.value === undefined)) {
        self.checks = [];
      } else {
        self.checks.push(fieldValidator.check(self.value, ...opts));
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