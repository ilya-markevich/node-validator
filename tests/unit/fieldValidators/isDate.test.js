import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isDate';
import testCases from '../data/fieldValidators/isDate';

generateTest({ validatorName: 'isDate', validator, testCases });
