import BaseFieldValidator from './base';

class IsBase64String extends BaseFieldValidator {
  constructor() {
    super('isBase64String');
    this.notBase64Regexp = /[^A-Z0-9+=]/iu;
  }

  execute(value) {
    const base64LengthDivisor = 4;

    if (
      typeof value !== 'string' ||
      value.length % base64LengthDivisor !== 0 ||
      this.notBase64Regexp.test(value)
    ) {
      return false;
    }

    const firstPaddingChar = value.indexOf('=');
    const valueLength = value.length;
    // eslint-disable-next-line no-magic-numbers
    const isEqualInTheEnd = firstPaddingChar === valueLength - 2 && value[valueLength - 1] === '=';

    return firstPaddingChar === -1 || firstPaddingChar === valueLength - 1 || isEqualInTheEnd;
  }

  getErrorMessage() {
    return 'should be a base64 string';
  }
}

export default new IsBase64String();
