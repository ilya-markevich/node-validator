import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'test', opts: {} }),
  generateExecuteData({ isCorrect: true, value: '12', opts: { convert: true } }),
  generateExecuteData({ isCorrect: true, value: 8, opts: {} }),
  generateExecuteData({ isCorrect: true, value: 10, opts: { min: 1, max: 11 } }),
  generateExecuteData({ isCorrect: false, value: 4, opts: { min: 5, max: 10 } }),
  generateExecuteData({ isCorrect: true, value: 5, opts: { min: 4 } }),
  generateExecuteData({ isCorrect: false, value: 2, opts: { min: 5 } }),
  generateExecuteData({ isCorrect: true, value: 10, opts: { max: 12 } }),
  generateExecuteData({ isCorrect: false, value: 5, opts: { max: 2 } })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be an integer', opts: {} }),
  generateErrorMessageData({
    errorMessage: 'should be an integer between 1 and 5',
    opts: { min: 1, max: 5 }
  }),
  generateErrorMessageData({ errorMessage: 'should be an integer more than 4', opts: { min: 4 } }),
  generateErrorMessageData({ errorMessage: 'should be an integer less than 10', opts: { max: 10 } })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
