import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'tests' }),
  generateExecuteData({ isCorrect: true, value: 'YQ==' }),
  generateExecuteData({ isCorrect: true, value: 'PT0tLQ==' }),
  generateExecuteData({
    isCorrect: true,
    value: 'YXNsZmtoYXNsZGZramhhbGRoZmphbGRmanNobGFkaGZqc2FzZGZxd2VycXdl'
  }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a base64 string' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
