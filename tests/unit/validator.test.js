import Validator from '../../src/validator';
import testData from './data/validator';

describe('Validator', () => {
  describe('Initial state', () => {
    it('should set initial state', () => {
      const { objectToValidate, initialState } = testData;
      const validator = new Validator(objectToValidate);

      expect(validator).toEqual(initialState);
    });
  });

  describe('#getValidationObject', () => {
    it('should get validation object', () => {
      const { objectToValidate } = testData;
      const validator = new Validator(objectToValidate);

      expect(validator.getValidationObject()).toEqual(objectToValidate);
    });
  });

  describe('#property', () => {
    it('should create state for property', () => {
      const { objectToValidate, path, mockStateReturn } = testData;
      const validator = new Validator(objectToValidate);

      validator.StateConstructor = jest.fn().mockReturnValue(mockStateReturn);

      expect(validator.property(path)).toEqual(mockStateReturn);
      expect(validator.StateConstructor).toHaveBeenCalledWith(path, objectToValidate);
    });
  });

  describe('#hasErrors', () => {
    it('should return that validator has errors', async () => {
      const { objectToValidate, stateWithError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithError);

      expect(await validator.hasErrors()).toBe(true);
    });

    it('should return that validator has no errors', async () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithoutError);

      expect(await validator.hasErrors()).toBe(false);
    });
  });

  describe('#getErrors', () => {
    it('should return errors', async () => {
      const { objectToValidate, stateWithError, validatorErrors } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithError);

      expect(await validator.getErrors()).toEqual(validatorErrors);
    });

    it('should not return errors', async () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithoutError);

      expect(await validator.getErrors()).toHaveLength(0);
    });
  });
});
