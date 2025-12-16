import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'test' }),
  generateExecuteData({ isCorrect: false, value: undefined }),
  generateExecuteData({ isCorrect: false, value: 'test.com' }),
  generateExecuteData({ isCorrect: false, value: 'test' }),
  generateExecuteData({ isCorrect: true, value: 'http://www.test.com' }),
  generateExecuteData({ isCorrect: true, value: 'https://www.test.com' })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be an url string' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
