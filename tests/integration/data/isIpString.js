import { generateIntegrationTestCase } from '../../helpers/generateFieldValidatorData';

const generateTest = generateIntegrationTestCase({ validatorName: 'isIpString' });

export default [
  generateTest({
    valueToTest: '192.168.1.1',
    opts: { v6: true },
    errorMessage: 'should be an ipv6 string'
  }),
  generateTest({ valueToTest: '192.168.1.1' }),
  generateTest({ valueToTest: 'test', opts: {}, errorMessage: 'should be an ip string' }),
  generateTest({ valueToTest: 0, opts: { v4: true }, errorMessage: 'should be an ipv4 string' })
];
