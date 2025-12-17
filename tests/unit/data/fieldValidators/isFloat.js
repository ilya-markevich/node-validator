import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'test', opts: {} }),
  generateExecuteData({ isCorrect: true, value: '1.25', opts: { convert: true } }),
  generateExecuteData({ isCorrect: true, value: 8, opts: {} }),
  generateExecuteData({ isCorrect: true, value: 8.0, opts: {} }),
  generateExecuteData({ isCorrect: true, value: 10.5, opts: { min: 1, max: 11 } }),
  generateExecuteData({ isCorrect: false, value: 4.8, opts: { min: 5, max: 10 } }),
  generateExecuteData({ isCorrect: true, value: 5.7, opts: { min: 4 } }),
  generateExecuteData({ isCorrect: false, value: 2.5, opts: { min: 5 } }),
  generateExecuteData({ isCorrect: true, value: 10.7, opts: { max: 12 } }),
  generateExecuteData({ isCorrect: false, value: 5.3, opts: { max: 2 } })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a float', opts: {} }),
  generateErrorMessageData({
    errorMessage: 'should be a float between 1.2 and 5.4',
    opts: { min: 1.2, max: 5.4 }
  }),
  generateErrorMessageData({ errorMessage: 'should be a float more than 4', opts: { min: 4 } }),
  generateErrorMessageData({ errorMessage: 'should be a float less than 10', opts: { max: 10 } })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
