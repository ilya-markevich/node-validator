import BaseFieldValidator from './base';

class IsJsonString extends BaseFieldValidator {
  constructor() {
    super('isJsonString');
  }

  execute(value) {
    const isString = typeof value === 'string';

    try {
      JSON.parse(value);
    } catch {
      return false;
    }

    return isString;
  }

  getErrorMessage() {
    return 'should be a valid json string';
  }
}

export default new IsJsonString();
