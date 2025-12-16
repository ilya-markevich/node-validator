export default ({ validatorName, validator, testCases }) => {
  const { executeTestCases, errorMessageTestCases } = testCases;

  describe(validatorName, () => {
    executeTestCases.forEach(({ isCorrect, value, opts }) => {
      const optsString =
        typeof opts === 'object' && !Array.isArray(opts) ? JSON.stringify(opts) : String(opts);

      it(`should return ${isCorrect.toString()} for '${value}' with opts = ${optsString}`, () => {
        expect(validator.execute(value, opts)).toBe(isCorrect);
      });
    });

    errorMessageTestCases.forEach(({ opts, errorMessage }) => {
      it(`should return correct error message for opts ${JSON.stringify(opts)}`, () => {
        expect(validator.getErrorMessage(opts)).toBe(errorMessage);
      });
    });
  });
};
