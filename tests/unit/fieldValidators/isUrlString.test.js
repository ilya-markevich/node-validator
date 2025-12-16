import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isUrlString';
import testCases from '../data/fieldValidators/isUrlString';

generateTest({ validatorName: 'isUrlString', validator, testCases });
