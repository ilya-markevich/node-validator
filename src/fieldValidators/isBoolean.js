import BaseFieldValidator from './base';

class IsBoolean extends BaseFieldValidator {
  constructor() {
    super('isBoolean', { convert: true });
  }

  execute(value, opts) {
    if (opts.convert && typeof value === 'string') {
      return value === 'true' || value === 'false';
    }

    return typeof value === 'boolean';
  }

  getErrorMessage() {
    return 'should be a boolean';
  }
}

export default new IsBoolean();
