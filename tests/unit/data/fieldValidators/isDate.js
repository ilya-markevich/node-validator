import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: false, value: 'test', opts: {} }),
  generateExecuteData({ isCorrect: true, value: '01.01.2000', opts: {} }),
  generateExecuteData({
    isCorrect: true,
    value: '01.04.2000',
    opts: { after: '01.01.2000', before: '01.05.2000' }
  }),
  generateExecuteData({
    isCorrect: false,
    value: '01.04.2000',
    opts: { after: '01.05.2000', before: '01.08.2000' }
  }),
  generateExecuteData({
    isCorrect: true,
    value: '01.04.2000',
    opts: { after: '01.02.2000' }
  }),
  generateExecuteData({
    isCorrect: false,
    value: '01.04.2000',
    opts: { after: '01.05.2000' }
  }),
  generateExecuteData({
    isCorrect: true,
    value: '01.04.2000',
    opts: { before: '01.05.2000' }
  }),
  generateExecuteData({ isCorrect: false, value: '01.04.2000', opts: { before: '01.02.2000' } })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should be a date', opts: {} }),
  generateErrorMessageData({
    errorMessage: 'should be a date between 01.01.2000 and 01.05.2000',
    opts: { after: '01.01.2000', before: '01.05.2000' }
  }),
  generateErrorMessageData({
    errorMessage: 'should be a date more than 01.01.2000',
    opts: { after: '01.01.2000' }
  }),
  generateErrorMessageData({
    errorMessage: 'should be a date less than 01.05.2000',
    opts: { before: '01.05.2000' }
  })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
