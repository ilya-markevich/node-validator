import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({
    isCorrect: true,
    value: ['test', 'test2'],
    opts: ['test', 'test2', 'test3']
  }),
  generateExecuteData({ isCorrect: true, value: [true, false], opts: [true, false] }),
  generateExecuteData({ isCorrect: false, value: [1, 2, 3, 4], opts: [1, 2, 3] }),
  generateExecuteData({ isCorrect: true, value: [null, undefined], opts: [null, undefined, 0] }),
  generateExecuteData({ isCorrect: false, value: [0, undefined], opts: [undefined, 1] })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'each value should be in [1, 2, 3]', opts: [1, 2, 3] }),
  generateErrorMessageData({
    errorMessage: 'each value should be in [null, undefined]',
    opts: [null, undefined]
  }),
  generateErrorMessageData({
    errorMessage: 'each value should be in [true, false]',
    opts: [true, false]
  }),
  generateErrorMessageData({
    errorMessage: 'each value should be in [test1, test2]',
    opts: ['test1', 'test2']
  })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
