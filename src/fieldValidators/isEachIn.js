'use strict';

const BaseFieldValidator = require('./base');

class IsEachIn extends BaseFieldValidator {
  constructor() {
    super('isEachIn', []);
  }

  execute(values, inArray) {
    return Array.isArray(values) && values.reduce((result, value) => {
      return result && inArray.includes(value);
    }, true);
  }

  getErrorMessage(inArray) {
    return `each value should be in [${inArray.map(String).join(', ')}]`;
  }
}

module.exports = new IsEachIn();