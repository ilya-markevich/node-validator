'use strict';

class BaseFieldValidator {
  constructor(name, defaultOpts) {
    this.name = name;
    this.defaultOpts = defaultOpts;
  }

  check(value, opts) {
    const self = this;
    const options = Object.assign({}, self.defaultOpts, opts);

    const isCorrect = self.execute(value, options);
    const result = {
      isCorrect
    };

    if (!isCorrect) {
      result.errorMessage = self.getErrorMessage(options);
    }

    return result;
  }
}

module.exports = BaseFieldValidator;