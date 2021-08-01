"use strict";

const DEFAULT_CONDITION_FN = (value) => value;

class BaseFieldValidator {
  constructor(name, defaultOpts) {
    this.name = name;
    this.defaultOpts = defaultOpts;
  }

  check(value, opts) {
    const options = this._getOptions(opts);

    const isCorrect = this.execute(value, options);
    const result = { isCorrect };

    if (!isCorrect) {
      result.errorMessage = this.getErrorMessage(options);
    }

    return result;
  }

  _getOptions(opts) {
    const { defaultOpts } = this;
    const type = Object.prototype.toString.call(opts).toLowerCase();
    const objTypes = ["[object object]"];

    if (objTypes.includes(type) && !Array.isArray(defaultOpts)) {
      return { ...defaultOpts, ...opts };
    }

    return opts !== null && opts !== undefined ? opts : defaultOpts;
  }

  _getRangeExecution(opts, value, conditionFunc = DEFAULT_CONDITION_FN) {
    const { min, max } = opts;

    if (conditionFunc(min) && conditionFunc(max)) {
      return value >= min && value <= max;
    } else if (conditionFunc(min)) {
      return value >= min;
    } else if (conditionFunc(max)) {
      return value <= max;
    }

    return true;
  }

  _getRangeErrorMessage(opts, conditionFunc = (value) => value) {
    const { min, max } = opts;

    if (conditionFunc(min) && conditionFunc(max)) {
      return ` between ${min} and ${max}`;
    } else if (conditionFunc(min)) {
      return ` more than ${min}`;
    } else if (conditionFunc(max)) {
      return ` less than ${max}`;
    }

    return "";
  }
}

module.exports = BaseFieldValidator;
