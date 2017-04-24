import Validator = require('../index');

function isArray(validator: Validator): void {
  validator.property('prop1').isArray().withMessage('test');
}

function isArrayLength(validator: Validator): void {
  validator.property('prop1').isArrayLength().withMessage('test');

  validator.property('prop2').isArrayLength({
    min: 1
  }).withMessage('test');

  validator.property('prop3').isArrayLength({
    min: 1,
    max: 2
  }).withMessage('test');

  validator.property('prop4').isArrayLength({
    max: 2
  }).withMessage('test');
}

function isBase64String(validator: Validator): void {
  validator.property('prop1').isBase64String().optional();
}

function isBoolean(validator: Validator): void {
  validator.property('prop1').isBoolean().optional();

  validator.property('prop2').isBoolean({
    convert: true
  }).optional();
}

function isDate(validator: Validator): void {
  validator.property('prop1').isDate().optional();

  validator.property('prop2').isDate({
    before: new Date()
  }).optional();

  validator.property('prop3').isDate({
    after: new Date()
  }).optional();

  validator.property('prop4').isDate({
    before: new Date(),
    after: new Date()
  }).optional();
}

function isEachIn(validator: Validator): void {
  validator.property('prop1').isEachIn(['test']).optional();
}

function isEmail(validator: Validator): void {
  validator.property('prop1').isEmail().optional();
}

function isEqual(validator: Validator): void {
  validator.property('prop1').isEqual('test').optional();

  validator.property('prop2').isEqual(null).optional();

  validator.property('prop3').isEqual(0).optional();

  validator.property('prop4').isEqual(undefined).optional();
}

function isFloat(validator: Validator): void {
  validator.property('prop1').isFloat().optional();

  validator.property('prop2').isFloat({
    convert: true
  }).optional();

  validator.property('prop3').isFloat({
    min: 0
  }).optional();

  validator.property('prop4').isFloat({
    max: 0
  }).optional();

  validator.property('prop5').isFloat({
    min: 0,
    max: 0,
    convert: true
  }).optional();
}

function isIn(validator: Validator): void {
  validator.property('prop1').isIn(['test']).optional();
}

function isInteger(validator: Validator): void {
  validator.property('prop1').isInteger().optional();

  validator.property('prop2').isInteger({
    convert: true
  }).optional();

  validator.property('prop3').isInteger({
    min: 0
  }).optional();

  validator.property('prop4').isInteger({
    max: 0
  }).optional();

  validator.property('prop5').isInteger({
    min: 0,
    max: 1,
    convert: true
  }).optional();
}

function isIpString(validator: Validator): void {
  validator.property('prop1').isIpString().optional();

  validator.property('prop2').isIpString({
    v4: true
  }).optional();

  validator.property('prop3').isIpString({
    v6: true
  }).optional();

  validator.property('prop4').isIpString({
    v4: true,
    v6: true
  }).optional();
}

function isJsonString(validator: Validator): void {
  validator.property('prop1').isJsonString().optional();
}

function isLength(validator: Validator): void {
  validator.property('prop1').isLength().optional();

  validator.property('prop2').isLength({
    min: 0
  }).optional();

  validator.property('prop3').isLength({
    max: 0
  }).optional();

  validator.property('prop4').isLength({
    min: 0,
    max: 1
  }).optional();
}

function isLowerCaseString(validator: Validator): void {
  validator.property('prop1').isLowerCaseString().optional();
}

function isMatch(validator: Validator): void {
  validator.property('prop1').isMatch(/test/).optional();

  validator.property('prop2').isMatch(new RegExp('test')).optional();
}

function isNotEmpty(validator: Validator): void {
  validator.property('prop1').isNotEmpty().optional();
}

function isNumericString(validator: Validator): void {
  validator.property('prop1').isNumericString().optional();
}

function isString(validator: Validator): void {
  validator.property('prop1').isString().optional();
}

function isUpperCaseString(validator: Validator): void {
  validator.property('prop1').isUpperCaseString().optional();
}

function isUrlString(validator: Validator): void {
  validator.property('prop2').isUrlString().optional();
}

const validator: Validator = new Validator({
  test: 1
});

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



