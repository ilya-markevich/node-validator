import BaseFieldValidator from './base';

class IsString extends BaseFieldValidator {
  constructor() {
    super('isString');
  }

  execute(value) {
    return typeof value === 'string';
  }

  getErrorMessage() {
    return 'should be a string';
  }
}

export default new IsString();
