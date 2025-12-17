import BaseFieldValidator from './base';

class IsLowerCaseString extends BaseFieldValidator {
  constructor() {
    super('isLowerCaseString');
  }

  execute(value) {
    return typeof value === 'string' && value === value.toLowerCase();
  }

  getErrorMessage() {
    return 'should be a lower case string';
  }
}

export default new IsLowerCaseString();
