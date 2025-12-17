import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isArrayLength';
import testCases from '../data/fieldValidators/isArrayLength';

generateTest({ validatorName: 'isArrayLength', validator, testCases });
