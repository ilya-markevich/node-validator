'use strict';

require('should');
const sinon = require('sinon');

const BaseFieldValidator = require('../../../src/fieldValidators/base');
const testData = require('../data/fieldValidators/base');

describe('Base Field Validator', () => {
  describe('Initial state', () => {
    it('should get correct initial state', () => {
      const { name, defaultOpts } = testData;
      const validator = new BaseFieldValidator(name, defaultOpts);

      validator.should.have.properties({
        name,
        defaultOpts
      });
    });
  });

  describe('#check', () => {
    it('should check and return that value is incorrect', sinon.test(() => {
      const {
        name, defaultOpts, value, opts, appliedDefaultOpts, errorMessage, expectedIncorrectCheckResult
      } = testData;
      const validator = new BaseFieldValidator(name, defaultOpts);

      validator.execute = sinon.stub().withArgs(value, appliedDefaultOpts).returns(false);
      validator.getErrorMessage = sinon.mock().once().returns(errorMessage);

      validator.check(value, opts).should.have.properties(expectedIncorrectCheckResult);
      validator.getErrorMessage.verify();
    }));

    it('should check and return that value is correct', sinon.test(() => {
      const {
        name, defaultOpts, value, opts, appliedDefaultOpts, expectedCorrectCheckResult
      } = testData;
      const validator = new BaseFieldValidator(name, defaultOpts);

      validator.execute = sinon.stub().withArgs(value, appliedDefaultOpts).returns(true);
      validator.getErrorMessage = sinon.mock().never();

      validator.check(value, opts).should.have.properties(expectedCorrectCheckResult);
      validator.getErrorMessage.verify();
    }));
  });
});