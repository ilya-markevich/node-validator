import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: true, opts: {} }),
  generateExecuteData({ isCorrect: true, value: 'true', opts: { convert: true } }),
  generateExecuteData({ isCorrect: false, value: 'true', opts: { convert: false } }),
  generateExecuteData({ isCorrect: false, value: null, opts: {} }),
  generateExecuteData({ isCorrect: false, value: undefined, opts: {} }),
  generateExecuteData({ isCorrect: true, value: false, opts: {} }),
  generateExecuteData({ isCorrect: false, value: 0, opts: {} })
];

const errorMessageTestCases = [generateErrorMessageData({ errorMessage: 'should be a boolean' })];

export default {
  executeTestCases,
  errorMessageTestCases
};
