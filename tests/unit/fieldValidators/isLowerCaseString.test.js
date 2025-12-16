import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isLowerCaseString';
import testCases from '../data/fieldValidators/isLowerCaseString';

generateTest({ validatorName: 'isLowerCaseString', validator, testCases });
