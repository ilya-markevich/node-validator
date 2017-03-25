'use strict';

const fieldValidators = [
  require('./isInteger')
];

module.exports = (ValidationState) => {
  fieldValidators.forEach(ValidationState.applyFieldValidator);
};