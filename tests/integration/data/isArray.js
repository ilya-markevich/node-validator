import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isArray' });

export default [
  generateTest({ valueToTest: [] }),
  generateTest({ valueToTest: 'test', errorMessage: 'should be an array' }),
  generateTest({ valueToTest: ['test'] })
];
