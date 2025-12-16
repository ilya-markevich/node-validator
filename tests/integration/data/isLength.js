import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isLength' });

export default [
  generateTest({ valueToTest: 'test', opts: { min: 1, max: 5 } }),
  generateTest({
    valueToTest: 'test',
    opts: { min: 5, max: 10 },
    errorMessage: 'should have length between 5 and 10'
  }),
  generateTest({ valueToTest: 'test', opts: { min: 1, max: 5 } })
];
