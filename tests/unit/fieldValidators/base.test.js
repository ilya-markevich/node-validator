import BaseFieldValidator from '../../../src/fieldValidators/base';
import testData from '../data/fieldValidators/base';

describe('Base Field Validator', () => {
  describe('Initial state', () => {
    it('should get correct initial state', () => {
      const { name, defaultOpts } = testData;
      const validator = new BaseFieldValidator(name, defaultOpts);

      expect(validator).toEqual({ name, defaultOpts });
    });
  });

  describe('#check', () => {
    it('should check and return that value is incorrect', async () => {
      const {
        name,
        defaultOpts,
        value,
        opts,
        appliedDefaultOpts,
        errorMessage,
        expectedIncorrectCheckResult
      } = testData;

      const validator = new BaseFieldValidator(name, defaultOpts);

      validator.execute = jest.fn().mockReturnValue(false);
      validator.getErrorMessage = jest.fn().mockReturnValueOnce(errorMessage);

      expect(await validator.check(value, opts)).toEqual(expectedIncorrectCheckResult);
      expect(validator.execute).toHaveBeenCalledWith(value, appliedDefaultOpts);
    });

    it('should check and return that value is correct', async () => {
      const { name, defaultOpts, value, opts, appliedDefaultOpts, expectedCorrectCheckResult } =
        testData;
      const validator = new BaseFieldValidator(name, defaultOpts);

      validator.execute = jest.fn().mockReturnValue(true);
      validator.getErrorMessage = jest.fn();

      expect(await validator.check(value, opts)).toEqual(expectedCorrectCheckResult);
      expect(validator.execute).toHaveBeenCalledWith(value, appliedDefaultOpts);
      expect(validator.getErrorMessage).not.toHaveBeenCalled();
    });
  });
});
