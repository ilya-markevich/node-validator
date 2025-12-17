import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: [] }),
  generateExecuteData({ isCorrect: false, value: '[]' }),
  generateExecuteData({ isCorrect: false, value: null }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: [0, 1] }),
  generateExecuteData({ isCorrect: false, value: 'test' })
];

const errorMessageTestCases = [generateErrorMessageData({ errorMessage: 'should be an array' })];

export default {
  executeTestCases,
  errorMessageTestCases
};
