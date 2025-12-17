import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isEmail' });

export default [
  generateTest({ valueToTest: 'test@test.com' }),
  generateTest({ valueToTest: 'test', errorMessage: 'should be an email' }),
  generateTest({ valueToTest: null, errorMessage: 'should be an email' })
];
