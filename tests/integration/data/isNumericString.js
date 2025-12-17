import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const errorMessage = 'should be a string that contains only numbers';

const generateTest = generateIntegrationTestCase({ validatorName: 'isNumericString' });

export default [
  generateTest({ valueToTest: undefined, errorMessage }),
  generateTest({ valueToTest: 'true', errorMessage }),
  generateTest({ valueToTest: '0123' }),
  generateTest({ valueToTest: '', errorMessage })
];
