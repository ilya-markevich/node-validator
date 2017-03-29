'use strict';

const fieldValidators = [
  require('./isInteger'),
  require('./isNotEmpty'),
  require('./isEqual'),
  require('./isIn'),
  require('./isEachIn'),
  require('./isLength'),
  require('./isMatch'),
  require('./isArrayLength'),
  require('./isDate'),
  require('./isBoolean'),
  require('./isFloat'),
  require('./isArray'),
  require('./isEmail')
];

module.exports = (ValidationState) => {
  fieldValidators.forEach(ValidationState.applyFieldValidator);
};