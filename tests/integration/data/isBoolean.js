import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a boolean';

const generateTest = generateIntegrationTestCase({ validatorName: 'isBoolean' });

export default [
  generateTest({ valueToTest: true }),
  generateTest({ valueToTest: 'true' }),
  generateTest({ valueToTest: 'test', errorMessage }),
  generateTest({ valueToTest: null, errorMessage })
];
