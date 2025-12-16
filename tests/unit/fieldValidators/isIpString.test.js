import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isIpString';
import testCases from '../data/fieldValidators/isIpString';

generateTest({ validatorName: 'isIpString', validator, testCases });
