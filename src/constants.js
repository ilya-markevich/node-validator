import isArray from './fieldValidators/isArray';
import isArrayLength from './fieldValidators/isArrayLength';
import isBase64String from './fieldValidators/isBase64String';
import isBoolean from './fieldValidators/isBoolean';
import isDate from './fieldValidators/isDate';
import isEachIn from './fieldValidators/isEachIn';
import isEmail from './fieldValidators/isEmail';
import isEqual from './fieldValidators/isEqual';
import isFloat from './fieldValidators/isFloat';
import isIn from './fieldValidators/isIn';
import isInteger from './fieldValidators/isInteger';
import isIpString from './fieldValidators/isIpString';
import isJsonString from './fieldValidators/isJsonString';
import isLength from './fieldValidators/isLength';
import isLowerCaseString from './fieldValidators/isLowerCaseString';
import isMatch from './fieldValidators/isMatch';
import isNotEmpty from './fieldValidators/isNotEmpty';
import isNumericString from './fieldValidators/isNumericString';
import isString from './fieldValidators/isString';
import isUpperCaseString from './fieldValidators/isUpperCaseString';
import isUrlString from './fieldValidators/isUrlString';

export const ARRAY_SELECTOR = '[]';

export const DEFAULT_VALIDATORS = [
  isArray,
  isArrayLength,
  isBase64String,
  isBoolean,
  isDate,
  isEachIn,
  isEmail,
  isEqual,
  isFloat,
  isIn,
  isInteger,
  isIpString,
  isJsonString,
  isLength,
  isLowerCaseString,
  isMatch,
  isNotEmpty,
  isNumericString,
  isString,
  isUpperCaseString,
  isUrlString
];
