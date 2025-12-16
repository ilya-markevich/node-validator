import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isFloat';
import testCases from '../data/fieldValidators/isFloat';

generateTest({ validatorName: 'isFloat', validator, testCases });
