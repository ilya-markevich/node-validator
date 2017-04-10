'use strict';

const Validator = require('../../../src/validator');

module.exports = (validatorName) => {
  const testCases = require(`../data/${validatorName}`);

  describe(`${validatorName} integration`, () => {
    testCases.forEach((testCase) => {
      const { obj, validatorName, opts, errors } = testCase;
      const optsString = typeof opts === 'object' ? JSON.stringify(opts) : String(opts);

      it(`should ${errors.length === 0 ? 'not ' : ''}get errors for test with options = ${optsString}`, () => {
        const validator = new Validator(obj);

        validator.property('test')[validatorName](opts);

        validator.hasErrors().should.be.eql(errors.length > 0);
        validator.getErrors().should.be.eql(errors);
      });
    });
  });
};