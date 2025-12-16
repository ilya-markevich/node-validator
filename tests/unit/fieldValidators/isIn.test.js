import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isIn';
import testCases from '../data/fieldValidators/isIn';

generateTest({ validatorName: 'isIn', validator, testCases });
