import get from 'lodash.get';
import FieldState from './fieldState';
import { ARRAY_SELECTOR } from './constants';

const expandPath = (path, obj) => {
  const parts = path.split(ARRAY_SELECTOR);
  const base = parts[0];
  const pathAfterArraySelector = parts.slice(1).join(ARRAY_SELECTOR);
  const value = get(obj, base);

  if (!Array.isArray(value)) {
    return [];
  }

  return value.flatMap((_, index) => {
    const currentPath = `${base}[${index}]`;
    const fullPath = pathAfterArraySelector
      ? `${currentPath}${pathAfterArraySelector}`
      : currentPath;

    return fullPath.includes(ARRAY_SELECTOR)
      ? expandPath(fullPath, obj)
      : [new FieldState(fullPath, obj)];
  });
};

class ArrayFieldState {
  #states;

  constructor(path, obj) {
    this.#states = expandPath(path, obj);
  }

  optional() {
    this.#states.forEach((state) => state.optional());

    return this;
  }

  withMessage(message) {
    this.#states.forEach((state) => state.withMessage(message));

    return this;
  }

  async getInfo() {
    const results = await Promise.all(this.#states.map((state) => state.getInfo()));

    return results.flat();
  }

  static applyFieldValidator(fieldValidator) {
    ArrayFieldState.prototype[fieldValidator.name] = function (...opts) {
      this.#states.forEach((state) => state[fieldValidator.name](...opts));

      return this;
    };
  }
}

export default ArrayFieldState;
