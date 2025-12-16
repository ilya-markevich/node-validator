import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isMatch' });

export default [
  generateTest({ valueToTest: 'test', opts: /te/u }),
  generateTest({ valueToTest: 'test', opts: /abc/u, errorMessage: 'should match /abc/u' }),
  generateTest({ valueToTest: 'test', opts: /t/u })
];
