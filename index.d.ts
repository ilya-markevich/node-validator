declare class State {
  public optional(): State;

  public withMessage(errorMessage: string): State;

  public isArray(): State;

  public isArrayLength(options?: { min?: number, max?: number }): State;

  public isBase64String(): State;

  public isBoolean(options?: { convert?: boolean }): State;

  public isDate(options?: { before?: Date | string, after?: Date | string }): State;

  public isEachIn(inArray: any[]): State;

  public isEmail(): State;

  public isEqual(equalTo: any): State;

  public isFloat(options?: { min?: number, max?: number, convert?: boolean }): State;

  public isIn(inArray: any[]): State;

  public isInteger(options?: { min?: number, max?: number, convert?: boolean }): State;

  public isIpString(options?: { v4?: boolean, v6?: boolean }): State;

  public isJsonString(): State;

  public isLength(options?: { min?: number, max?: number }): State;

  public isLowerCaseString(): State;

  public isMatch(matchRegexp: RegExp): State;

  public isNotEmpty(): State;

  public isNumericString(): State;

  public isString(): State;

  public isUpperCaseString(): State;

  public isUrlString(): State;

  [propName: string]: (options?: any) => State;
}

declare interface ValidationError {
  path: string,
  value: any,
  errorMessage: string | null
}

declare interface FieldValidator {
  execute: (value: any, opts?: any) => boolean,
  defaultOpts?: object,
  getErrorMessage?: (opts?: any) => string
}

declare type ValidatorsObject = {
  [propName: string]: FieldValidator
}

declare class Validator {
  constructor(objectToValidate: object);

  public getValidationObject(): object;

  public property(path: string): State;

  public hasErrors(): boolean;

  public getErrors(): ValidationError[];

  public extend(validators: ValidatorsObject): void;
}

export = Validator;