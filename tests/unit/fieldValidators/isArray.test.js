import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isArray';
import testCases from '../data/fieldValidators/isArray';

generateTest({ validatorName: 'isArray', validator, testCases });
