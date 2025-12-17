import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: '' }),
  generateExecuteData({ isCorrect: false, value: ' 123' }),
  generateExecuteData({ isCorrect: true, value: '123' }),
  generateExecuteData({ isCorrect: true, value: '0' }),
  generateExecuteData({ isCorrect: false, value: 0 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a string that contains only numbers' })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
