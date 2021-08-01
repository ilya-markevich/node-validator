"use strict";

const fs = require("fs");
const path = require("path");
const get = require("lodash.get");

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

  getInfo() {
    const { pathToProp, customMessage, checks } = this;
    const incorrectChecks = checks.filter((check) => !check.isCorrect);
    const result = {
      path: pathToProp,
      value: this._getValue(),
      isCorrect: incorrectChecks.length === 0,
      errorMessage: null,
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks
        .map((check) => check.errorMessage)
        .join("; ");

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
        this.checks.push(fieldValidator.check(value, ...opts));
      }

      return this;
    };
  }

  static _applyDefaultValidators() {
    const fieldValidatorsPath = path.join(__dirname, "fieldValidators");

    fs.readdirSync(fieldValidatorsPath)
      .filter((f) => !f.startsWith("base"))
      .forEach((fileName) => {
        const fieldValidator = require(path.join(
          fieldValidatorsPath,
          fileName
        ));

        ValidationState.applyFieldValidator(fieldValidator);
      });
  }
}

ValidationState._applyDefaultValidators();

module.exports = ValidationState;
