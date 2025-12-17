import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isArrayLength' });

export default [
  generateTest({ valueToTest: [1, 2, 3] }),
  generateTest({ valueToTest: [1, 2], opts: { min: 1, max: 3 } }),
  generateTest({
    valueToTest: [1],
    opts: { min: 2 },
    errorMessage: 'should have length more than 2'
  })
];
