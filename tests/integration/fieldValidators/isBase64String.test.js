import generateTest from './testsGenerator';
import testCases from '../data/isBase64String';

generateTest({ validator: 'isBase64String', testCases });
