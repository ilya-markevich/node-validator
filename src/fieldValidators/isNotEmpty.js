'use strict';

const BaseFieldValidator = require('./base');

class NotEmpty extends BaseFieldValidator {
  constructor() {
    super('isNotEmpty');
  }

  execute(value) {
    return typeof value === 'string' && value.length > 0;
  }

  getErrorMessage() {
    return 'should be not empty';
  }
}

module.exports = new NotEmpty();