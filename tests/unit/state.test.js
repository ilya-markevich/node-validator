import ValidatorState from '../../src/state';
import testData from './data/state';

describe('Validator state', () => {
  describe('Initial state', () => {
    it('should check initial state', () => {
      const { path, obj, initialState } = testData;
      const state = new ValidatorState(path, obj);

      expect(state).toEqual(initialState);
    });
  });

  describe('#optional', () => {
    it('should apply optional option', () => {
      const { path, obj, stateAfterOptional } = testData;
      const state = new ValidatorState(path, obj);

      state.optional();
      expect(state).toEqual(stateAfterOptional);
    });
  });

  describe('#withMessage', () => {
    it('should apply custom message', () => {
      const { path, obj, customMessage, stateAfterCustomMessage } = testData;
      const state = new ValidatorState(path, obj);

      state.withMessage(customMessage);
      expect(state).toEqual(stateAfterCustomMessage);
    });
  });

  describe('#getInfo', () => {
    it('should get validator state info without errors', async () => {
      const { path, obj, expectedInfoWithoutErrors } = testData;
      const state = new ValidatorState(path, obj);
      const info = await state.getInfo();

      expect(info).toEqual(expectedInfoWithoutErrors);
    });

    it('should get validator state with errors', async () => {
      const { path, obj, checkInfoWithError, expectedInfoWithErrors } = testData;
      const state = new ValidatorState(path, obj);

      state.checks.push(() => checkInfoWithError);

      const info = await state.getInfo();

      expect(info).toEqual(expectedInfoWithErrors);
    });

    it('should get validator state with error and custom error message', async () => {
      const {
        path,
        obj,
        checkInfoWithError,
        customMessage,
        expectedInfoWithErrorsAndCustomMessage
      } = testData;
      const state = new ValidatorState(path, obj);

      state.checks.push(() => checkInfoWithError);
      state.withMessage(customMessage);

      const info = await state.getInfo();

      expect(info).toEqual(expectedInfoWithErrorsAndCustomMessage);
    });
  });

  describe('Static methods', () => {
    describe('#applyFieldValidator', () => {
      it('should apply field validator', () => {
        const { path, obj, newValidatorName, newValidatorOpts, newValidatorResult } = testData;
        const state = new ValidatorState(path, obj);
        const validator = {
          name: newValidatorName,
          check: jest.fn().mockReturnValue(newValidatorResult)
        };

        ValidatorState.applyFieldValidator(validator);
        state[validator.name](newValidatorOpts);

        expect(state.checks).toHaveLength(1);
        state.checks[0]();

        expect(validator.check).toHaveBeenCalledWith(obj.test, newValidatorOpts);
      });

      it('should apply field validator with optional setting', () => {
        const { path, objWithEmptyValue, newValidatorName, newValidatorOpts } = testData;
        const state = new ValidatorState(path, objWithEmptyValue);
        const validator = {
          name: newValidatorName,
          check: jest.fn()
        };

        state.optional();
        ValidatorState.applyFieldValidator(validator);
        state[validator.name](newValidatorOpts);

        expect(state.checks).toHaveLength(0);
        expect(validator.check).not.toHaveBeenCalled();
      });
    });
  });
});
