"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator = require("../index");
function getValidationObject(validator) {
    const obj = validator.getValidationObject();
    console.log(obj);
}
function hasErrors(validator) {
    return validator.hasErrors() === true;
}
function getErrors(validator) {
    const errors = validator.getErrors();
    errors.forEach((error) => {
        console.log(`${error.errorMessage}, ${error.value}, ${error.path}`);
    });
}
function extend(validator) {
    validator.extend({
        test: {
            execute(value) {
                return value === 'test';
            }
        },
        test2: {
            execute(value) {
                return value === 'test';
            },
            getErrorMessage(option) {
                return `${option} test error message`;
            }
        },
        test3: {
            execute(value) {
                return value === 'test';
            },
            defaultOpts: {}
        }
    });
}
const validator = new Validator({
    test: 1
});
getValidationObject(validator);
hasErrors(validator);
getErrors(validator);
extend(validator);
