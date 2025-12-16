import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isString';
import testCases from '../data/fieldValidators/isString';

generateTest({ validatorName: 'isString', validator, testCases });
