'use strict';

const applyFieldValidators = require('./fieldValidators');

class ValidationState {
  constructor(path, value) {
    this.path = path;
    this.value = value;

    this.isOptional = false;
    this.checks = [];
    this.customMessage = null;
  }

  optional() {
    this.isOptional = true;
  }

  withMessage(message) {
    this.customMessage = message;
  }

  getInfo() {
    const { path, value, customMessage, checks } = this;
    const incorrectChecks = checks.filter(check => !check.isCorrect);
    const result = {
      path,
      value,
      isCorrect: incorrectChecks.length > 0,
      errorMessage: null
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks.map(check => check.errorMessage).join('; ');

      result.errorMessage = customMessage || `${path} ${errorMessage}`;
    }

    return result;
  }

  static applyFieldValidator(fieldValidator) {
    ValidationState.prototype[fieldValidator.name] = function (value, opts) {
      const self = this;

      if (self.isOptional && (value === null || value === undefined)) {
        self.checks = [];
      } else {
        self.checks.push(fieldValidator.check(value, opts));
      }
    };
  }
}

applyFieldValidators(ValidationState);

module.exports = ValidationState;