import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isNotEmpty';
import testCases from '../data/fieldValidators/isNotEmpty';

generateTest({ validatorName: 'isNotEmpty', validator, testCases });
