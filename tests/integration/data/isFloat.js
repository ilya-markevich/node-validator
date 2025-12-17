import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isFloat' });

export default [
  generateTest({ valueToTest: 1.2 }),
  generateTest({ valueToTest: '1.2' }),
  generateTest({ valueToTest: 'test', errorMessage: 'should be a float more than 0' }),
  generateTest({
    valueToTest: 1.2,
    opts: { min: 2, max: 3 },
    errorMessage: 'should be a float between 2 and 3'
  })
];
