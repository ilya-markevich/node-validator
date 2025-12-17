import BaseFieldValidator from './base';

class IsEqual extends BaseFieldValidator {
  constructor() {
    super('isEqual');
  }

  execute(value, equalTo) {
    return value === equalTo;
  }

  getErrorMessage(value) {
    return `should be equal ${value}`;
  }
}

export default new IsEqual();
