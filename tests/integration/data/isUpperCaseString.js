import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be an upper case string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isUpperCaseString' });

export default [
  generateTest({ valueToTest: 'TEST' }),
  generateTest({ valueToTest: 'Test', errorMessage }),
  generateTest({ valueToTest: 0, errorMessage }),
  generateTest({ valueToTest: undefined, errorMessage })
];
