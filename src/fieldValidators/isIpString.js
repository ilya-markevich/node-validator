'use strict';

const BaseFieldValidator = require('./base');
const isIp = require('is-ip');

class IsIpString extends BaseFieldValidator {
  constructor() {
    super('isIpString', {});
  }

  execute(value, opts) {
    const { v4, v6 } = opts;
    let isCorrectIp;

    if (!v4 && !v6) {
      isCorrectIp = isIp(value);
    } else if (v4) {
      isCorrectIp = isIp.v4(value);
    } else {
      isCorrectIp = isIp.v6(value);
    }

    return typeof value === 'string' && isCorrectIp;
  }

  getErrorMessage() {
    return 'should be an ip string';
  }
}

module.exports = new IsIpString();