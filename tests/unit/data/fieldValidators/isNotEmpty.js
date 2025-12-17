import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: 'test' }),
  generateExecuteData({ isCorrect: false, value: '' }),
  generateExecuteData({ isCorrect: false, value: null }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: {} }),
  generateExecuteData({ isCorrect: true, value: '0' })
];

const errorMessageTestCases = [generateErrorMessageData({ errorMessage: 'should be not empty' })];

export default {
  executeTestCases,
  errorMessageTestCases
};
