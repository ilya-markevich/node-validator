import BaseFieldValidator from './base';

class IsArray extends BaseFieldValidator {
  constructor() {
    super('isArray');
  }

  execute(value) {
    return Array.isArray(value);
  }

  getErrorMessage() {
    return 'should be an array';
  }
}

export default new IsArray();
