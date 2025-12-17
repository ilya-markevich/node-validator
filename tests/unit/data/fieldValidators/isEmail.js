import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: 'test@test.com' }),
  generateExecuteData({ isCorrect: false, value: 'test.com' }),
  generateExecuteData({ isCorrect: true, value: 'test@test' })
];

const errorMessageTestCases = [generateErrorMessageData({ errorMessage: 'should be an email' })];

export default {
  executeTestCases,
  errorMessageTestCases
};
