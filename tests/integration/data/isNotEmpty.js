import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isNotEmpty' });

export default [
  generateTest({ valueToTest: 'test' }),
  generateTest({ valueToTest: '', errorMessage: 'should be not empty' }),
  generateTest({ valueToTest: '0' }),
  generateTest({ valueToTest: ' ' }),
  generateTest({ valueToTest: '  ', opts: { trim: true }, errorMessage: 'should be not empty' })
];
