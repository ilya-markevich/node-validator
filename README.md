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
* [Usage](#usage)
* [API](#api)
  - [Validator](#validator)
    + [`Validator.extend()`](#validatorextend)
  - [Validator instance](#validator-instance)
    + [`validatorInstance.getValidationObject()`](#validatorInstancegetValidationObject)
    + [`validatorInstance.property()`](#validatorInstanceproperty-propertyPath)
    + [`validatorInstance.hasErrors()`](#validatorInstancehasErrors)
    + [`validatorInstance.getErrors()`](#validatorInstancegetErrors)
  - [Validator state instance](#validator-state-instance)
    + [`validatorStateInstance.optional()`](#validatorStateInstanceoptional)
    + [`validatorStateInstance.withMessage()`](#validatorStateInstancewithMessage-errorMessage)
+ [Error message format](#error-message-format)
* [Fields validators](#field-validators)
* [What's in a name?](#whats-in-a-name)
* [Author](#author)

# Usage

# API

## Validator

### `Validator.extend(customValidators)`
Register new custom validators.

Args:

* `customValidators [Object]`:

## Validator instance

### `validatorInstance.getValidationObject()`
Get object for validation.

### `validatorInstance.property(propertyPath)`
Create new [validator state](#validator-state-instance) instance and return it for chaining.

Args:

* `propertyPath [String]`: path to property in validation object ([lodash.get](https://lodash.com/docs/4.17.4#get) is used to resolve a value)

### `validatorInstance.hasErrors()`
Return if validator has any errors.

### `validatorInstance.getErrors()`
Return all validation errors.

Errors format:


## Validator state instance

### `validatorStateInstance.optional()`
Apply all checks only if a value is not `undefined` or `null`

### `validatorStateInstance.withMessage(errorMessage)`
Set custom error message instead of default one.

# Error message format
The validator create default error message. It's quite readable (you can see how the message is created in tests.).
If you are not satisfied with default error message, you can use [custom](#validatorStateInstancewithMessage-errorMessage) method to create a new one.

# Fields validators
**isArray()** - check if a value is array.
**isArrayLength(opts)** - check if an array has correct length. `opts` is an object which defaults to `{ min: 0, max: undefined }`.
`min` and `max` options set acceptable range for the array length.
**isBase64String()** - check if a string is in base64 format.
**isBoolean(opts)** - check if a value is boolean. `opts` is an object which defaults to `{ convert: true }`.
If `convert = true` string value like 'true'/'false' are accepted as booleans.
**isDate(opts)** - check if a value is date. `opts` is an object which defaults to `{ before: undefined, after: undefined }`.
`after` and `before` options set acceptable range for the date.
**isEachIn(inArray)** - check if each item from value is in `inArray`.
**isEmail()** - check if a string value is an email.
**isEqual(equalTo)** - check if a value is equal to `equalTo`.
**isFloat(opts)** - check if a value is a float. `opts` is an object which defaults to `{ min: 0, max: undefined, convert: true }`.
`min` and `max` options set acceptable range for the float value. If `convert = true`, in case if value is a string it will be converted to a float.
**isIn(inArray)** - check if a value is in `inArray`.
**isInteger(opts)** - check if a value is an integer. `opts` is an object which defaults to `{ min: 0, max: undefined, convert: true }`.
`min` and `max` options set acceptable range for the integer value. If `convert = true`, in case if value is a string it will be converted to an integer.
**isIpString(opts)** - check if a string value is correct ip address. `opts` is an object which defaults to `{ v4: undefined, v6: undefined}`.
`v4` and `v6` are formats for checking. If both are undefined, the string value should be in ipv4 or ipv6 formats.
**isJsonString()** - check if a value is json string(`JSON.parse` is used).
**isLength(opts)** - check if a string value has correct length. `opts` is an object which defaults to `{ min: 0, max: undefined }`.
`min` and `max` options set acceptable range for the string length.
**isLowerCaseString()** - check if all letters in a string are lowercase.
**isMatch(regexp)** - check if a string value is matched to `regexp`.
**isNotEmpty()** - check if a string is not empty.
**isNumericString()** - check if a string contains only numbers.
**isString()** - check if a value is a string.
**isUpperCaseString()** - check if all letters in a string are uppercase.
**isUrlString()** - check if a string value is a correct url.

# What's in a name?
Dee is one of my favorite detective characters - [Judge Dee](https://en.wikipedia.org/wiki/Judge_Dee).

# Author
Ilya Markevich - [@ilya_mark91](https://twitter.com/ilya_mark91)
