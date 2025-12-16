import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isEachIn' });

export default [
  generateTest({ valueToTest: 'test', errorMessage: 'each value should be in []' }),
  generateTest({
    valueToTest: [1, 2, 3],
    opts: [3, 4, 5],
    errorMessage: 'each value should be in [3, 4, 5]'
  }),
  generateTest({ valueToTest: [1, 2], opts: [1, 2, 3] })
];
