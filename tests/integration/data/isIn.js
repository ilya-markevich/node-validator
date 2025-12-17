import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isIn' });

export default [
  generateTest({ valueToTest: 1, opts: [1, 2] }),
  generateTest({ valueToTest: 2, opts: [1], errorMessage: 'should be in [1]' }),
  generateTest({ valueToTest: 'test', opts: ['test', 'test2'] })
];
