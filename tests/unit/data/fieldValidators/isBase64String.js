"use strict";

const {
  generateExecuteData,
  generateErrorMessageData,
} = require("../../../helpers/generateFieldValidatorData");

const executeTestCases = [
  generateExecuteData(false, "tests"),
  generateExecuteData(true, "YQ=="),
  generateExecuteData(true, "PT0tLQ=="),
  generateExecuteData(
    true,
    "YXNsZmtoYXNsZGZramhhbGRoZmphbGRmanNobGFkaGZqc2FzZGZxd2VycXdl"
  ),
  generateExecuteData(false, 0),
];

const errorMessageTestCases = [
  generateErrorMessageData("should be a base64 string"),
];

module.exports = {
  executeTestCases,
  errorMessageTestCases,
};
