import BaseFieldValidator from './base';

class IsIn extends BaseFieldValidator {
  constructor() {
    super('isIn', []);
  }

  execute(value, inArray) {
    return inArray.includes(value);
  }

  getErrorMessage(inArray) {
    return `should be in [${inArray.map(String).join(', ')}]`;
  }
}

export default new IsIn();
