"use strict";

require("should");
const sinon = require("sinon");

const Validator = require("../../src/validator");
const testData = require("./data/validator");

describe("Validator", () => {
  describe("Initial state", () => {
    it("should set initial state", () => {
      const { objectToValidate, initialState } = testData;
      const validator = new Validator(objectToValidate);

      validator.should.have.properties(initialState);
    });
  });

  describe("#getValidationObject", () => {
    it("should get validation object", () => {
      const { objectToValidate } = testData;
      const validator = new Validator(objectToValidate);

      validator.getValidationObject().should.be.eql(objectToValidate);
    });
  });

  describe("#property", () => {
    it("should create state for property", () => {
      const { objectToValidate, path, mockStateReturn } = testData;
      const validator = new Validator(objectToValidate);

      validator.StateConstructor = sinon
        .mock()
        .withArgs(path, objectToValidate)
        .returns(mockStateReturn);

      validator.property(path).should.be.eql(mockStateReturn);
      validator.StateConstructor.verify();
    });
  });

  describe("#hasErrors", () => {
    it("should return that validator has errors", async () => {
      const { objectToValidate, stateWithError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithError);

      (await validator.hasErrors()).should.be.eql(true);
    });

    it("should return that validator has no errors", async () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithoutError);

      (await validator.hasErrors()).should.be.eql(false);
    });
  });

  describe("#getErrors", () => {
    it("should return errors", async () => {
      const { objectToValidate, stateWithError, validatorErrors } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithError);

      (await validator.getErrors()).should.be.eql(validatorErrors);
    });

    it("should not return errors", async () => {
      const { objectToValidate, stateWithoutError } = testData;
      const validator = new Validator(objectToValidate);

      validator._states.push(stateWithoutError);

      (await validator.getErrors()).should.have.length(0);
    });
  });
});
