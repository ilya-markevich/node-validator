"use strict";

require("should");

const sinon = require("sinon");
const ValidatorState = require("../../src/state");

const testData = require("./data/state");

describe("Validator state", () => {
  describe("Initial state", () => {
    it("should check initial state", () => {
      const { path, obj, initialState } = testData;
      const state = new ValidatorState(path, obj);

      state.should.have.properties(initialState);
    });
  });

  describe("#optional", () => {
    it("should apply optional option", () => {
      const { path, obj, stateAfterOptional } = testData;
      const state = new ValidatorState(path, obj);

      state.optional();
      state.should.have.properties(stateAfterOptional);
    });
  });

  describe("#withMessage", () => {
    it("should apply custom message", () => {
      const { path, obj, customMessage, stateAfterCustomMessage } = testData;
      const state = new ValidatorState(path, obj);

      state.withMessage(customMessage);
      state.should.have.properties(stateAfterCustomMessage);
    });
  });

  describe("#getInfo", () => {
    it("should get validator state info without errors", () => {
      const { path, obj, expectedInfoWithoutErrors } = testData;
      const state = new ValidatorState(path, obj);
      const info = state.getInfo();

      info.should.have.properties(expectedInfoWithoutErrors);
    });

    it("should get validator state with errors", () => {
      const { path, obj, checkInfoWithError, expectedInfoWithErrors } =
        testData;
      const state = new ValidatorState(path, obj);

      state.checks.push(checkInfoWithError);

      const info = state.getInfo();

      info.should.have.properties(expectedInfoWithErrors);
    });

    it("should get validator state with error and custom error message", () => {
      const {
        path,
        obj,
        checkInfoWithError,
        customMessage,
        expectedInfoWithErrorsAndCustomMessage,
      } = testData;
      const state = new ValidatorState(path, obj);

      state.checks.push(checkInfoWithError);
      state.withMessage(customMessage);

      const info = state.getInfo();

      info.should.have.properties(expectedInfoWithErrorsAndCustomMessage);
    });
  });

  describe("Static methods", () => {
    describe("#applyFieldValidator", () => {
      // eslint-disable-next-line max-nested-callbacks
      it("should apply field validator", () => {
        const {
          path,
          obj,
          newValidatorName,
          newValidatorOpts,
          newValidatorResult,
        } = testData;
        const state = new ValidatorState(path, obj);
        const validator = {
          name: newValidatorName,
          check: sinon
            .mock()
            .withArgs(obj.test, newValidatorOpts)
            .returns(newValidatorResult),
        };

        ValidatorState.applyFieldValidator(validator);
        state[validator.name](newValidatorOpts);

        state.checks.should.have.length(1);
        state.checks[0].should.be.eql(newValidatorResult);
        validator.check.verify();
      });

      // eslint-disable-next-line max-nested-callbacks
      it("should apply field validator with optional setting", () => {
        const { path, objWithEmptyValue, newValidatorName, newValidatorOpts } =
          testData;
        const state = new ValidatorState(path, objWithEmptyValue);
        const validator = {
          name: newValidatorName,
          check: sinon.mock().never(),
        };

        state.optional();
        ValidatorState.applyFieldValidator(validator);
        state[validator.name](newValidatorOpts);

        state.checks.should.have.length(0);
        validator.check.verify();
      });
    });
  });
});
