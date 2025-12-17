import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'test', opts: {} }),
  generateExecuteData({ isCorrect: false, value: undefined, opts: {} }),
  generateExecuteData({ isCorrect: true, value: '192.168.1.1', opts: { v4: true } }),
  generateExecuteData({
    isCorrect: true,
    value: 'FF80:0000:0000:0000:0123:1234:ABCD:EF12',
    opts: { v6: true }
  }),
  generateExecuteData({ isCorrect: true, value: '192.168.1.2', opts: {} })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be an ip string', opts: {} }),
  generateErrorMessageData({
    errorMessage: 'should be an ip string',
    opts: { v4: true, v6: true }
  }),
  generateErrorMessageData({ errorMessage: 'should be an ipv4 string', opts: { v4: true } }),
  generateErrorMessageData({ errorMessage: 'should be an ipv6 string', opts: { v6: true } })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
