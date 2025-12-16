import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isJsonString';
import testCases from '../data/fieldValidators/isJsonString';

generateTest({ validatorName: 'isJsonString', validator, testCases });
