import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: 'test', opts: 'test' }),
  generateExecuteData({ isCorrect: false, value: '', opts: ' ' }),
  generateExecuteData({ isCorrect: false, value: null, opts: undefined }),
  generateExecuteData({ isCorrect: true, value: 1, opts: 1 }),
  generateExecuteData({ isCorrect: false, value: 0, opts: 1 })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be equal 2', opts: 2 }),
  generateErrorMessageData({ errorMessage: 'should be equal null', opts: null }),
  generateErrorMessageData({ errorMessage: 'should be equal undefined', opts: undefined }),
  generateErrorMessageData({ errorMessage: 'should be equal 0', opts: 0 })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
