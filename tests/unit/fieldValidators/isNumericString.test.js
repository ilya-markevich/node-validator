import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isNumericString';
import testCases from '../data/fieldValidators/isNumericString';

generateTest({ validatorName: 'isNumericString', validator, testCases });
