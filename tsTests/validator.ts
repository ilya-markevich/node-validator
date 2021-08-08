import Validator = require("../index");

function getValidationObject(validator: Validator) {
  const obj: object = validator.getValidationObject();

  console.log(obj);
}

async function hasErrors(validator: Validator) {
  return validator.hasErrors();
}

async function getErrors(validator: Validator) {
  const errors = await validator.getErrors();

  errors.forEach((error) => {
    console.log(`${error.errorMessage}, ${error.value}, ${error.path}`);
  });
}

function extend(validator: Validator) {
  validator.extend({
    test: {
      execute(value: any) {
        return value === "test";
      },
    },
    test2: {
      execute(value: any) {
        return value === "test";
      },
      getErrorMessage(option) {
        return `${option} test error message`;
      },
    },
    test3: {
      execute(value: any) {
        return value === "test";
      },
      defaultOpts: {},
    },
    test4: {
      execute(value: any) {
        return Promise.resolve(Boolean(value));
      },
      defaultOpts: {},
    },
  });
}

const validator: Validator = new Validator({
  test: 1,
});

(async () => {
  getValidationObject(validator);
  await hasErrors(validator);
  await getErrors(validator);
  extend(validator);
})();
