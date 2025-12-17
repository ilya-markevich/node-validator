import Validator from '../../../src/validator';

const convertToString = (value) => {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
};

export default ({ validator, testCases }) => {
  describe(`${validator} integration`, () => {
    testCases.forEach((testCase) => {
      const { obj, validatorName, opts, errors } = testCase;
      const optsString = convertToString(opts);
      const valueString = convertToString(obj.test);

      it(`should ${
        errors.length === 0 ? 'not ' : ''
      }get errors for value = ${valueString} with options = ${optsString}`, async () => {
        const validatorObj = new Validator(obj);

        validatorObj.property('test')[validatorName](opts);

        expect(await validatorObj.hasErrors()).toBe(errors.length > 0);
        expect(await validatorObj.getErrors()).toEqual(errors);
      });
    });
  });
};
