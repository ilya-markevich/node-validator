import isEmail from 'isemail';
import BaseFieldValidator from './base';

class IsEmail extends BaseFieldValidator {
  constructor() {
    super('isEmail');
  }

  execute(value) {
    return isEmail.validate(String(value), { errorLevel: false });
  }

  getErrorMessage() {
    return 'should be an email';
  }
}

export default new IsEmail();
