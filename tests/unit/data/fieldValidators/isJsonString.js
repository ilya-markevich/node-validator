import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: '' }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: true, value: '{ "test": 2 }' }),
  generateExecuteData({ isCorrect: false, value: '{' }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a valid json string' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
