import Validator from '../index';

const isArray = (validator: Validator) => {
  validator.property('prop1').isArray().withMessage('test');
};

const isArrayLength = (validator: Validator) => {
  validator.property('prop1').isArrayLength().withMessage('test');

  validator
    .property('prop2')
    .isArrayLength({
      min: 1
    })
    .withMessage('test');

  validator
    .property('prop3')
    .isArrayLength({
      min: 1,
      max: 2
    })
    .withMessage('test');

  validator
    .property('prop4')
    .isArrayLength({
      max: 2
    })
    .withMessage('test');
};

const isBase64String = (validator: Validator) => {
  validator.property('prop1').isBase64String().optional();
};

const isBoolean = (validator: Validator) => {
  validator.property('prop1').isBoolean().optional();

  validator
    .property('prop2')
    .isBoolean({
      convert: true
    })
    .optional();
};

const isDate = (validator: Validator) => {
  validator.property('prop1').isDate().optional();

  validator
    .property('prop2')
    .isDate({
      before: new Date()
    })
    .optional();

  validator
    .property('prop3')
    .isDate({
      after: new Date()
    })
    .optional();

  validator
    .property('prop4')
    .isDate({
      before: new Date(),
      after: new Date()
    })
    .optional();
};

const isEachIn = (validator: Validator) => {
  validator.property('prop1').isEachIn(['test']).optional();
};

const isEmail = (validator: Validator) => {
  validator.property('prop1').isEmail().optional();
};

const isEqual = (validator: Validator) => {
  validator.property('prop1').isEqual('test').optional();

  validator.property('prop2').isEqual(null).optional();

  validator.property('prop3').isEqual(0).optional();

  validator.property('prop4').isEqual(undefined).optional();
};

const isFloat = (validator: Validator) => {
  validator.property('prop1').isFloat().optional();

  validator
    .property('prop2')
    .isFloat({
      convert: true
    })
    .optional();

  validator
    .property('prop3')
    .isFloat({
      min: 0
    })
    .optional();

  validator
    .property('prop4')
    .isFloat({
      max: 0
    })
    .optional();

  validator
    .property('prop5')
    .isFloat({
      min: 0,
      max: 0,
      convert: true
    })
    .optional();
};

const isIn = (validator: Validator) => {
  validator.property('prop1').isIn(['test']).optional();
};

const isInteger = (validator: Validator) => {
  validator.property('prop1').isInteger().optional();

  validator
    .property('prop2')
    .isInteger({
      convert: true
    })
    .optional();

  validator
    .property('prop3')
    .isInteger({
      min: 0
    })
    .optional();

  validator
    .property('prop4')
    .isInteger({
      max: 0
    })
    .optional();

  validator
    .property('prop5')
    .isInteger({
      min: 0,
      max: 1,
      convert: true
    })
    .optional();
};

const isIpString = (validator: Validator) => {
  validator.property('prop1').isIpString().optional();

  validator
    .property('prop2')
    .isIpString({
      v4: true
    })
    .optional();

  validator
    .property('prop3')
    .isIpString({
      v6: true
    })
    .optional();

  validator
    .property('prop4')
    .isIpString({
      v4: true,
      v6: true
    })
    .optional();
};

const isJsonString = (validator: Validator) => {
  validator.property('prop1').isJsonString().optional();
};

const isLength = (validator: Validator) => {
  validator.property('prop1').isLength().optional();

  validator
    .property('prop2')
    .isLength({
      min: 0
    })
    .optional();

  validator
    .property('prop3')
    .isLength({
      max: 0
    })
    .optional();

  validator
    .property('prop4')
    .isLength({
      min: 0,
      max: 1
    })
    .optional();
};

const isLowerCaseString = (validator: Validator) => {
  validator.property('prop1').isLowerCaseString().optional();
};

const isMatch = (validator: Validator) => {
  validator.property('prop1').isMatch(/test/u).optional();

  validator.property('prop2').isMatch(/test/gu).optional();
};

const isNotEmpty = (validator: Validator) => {
  validator.property('prop1').isNotEmpty().optional();
};

const isNumericString = (validator: Validator) => {
  validator.property('prop1').isNumericString().optional();
};

const isString = (validator: Validator) => {
  validator.property('prop1').isString().optional();
};

const isUpperCaseString = (validator: Validator) => {
  validator.property('prop1').isUpperCaseString().optional();
};

const isUrlString = (validator: Validator) => {
  validator.property('prop2').isUrlString().optional();
};

const validator: Validator = new Validator({ test: 1 });

isArray(validator);
isArrayLength(validator);
isBase64String(validator);
isBoolean(validator);
isDate(validator);
isEachIn(validator);
isEmail(validator);
isEqual(validator);
isFloat(validator);
isIn(validator);
isInteger(validator);
isIpString(validator);
isJsonString(validator);
isLength(validator);
isLowerCaseString(validator);
isMatch(validator);
isNotEmpty(validator);
isNumericString(validator);
isString(validator);
isUpperCaseString(validator);
isUrlString(validator);
