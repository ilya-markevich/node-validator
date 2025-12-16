import generateTest from './testsGenerator';
import testCases from '../data/isEmail';

generateTest({ validator: 'isEmail', testCases });
