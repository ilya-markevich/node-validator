import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'Test' }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: '' }),
  generateExecuteData({ isCorrect: true, value: 'TEST STRING' }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be an upper case string' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
