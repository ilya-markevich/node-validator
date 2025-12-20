import BaseFieldValidator from './base';

class NotEmpty extends BaseFieldValidator {
  constructor() {
    super('isNotEmpty', { trim: false });
  }

  execute(value, opts) {
    if (typeof value === 'string') {
      if (opts?.trim) {
        return value.trim().length > 0;
      }

      return value.length > 0;
    }

    return value !== undefined && value !== null;
  }

  getErrorMessage() {
    return 'should be not empty';
  }
}

export default new NotEmpty();
