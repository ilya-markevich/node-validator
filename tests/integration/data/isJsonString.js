import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a valid json string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isJsonString' });

export default [
  generateTest({ valueToTest: true, errorMessage }),
  generateTest({ valueToTest: '{ "test": 2 }' }),
  generateTest({ valueToTest: 'test', errorMessage }),
  generateTest({ valueToTest: 0, errorMessage })
];
