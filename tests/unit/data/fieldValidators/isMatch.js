import {
  generateExecuteData,
  generateErrorMessageData
} from '../../../helpers/generateFieldValidatorData';

const executeTestCases = [
  generateExecuteData({ isCorrect: true, value: 'test', opts: /.*/u }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: /te/u }),
  generateExecuteData({ isCorrect: false, value: 'test', opts: /abc/u }),
  generateExecuteData({ isCorrect: true, value: 'test', opts: /s/u })
];

const errorMessageTestCases = [
  generateErrorMessageData({ errorMessage: 'should match /test/gu', opts: /test/gu }),
  generateErrorMessageData({ errorMessage: 'should match /abc/u', opts: /abc/u }),
  generateErrorMessageData({ errorMessage: 'should match /123/u', opts: /123/u }),
  generateErrorMessageData({ errorMessage: 'should match /t01b/u', opts: /t01b/u })
];

export default {
  executeTestCases,
  errorMessageTestCases
};
