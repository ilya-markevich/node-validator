'use strict';

require('should');
const sinon = require('sinon');

const Validator = require('../../src/validator');
const testData = require('./data/validator');

describe('Validator', () => {
  describe('Initial state', () => {
    it('should set initial state', () => {
      const { objectToValidate, initialState } = testData;
      const validator = new Validator(objectToValidate);

      validator.should.have.properties(initialState);
    });
  });

  describe('#property', () => {
    it('should create state for property', () => {
      const { objectToValidate, path, mockStateReturn } = testData;
      const validator = new Validator(objectToValidate);

      validator.StateConstructor = sinon.mock().withArgs(path, objectToValidate[path]).returns(mockStateReturn);

      validator.property(path).should.be.eql(mockStateReturn);
      validator.StateConstructor.verify();
    });
  });

  describe('#extend', () => {
    it('should not extend validator because field validator has no execute method', () => {
      const { objectToValidate, incorrectApplyValidator } = testData;
      const validator = new Validator(objectToValidate);

      try {
        validator.extend(incorrectApplyValidator);
        throw new Error('Extend validator with incorrect field validator implementation.');
      } catch (err) {
        err.should.have.property('message', '"execute" property should be function.');
      }
    });

    it('should not extend validator because field validator getErrorMessage specified and it\'s not a function', () => {
      const { objectToValidate, incorrectGetErrorMessageValidator } = testData;
      const validator = new Validator(objectToValidate);

      try {
        validator.extend(incorrectGetErrorMessageValidator);
        throw new Error('Extend validator with incorrect field validator implementation.');
      } catch (err) {
        err.should.have.property('message', '"getErrorMessage" property should be function.');
      }
    });

    it('should extend validator without custom getErrorMessage implementation', () => {
      const { objectToValidate, customValidatorName } = testData;
      const validatorWithoutCustomErrorMethod = {
        [customValidatorName]: {
          execute: value => value
        }
      };

      const validator = new Validator(objectToValidate);

      validator.extend(validatorWithoutCustomErrorMethod);

      validator.StateConstructor.prototype.should.have.property(customValidatorName);
      (typeof validator.StateConstructor.prototype.isTest === 'function').should.be.eql(true);
    });
  });

  describe('#hasErrors', () => {
    it('should return that validator has errors', () => {
      const { objectToValidate, stateWithError } = testData;
      const validator = new Validator(objectToValidate);

      validator.states.push(stateWithError);

      validator.hasErrors().should.be.eql(true);
    });

    it('should return that validator has no errors', () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator.states.push(stateWithoutError);

      validator.hasErrors().should.be.eql(false);
    });
  });

  describe('#getErrors', () => {
    it('should return errors', () => {
      const { objectToValidate, stateWithError, validatorErrors } = testData;
      const validator = new Validator(objectToValidate);

      validator.states.push(stateWithError);

      validator.getErrors().should.be.eql(validatorErrors);
    });

    it('should not return errors', () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator.states.push(stateWithoutError);

      validator.getErrors().should.have.length(0);
    });
  });
});