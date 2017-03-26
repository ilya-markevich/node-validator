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

module.exports = {
  generateExecuteData,
  generateErrorMessageData
};