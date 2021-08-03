# Dee Validator

[![npm](https://img.shields.io/npm/v/dee-validator.svg?maxAge=1000)](https://www.npmjs.com/package/dee-validator)
[![npm](https://img.shields.io/npm/dt/dee-validator.svg?maxAge=1000)](https://www.npmjs.com/package/dee-validator)
[![Coverage Status](https://coveralls.io/repos/github/ilya-markevich/node-validator/badge.svg?branch=master)](https://coveralls.io/github/ilya-markevich/node-validator?branch=master)
[![dependency Status](https://img.shields.io/david/ilya-markevich/node-validator.svg?maxAge=1000)](https://david-dm.org/ilya-markevich/node-validator)
[![devDependency Status](https://img.shields.io/david/dev/ilya-markevich/node-validator.svg?maxAge=1000)](https://david-dm.org/ilya-markevich/node-validator?type=dev)
[![Build Status](https://img.shields.io/travis/ilya-markevich/node-validator.svg?maxAge=1000)](https://travis-ci.org/ilya-markevich/node-validator)
[![Known Vulnerabilities](https://snyk.io/test/github/ilya-markevich/node-validator/badge.svg)](https://snyk.io/test/github/ilya-markevich/node-validator)
[![node](https://img.shields.io/node/v/dee-validator.svg?maxAge=1000)](https://www.npmjs.com/package/dee-validator)

Validator for NodeJS.

# Table of contents
* [V1.x](#migrate-from-v1x)
* [Usage](#usage)
* [API](#api)
  - [Validator](#validator)
    + [`Validator.extend()`](#validatorextendcustomvalidators)
  - [Validator instance](#validator-instance)
    + [`validatorInstance.getValidationObject()`](#validatorinstancegetvalidationobject)
    + [`validatorInstance.property()`](#validatorinstancepropertypropertypath)
    + [`validatorInstance.hasErrors()`](#validatorinstancehaserrors)
    + [`validatorInstance.getErrors()`](#validatorinstancegeterrors)
  - [Validator state instance](#validator-state-instance)
    + [`validatorStateInstance.optional()`](#validatorstateinstanceoptional)
    + [`validatorStateInstance.withMessage()`](#validatorstateinstancewithmessageerrormessage)
+ [Error message format](#error-message-format)
* [Fields validators](#fields-validators)
* [What's in a name?](#whats-in-a-name)
* [Author](#author)

# Migrate from V1.x

The [v1.x version](https://github.com/ilya-markevich/node-validator/tree/v1.1.1) doesn't support async validators so all API is synchronous.
For migration to V2, await `getErrors` and `hasErrors` methods.

# Usage

To use the validator just create new validator instance with an object for validation as a parameter.
Use [property](#validatorinstancepropertypropertypath) method to choose a value and [state methods](#validator-state-instance) to validate the value.
   
Example of code:
``` Javascript
const Validator = require('dee-validator');
const validator = new Validator({
    field1: 'test',
    field2: 10,
    field3: true
});

validator.property('field1').isNotEmpty().isEqual('1');

validator.property('field2').isNotEmpty().isInteger({
    min: 1,
    max: 20
});

validator.property('field3').isNotEmpty().isString().withMessage('field3 should be a special string.');

await validator.hasErrors(); // true
await validator.getErrors();
// [
//    { path: 'field1', value: 'test', errorMessage: 'field1 should be equal 1' },
//    { path: 'field3', value: true, errorMessage: 'field3 should be a special string.' }
// ]
```

# API

## Validator

### `Validator.extend(customValidators)`
Register new custom validators.

Args:

* `customValidators [Object]`: object with custom field validators.

Example:
``` javascript
// here we create two custom validators.
// First validator: isTest. It checks if value equal to 'test' string. In case it's not, error message will be = 'should pass isTest validation'
// Second validator: isDivisibleBy. It accepts value and divisible number and check if value is divided by the number. In case it's not - custom error message will be created.
// If user doesn't pass any divisible number, 2 will be used as default.
{
  isTest: {
    execute: value => value === 'test'
  }
  isDivisibleBy: {
    execute: (value, divizor) => typeof value === 'number' && value % divizor === 0,
    getErrorMessage: (divizor) => return `should be divided by ${divizor}`,
    defaultOpts: 2
  }
}
```

## Validator instance

### `validatorInstance.getValidationObject()`
Get object for validation.

### `validatorInstance.property(propertyPath)`
Create new [validator state](#validator-state-instance) instance and return it for chaining.

Args:

* `propertyPath [String]`: path to property in validation object ([lodash.get](https://lodash.com/docs/4.17.4#get) is used to resolve a value)

### `validatorInstance.hasErrors()`
Return `Promise<true>` if validator has errors. In the other case return `Promise<false>`.

### `validatorInstance.getErrors()`
Return promise with all validation errors.

Example of an error:
``` javascript
{
    path: 'a',
    value: 'test',
    errorMessage: 'value should be a number'
}
```

## Validator state instance

### `validatorStateInstance.optional()`
Apply all checks only if a value is not `undefined` or `null`.

### `validatorStateInstance.withMessage(errorMessage)`
Set custom error message instead of default one.

See [other methods](#fields-validators) available on state instance.

# Error message format
The validator creates default error message for each property. It's quite readable (you can see how the message is created in each field validator implementation).
If you are not satisfied with default error message, you can use [withMessage](#validatorstateinstancewithmessageerrormessage) method to create a new one.

# Fields validators

- **isArray()** - check if a value is array.
- **isArrayLength(opts)** - check if an array value has correct length. `opts` is an object which defaults to `{ min: 0, max: undefined }`.
`min` and `max` options set acceptable range for the array length.
- **isBase64String()** - check if a string is in base64 format.
- **isBoolean(opts)** - check if a value is boolean. `opts` is an object which defaults to `{ convert: true }`.
If `convert = true` string values like 'true'/'false' are accepted as booleans.
- **isDate(opts)** - check if a value is date. `opts` is an object which defaults to `{ before: undefined, after: undefined }`.
`after` and `before` options set acceptable range for the date.
- **isEachIn(inArray)** - check if each item from value is in `inArray`.
- **isEmail()** - check if a string value is an email.
- **isEqual(equalTo)** - check if a value is equal to `equalTo`.
- **isFloat(opts)** - check if a value is a float. `opts` is an object which defaults to `{ min: 0, max: undefined, convert: true }`.
`min` and `max` options set acceptable range for the float value. If `convert = true` and value is a string the value will be converted to a float.
- **isIn(inArray)** - check if a value is in `inArray`.
- **isInteger(opts)** - check if a value is an integer. `opts` is an object which defaults to `{ min: 0, max: undefined, convert: true }`.
`min` and `max` options set acceptable range for the integer value. If `convert = true` and value is a string the value will be converted to an integer.
- **isIpString(opts)** - check if a string value is correct ip address. `opts` is an object which defaults to `{ v4: undefined, v6: undefined}`.
`v4` and `v6` are formats for checking. If both are undefined, the string value should be in ipv4 or ipv6 formats.
- **isJsonString()** - check if a value is json string(`JSON.parse` is used).
- **isLength(opts)** - check if a string value has correct length. `opts` is an object which defaults to `{ min: 0, max: undefined }`.
`min` and `max` options set acceptable range for the string length.
- **isLowerCaseString()** - check if all letters in a string are lowercase.
- **isMatch(regexp)** - check if a string value is matched to `regexp`.
- **isNotEmpty()** - check if a string is not empty.
- **isNumericString()** - check if a string contains only numbers.
- **isString()** - check if a value is a string.
- **isUpperCaseString()** - check if all letters in a string are uppercase.
- **isUrlString()** - check if a string value is a correct url.

# What's in a name?
Dee is one of my favorite detective characters - [Judge Dee](https://en.wikipedia.org/wiki/Judge_Dee).

# Author
Ilya Markevich - [@ilya_mark91](https://twitter.com/ilya_mark91)
