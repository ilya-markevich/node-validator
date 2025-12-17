import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isDate' });

export default [
  generateTest({ valueToTest: '01.01.2000' }),
  generateTest({ valueToTest: 'test', errorMessage: 'should be a date' }),
  generateTest({
    valueToTest: '01.01.2000',
    opts: { before: '01.05.2000', after: '01.02.2000' },
    errorMessage: 'should be a date between 01.02.2000 and 01.05.2000'
  }),
  generateTest({ valueToTest: '01.02.2000', opts: { before: '01.05.2000', after: '01.01.2000' } })
];
