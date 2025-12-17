import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isMatch';
import testCases from '../data/fieldValidators/isMatch';

generateTest({ validatorName: 'isMatch', validator, testCases });
