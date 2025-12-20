import get from 'lodash.get';

class FieldState {
  #pathToProp;

  #obj;

  #isOptional;

  #checks;

  #customMessage;

  constructor(pathToProp, obj) {
    this.#pathToProp = pathToProp;
    this.#obj = obj;

    this.#isOptional = false;
    this.#checks = [];
    this.#customMessage = null;
  }

  optional() {
    this.#isOptional = true;

    return this;
  }

  withMessage(message) {
    this.#customMessage = message;

    return this;
  }

  async getInfo() {
    const checksResults = await Promise.all(this.#checks.map((execCheck) => execCheck()));
    const incorrectChecks = checksResults.filter((check) => !check.isCorrect);
    const result = {
      path: this.#pathToProp,
      value: this.#getValue(),
      isCorrect: incorrectChecks.length === 0,
      errorMessage: null
    };

    if (incorrectChecks.length > 0) {
      const errorMessage = incorrectChecks.map((check) => check.errorMessage).join('; ');

      result.errorMessage = this.#customMessage || `${this.#pathToProp} ${errorMessage}`;
    }

    return result;
  }

  #getValue() {
    return get(this.#obj, this.#pathToProp);
  }

  static applyFieldValidator(fieldValidator) {
    FieldState.prototype[fieldValidator.name] = function (...opts) {
      const value = this.#getValue();

      if (this.#isOptional && (value === null || value === undefined)) {
        this.#checks = [];
      } else {
        this.#checks.push(() => fieldValidator.check(value, ...opts));
      }

      return this;
    };
  }
}

export default FieldState;
