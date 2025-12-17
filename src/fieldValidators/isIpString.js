import BaseFieldValidator from './base';
import { isIP, isIPv4, isIPv6 } from 'is-ip';

class IsIpString extends BaseFieldValidator {
  constructor() {
    super('isIpString', {});
  }

  execute(value, opts) {
    const { v4, v6 } = opts;
    let isCorrectIp;

    if (!value) {
      return false;
    }

    if ((!v4 && !v6) || (v4 && v6)) {
      isCorrectIp = isIP(value);
    } else if (v4) {
      isCorrectIp = isIPv4(value);
    } else {
      isCorrectIp = isIPv6(value);
    }

    return typeof value === 'string' && isCorrectIp;
  }

  getErrorMessage(opts) {
    const { v4, v6 } = opts;

    if ((!v4 && !v6) || (v4 && v6)) {
      return 'should be an ip string';
    } else if (v4) {
      return 'should be an ipv4 string';
    }

    return 'should be an ipv6 string';
  }
}

export default new IsIpString();
