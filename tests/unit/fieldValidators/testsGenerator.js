'use strict';

function generateExecuteTests(validator, testCases) {
  testCases.forEach(({ isCorrect, value, opts }) => {
    const optsString = typeof opts === 'object' && !Array.isArray(opts) ? JSON.stringify(opts) : String(opts);

    it(`should return ${isCorrect.toString()} for '${value}' with opts = ${optsString}`, () => {
      validator.execute(value, opts).should.be.eql(isCorrect);
    });
  });
}

function generateErrorMessageTests(validator, testCases) {
  testCases.forEach(({ opts, errorMessage }) => {
    it(`should return correct error message for opts ${JSON.stringify(opts)}`, () => {
      validator.getErrorMessage(opts).should.be.eql(errorMessage);
    });
  });
}

module.exports = {
  generateExecuteTests,
  generateErrorMessageTests
};