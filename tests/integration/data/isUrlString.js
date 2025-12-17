import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be an url string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isUrlString' });

export default [
  generateTest({ valueToTest: true, errorMessage }),
  generateTest({ valueToTest: 'test.com', errorMessage }),
  generateTest({ valueToTest: 'http://test.com' }),
  generateTest({ valueToTest: undefined, errorMessage })
];
