import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isEqual' });

export default [
  generateTest({ valueToTest: 'test', opts: 'test' }),
  generateTest({ valueToTest: null, errorMessage: 'should be equal undefined' }),
  generateTest({ valueToTest: 0, opts: 0 })
];
