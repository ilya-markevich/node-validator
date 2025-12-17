import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: 'test', opts: ['test', 'test2', 'test3'] }),
  generateExecuteData({ isCorrect: true, value: true, opts: [true, false] }),
  generateExecuteData({ isCorrect: true, value: 1, opts: [1, 2, 3] })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be in [1, 2, 3]', opts: [1, 2, 3] }),
  generateErrorMessageData({
    errorMessage: 'should be in [null, undefined]',
    opts: [null, undefined]
  }),
  generateErrorMessageData({ errorMessage: 'should be in [true, false]', opts: [true, false] }),
  generateErrorMessageData({
    errorMessage: 'should be in [test1, test2]',
    opts: ['test1', 'test2']
  })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
