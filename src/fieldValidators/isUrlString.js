import isUrl from 'is-url';
import BaseFieldValidator from './base';

class IsUrlString extends BaseFieldValidator {
  constructor() {
    super('isUrlString');
  }

  execute(value) {
    return typeof value === 'string' && isUrl(value);
  }

  getErrorMessage() {
    return 'should be an url string';
  }
}

export default new IsUrlString();
