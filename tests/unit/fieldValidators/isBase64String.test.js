import generateTest from './testsGenerator';
import validator from '../../../src/fieldValidators/isBase64String';
import testCases from '../data/fieldValidators/isBase64String';

generateTest({ validatorName: 'isBase64String', validator, testCases });
