import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isBoolean';
import testCases from '../data/fieldValidators/isBoolean';

generateTest({ validatorName: 'isBoolean', validator, testCases });
