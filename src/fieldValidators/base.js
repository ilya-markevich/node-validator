'use strict';

class BaseFieldValidator {
  constructor(name, defaultOpts) {
    this.name = name;
    this.defaultOpts = defaultOpts;
  }

  check(value, opts) {
    const self = this;
    const options = self._getOptions(opts);

    const isCorrect = self.execute(value, options);
    const result = {
      isCorrect
    };

    if (!isCorrect) {
      result.errorMessage = self.getErrorMessage(options);
    }

    return result;
  }

  _getOptions(opts) {
    const { defaultOpts } = this;
    const type = Object.prototype.toString.call(opts).toLowerCase();
    const objTypes = ['[object object]'];

    if (objTypes.includes(type) && !Array.isArray(defaultOpts)) {
      return Object.assign({}, defaultOpts, opts);
    } else {
      return opts !== null && opts !== undefined ? opts : defaultOpts;
    }
  }

  _getRangeExecution(opts, value, conditionFunc = value => value) {
    const { min, max } = opts;

    if (conditionFunc(min) && conditionFunc(max)) {
      return value >= min && value <= max;
    } else if (conditionFunc(min)) {
      return value >= min;
    } else if (conditionFunc(max)) {
      return value <= max;
    } else {
      return true;
    }
  }

  _getRangeErrorMessage(opts, conditionFunc = value => value) {
    const { min, max } = opts;

    if (conditionFunc(min) && conditionFunc(max)) {
      return ` between ${min} and ${max}`;
    } else if (conditionFunc(min)) {
      return ` more than ${min}`;
    } else if (conditionFunc(max)) {
      return ` less than ${max}`;
    } else {
      return '';
    }
  }
}

module.exports = BaseFieldValidator;