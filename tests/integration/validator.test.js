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

  describe('Array fields', () => {
    it('should not find errors in array of objects', async () => {
      const validator = new Validator({
        value: [{ str: 'test' }, { str: 'test2' }, { str: 'test3' }]
      });

      validator.property('value[].str').isNotEmpty().isString();

      expect(await validator.hasErrors()).toBe(false);
      expect(await validator.getErrors()).toEqual([]);
    });

    it('should find error in array of objects', async () => {
      const validator = new Validator({
        value: [{ str: 'test' }, { str: '' }, { str: 'test3' }]
      });

      validator.property('value[].str').isNotEmpty().isString();

      expect(await validator.hasErrors()).toBe(true);
      expect(await validator.getErrors()).toEqual([
        { path: 'value[1].str', value: '', errorMessage: 'value[1].str should be not empty' }
      ]);
    });

    it('should find error in sub array of objects', async () => {
      const validator = new Validator({
        value: [
          { str: 'test', subArray: [{ num: 1 }] },
          { str: '', subArray: [{ num: '' }] }
        ]
      });

      validator.property('value[].subArray[].num').isInteger();

      expect(await validator.hasErrors()).toBe(true);
      expect(await validator.getErrors()).toEqual([
        {
          errorMessage: 'value[1].subArray[0].num should be an integer more than 0',
          path: 'value[1].subArray[0].num',
          value: ''
        }
      ]);
    });

    it('should not find error in array of numbers', async () => {
      const validator = new Validator({
        value: [1, 2, 3]
      });

      validator.property('value[]').isInteger();

      expect(await validator.hasErrors()).toBe(false);
      expect(await validator.getErrors()).toEqual([]);
    });

    it('should find error in array of numbers', async () => {
      const validator = new Validator({
        value: [1, 'test', 3]
      });

      validator.property('value[]').isInteger();

      expect(await validator.hasErrors()).toBe(true);
      expect(await validator.getErrors()).toEqual([
        {
          errorMessage: 'value[1] should be an integer more than 0',
          path: 'value[1]',
          value: 'test'
        }
      ]);
    });
  });
});
