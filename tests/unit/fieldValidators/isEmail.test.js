import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isEmail';
import testCases from '../data/fieldValidators/isEmail';

generateTest({ validatorName: 'isEmail', validator, testCases });
