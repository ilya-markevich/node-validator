'use strict';

/* eslint no-magic-numbers: "off" */

const BaseFieldValidator = require('./base');

class IsBase64String extends BaseFieldValidator {
  constructor() {
    super('isBase64String');
    this.notBase64Regexp = /[^A-Z0-9+=]/i;
  }

  execute(value) {
    const base64LengthDivisor = 4;

    if (typeof value !== 'string' || value.length % base64LengthDivisor !== 0 || this.notBase64Regexp.test(value)) {
      return false;
    }

    const firstPaddingChar = value.indexOf('=');
    const valueLength = value.length;

    return firstPaddingChar === -1 || firstPaddingChar === valueLength - 1
      || (firstPaddingChar === valueLength - 2 && value[valueLength - 1] === '=');
  }

  getErrorMessage() {
    return 'should be a base64 string';
  }
}

module.exports = new IsBase64String();