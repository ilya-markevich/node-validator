export const generateExecuteData = ({ isCorrect, value, opts }) => ({ isCorrect, value, opts });

export const generateErrorMessageData = ({ errorMessage, opts }) => ({ opts, errorMessage });

export const generateIntegrationTestCase =
  ({ validatorName }) =>
  ({ valueToTest, opts, errorMessage }) => ({
    obj: { test: valueToTest },
    validatorName,
    opts,
    errors: errorMessage
      ? [{ path: 'test', value: valueToTest, errorMessage: `test ${errorMessage}` }]
      : []
  });
