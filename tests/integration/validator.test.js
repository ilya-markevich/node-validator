import Validator from '../../src/validator';
import testData from './data/validator';

describe('Validator Integration Tests', () => {
  describe('Static #extend', () => {
    it('should not add custom field validator because execute function is not provided', () => {
      const { incorrectCustomValidatorWithoutExecute } = testData;

      try {
        Validator.extend(incorrectCustomValidatorWithoutExecute);
        throw new Error('Incorrect custom validator was created.');
      } catch (err) {
        expect(err.message).toBe('"execute" property should be function.');
      }
    });

    it('should not add custom field validator because getErrorMessage is not a function', () => {
      const { incorrectCustomValidatorWithFakeGetErrorMessage } = testData;

      try {
        Validator.extend(incorrectCustomValidatorWithFakeGetErrorMessage);
        throw new Error('Incorrect custom validator was created.');
      } catch (err) {
        expect(err.message).toBe('"getErrorMessage" property should be function.');
      }
    });

    it('should add custom fields validators and use them', async () => {
      const { objectForCustomValidator, customValidatorErrors, isTestValidatorErrorMessage } =
        testData;
      const validator = new Validator(objectForCustomValidator);

      Validator.extend({
        isTest: {
          execute: (value) => Promise.resolve(value === 'test'),
          getErrorMessage: () => isTestValidatorErrorMessage
        },
        isTest2: {
          execute: (value) => value === 'test2'
        }
      });

      validator.property('field1').isNotEmpty().isTest();

      validator.property('field2').isTest2();

      expect(await validator.hasErrors()).toBe(true);
      expect(await validator.getErrors()).toEqual(customValidatorErrors);
    });
  });

  describe('Validation', () => {
    it('should validate object with custom error message for field', async () => {
      const { objectToValidate, customErrorMessage, customErrorResults } = testData;
      const validator = new Validator(objectToValidate);

      validator.property('field1').isNotEmpty().isEqual('1');

      validator.property('field2').optional();

      validator
        .property('field3')
        .isNotEmpty()
        .isLength({ min: 5 })
        .withMessage(customErrorMessage);

      expect(await validator.hasErrors()).toBe(true);
      expect(await validator.getErrors()).toEqual(customErrorResults);
    });
  });
});
