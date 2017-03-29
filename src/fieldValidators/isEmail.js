'use strict';

/* eslint max-len: "off" */

const isEmail = require('isemail');
const BaseFieldValidator = require('./base');

class IsEmail extends BaseFieldValidator {
  constructor() {
    super('isEmail');
  }

  execute(value) {
    return isEmail.validate(value, {
      errorLevel: false
    });
  }

  getErrorMessage() {
    return 'should be an email';
  }
}

module.exports = new IsEmail();