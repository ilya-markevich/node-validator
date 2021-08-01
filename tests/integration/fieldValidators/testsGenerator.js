"use strict";

const Validator = require("../../../src/validator");

module.exports = (validator) => {
  const testCases = require(`../data/${validator}`);

  describe(`${validator} integration`, () => {
    testCases.forEach((testCase) => {
      const { obj, validatorName, opts, errors } = testCase;
      const optsString =
        typeof opts === "object" ? JSON.stringify(opts) : String(opts);

      it(`should ${
        errors.length === 0 ? "not " : ""
      }get errors for test with options = ${optsString}`, () => {
        const validatorObj = new Validator(obj);

        validatorObj.property("test")[validatorName](opts);

        validatorObj.hasErrors().should.be.eql(errors.length > 0);
        validatorObj.getErrors().should.be.eql(errors);
      });
    });
  });
};
