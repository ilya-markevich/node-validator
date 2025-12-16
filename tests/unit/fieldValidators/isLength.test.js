import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isLength';
import testCases from '../data/fieldValidators/isLength';

generateTest({ validatorName: 'isLength', validator, testCases });
