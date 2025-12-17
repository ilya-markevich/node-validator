/* eslint-disable no-console */
import Validator from '../index';

const getValidationObject = (validator: Validator) => {
  const obj: object = validator.getValidationObject();

  console.log(obj);
};

const hasErrors = (validator: Validator) => validator.hasErrors();

const getErrors = async (validator: Validator) => {
  const errors = await validator.getErrors();

  errors.forEach((error) => {
    console.log(`${error.errorMessage}, ${error.value as string}, ${error.path}`);
  });
};

const extend = (validator: Validator) => {
  validator.extend({
    test: {
      execute(value: unknown) {
        return value === 'test';
      }
    },
    test2: {
      execute(value: unknown) {
        return value === 'test';
      },
      getErrorMessage(option) {
        return `${option as string} test error message`;
      }
    },
    test3: {
      execute(value: unknown) {
        return value === 'test';
      },
      defaultOpts: {}
    },
    test4: {
      execute(value: unknown) {
        return Promise.resolve(Boolean(value));
      },
      defaultOpts: {}
    }
  });
};

const validator: Validator = new Validator({ test: 1 });

(async () => {
  getValidationObject(validator);
  await hasErrors(validator);
  await getErrors(validator);
  extend(validator);
})().catch(console.error);
