"use strict";

const generateExecuteData = (isCorrect, value, opts) => ({
  isCorrect,
  value,
  opts,
});

const generateErrorMessageData = (errorMessage, opts) => ({
  opts,
  errorMessage,
});

const generateIntegrationTestCase =
  (validatorName) => (value, opts, errorMessage) => ({
    obj: {
      test: value,
    },
    validatorName,
    opts,
    errors: errorMessage
      ? [{ path: "test", value, errorMessage: `test ${errorMessage}` }]
      : [],
  });

module.exports = {
  generateExecuteData,
  generateErrorMessageData,
  generateIntegrationTestCase,
};
