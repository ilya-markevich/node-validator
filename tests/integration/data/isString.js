import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isString' });

export default [
  generateTest({ valueToTest: true, errorMessage }),
  generateTest({ valueToTest: 'true' }),
  generateTest({ valueToTest: 'test' }),
  generateTest({ valueToTest: undefined, errorMessage })
];
