import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isEachIn';
import testCases from '../data/fieldValidators/isEachIn';

generateTest({ validatorName: 'isEachIn', validator, testCases });
