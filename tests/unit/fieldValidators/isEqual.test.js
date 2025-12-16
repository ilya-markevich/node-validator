import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isEqual';
import testCases from '../data/fieldValidators/isEqual';

generateTest({ validatorName: 'isEqual', validator, testCases });
