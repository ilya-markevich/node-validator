import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: null }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: '' }),
  generateExecuteData({ isCorrect: true, value: 'true' }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [generateErrorMessageData({ errorMessage: 'should be a string' })];

export default {
  executeTestCases,
  errorMessageTestCases
};
