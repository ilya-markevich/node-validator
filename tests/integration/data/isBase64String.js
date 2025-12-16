import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a base64 string';

const generateTest = generateIntegrationTestCase({ validatorName: 'isBase64String' });

export default [
  generateTest({ valueToTest: 'test' }),
  generateTest({ valueToTest: 'dGVzdHRlc3Q=' }),
  generateTest({ valueToTest: 'qweasd', errorMessage }),
  generateTest({ valueToTest: undefined, errorMessage })
];
