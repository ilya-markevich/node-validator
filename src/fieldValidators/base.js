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
    const objTypes = ['[object null]', '[object undefined]', '[object object]'];

    if (objTypes.includes(type) && !Array.isArray(defaultOpts)) {
      return Object.assign({}, defaultOpts, opts);
    } else {
      return opts || defaultOpts;
    }
  }
}

module.exports = BaseFieldValidator;