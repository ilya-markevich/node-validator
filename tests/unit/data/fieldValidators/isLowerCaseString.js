import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'Test' }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: '' }),
  generateExecuteData({ isCorrect: true, value: 'test string' }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a lower case string' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
