import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a lower case string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isLowerCaseString' });

export default [
  generateTest({ valueToTest: 'test' }),
  generateTest({ valueToTest: 'Test', errorMessage }),
  generateTest({ valueToTest: 0, errorMessage }),
  generateTest({ valueToTest: undefined, errorMessage })
];
