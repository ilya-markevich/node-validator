declare class Validator {
  constructor(objectToValidate: object);

  public getValidationObject(): object;

  public property(path: string): Validator.State;

  public hasErrors(): boolean;

  public getErrors(): Validator.ValidationError[];

  public extend(validators: Validator.ValidatorsObject): void;
}

declare namespace Validator {
  export interface ValidationError {
    path: string,
    value: any,
    errorMessage: string | null
  }

  export interface ValidatorsObject {
    [propName: string]: FieldValidator
  }

  export interface State {
    optional(): State;

    withMessage(errorMessage: string): State;

    isArray(): State;

    isArrayLength(options?: { min?: number, max?: number }): State;

    isBase64String(): State;

    isBoolean(options?: { convert?: boolean }): State;

    isDate(options?: { before?: Date | string, after?: Date | string }): State;

    isEachIn(inArray: any[]): State;

    isEmail(): State;

    isEqual(equalTo: any): State;

    isFloat(options?: { min?: number, max?: number, convert?: boolean }): State;

    isIn(inArray: any[]): State;

    isInteger(options?: { min?: number, max?: number, convert?: boolean }): State;

    isIpString(options?: { v4?: boolean, v6?: boolean }): State;

    isJsonString(): State;

    isLength(options?: { min?: number, max?: number }): State;

    isLowerCaseString(): State;

    isMatch(matchRegexp: RegExp): State;

    isNotEmpty(): State;

    isNumericString(): State;

    isString(): State;

    isUpperCaseString(): State;

    isUrlString(): State;

    [propName: string]: (options?: any) => State;
  }

  interface FieldValidator {
    execute: (value: any, opts?: any) => boolean,
    defaultOpts?: object,
    getErrorMessage?: (opts?: any) => string
  }
}

export = Validator;