import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isInteger' });

export default [
  generateTest({ valueToTest: 1 }),
  generateTest({ valueToTest: '1' }),
  generateTest({ valueToTest: 'test', errorMessage: 'should be an integer more than 0' }),
  generateTest({ valueToTest: 2, opts: { min: 1, max: 3 } })
];
