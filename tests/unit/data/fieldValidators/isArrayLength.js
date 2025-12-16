import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: null, opts: { min: 0 } }),
  generateExecuteData({ isCorrect: true, value: [], opts: { min: null, max: null } }),
  generateExecuteData({ isCorrect: true, value: [], opts: { min: 0 } }),
  generateExecuteData({ isCorrect: false, value: [], opts: { min: 1 } }),
  generateExecuteData({ isCorrect: true, value: [1, 2, 3], opts: { min: 3, max: 5 } }),
  generateExecuteData({ isCorrect: false, value: [1, 2, 3], opts: { min: 4 } }),
  generateExecuteData({ isCorrect: true, value: [1], opts: { max: 2 } }),
  generateExecuteData({ isCorrect: false, value: [1, 2, 3], opts: { max: 2 } })
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
