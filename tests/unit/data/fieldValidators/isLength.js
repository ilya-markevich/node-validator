import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: null, opts: {} }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: {} }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: { min: 1, max: 11 } }),
  generateExecuteData({ isCorrect: false, value: 'test', opts: { min: 5, max: 10 } }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: { min: 4 } }),
  generateExecuteData({ isCorrect: false, value: 'test', opts: { min: 5 } }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: { max: 12 } }),
  generateExecuteData({ isCorrect: false, value: 'test', opts: { max: 2 } })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should have length', opts: {} }),
  generateErrorMessageData({
    errorMessage: 'should have length between 1 and 5',
    opts: { min: 1, max: 5 }
  }),
  generateErrorMessageData({ errorMessage: 'should have length more than 4', opts: { min: 4 } }),
  generateErrorMessageData({ errorMessage: 'should have length less than 10', opts: { max: 10 } })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
