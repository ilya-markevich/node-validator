import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isInteger';
import testCases from '../data/fieldValidators/isInteger';

generateTest({ validatorName: 'isInteger', validator, testCases });
