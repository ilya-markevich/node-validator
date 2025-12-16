import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isUpperCaseString';
import testCases from '../data/fieldValidators/isUpperCaseString';

generateTest({ validatorName: 'isUpperCaseString', validator, testCases });
