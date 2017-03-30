'use strict';

function generateExecuteData(isCorrect, value, opts) {
  return {
    isCorrect,
    value,
    opts
  };
}

function generateErrorMessageData(errorMessage, opts) {
  return {
    opts,
    errorMessage
  };
}

function generateIntegrationTestCase(validatorName, value, opts, errorMessage) {
  return {
    obj: {
      test: value
    },
    validatorName,
    opts,
    errors: errorMessage ? [
      {
        path: 'test',
        value,
        errorMessage: `test ${errorMessage}`
      }
    ] : []
  };
}

module.exports = {
  generateExecuteData,
  generateErrorMessageData,
  generateIntegrationTestCase
};