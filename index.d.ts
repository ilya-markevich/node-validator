declare class Validator {
  constructor(objectToValidate: object);

  public getValidationObject(): object;

  public property(path: string): State;

  public hasErrors(): Promise<boolean>;

  public getErrors(): Promise<ValidationError[]>;

  public extend(validators: ValidatorsObject): void;
}

export interface ValidationError {
  path: string;
  value: unknown;
  errorMessage: string | null;
}

export interface ValidatorsObject {
  [propName: string]: FieldValidator;
}

interface State {
  optional(): State;

  withMessage(errorMessage: string): State;

  isArray(): State;

  isArrayLength(options?: { min?: number; max?: number }): State;

  isBase64String(): State;

  isBoolean(options?: { convert?: boolean }): State;

  isDate(options?: { before?: Date | string; after?: Date | string }): State;

  isEachIn(inArray: unknown[]): State;

  isEmail(): State;

  isEqual(equalTo: unknown): State;

  isFloat(options?: { min?: number; max?: number; convert?: boolean }): State;

  isIn(inArray: unknown[]): State;

  isInteger(options?: { min?: number; max?: number; convert?: boolean }): State;

  isIpString(options?: { v4?: boolean; v6?: boolean }): State;

  isJsonString(): State;

  isLength(options?: { min?: number; max?: number }): State;

  isLowerCaseString(): State;

  isMatch(matchRegexp: RegExp): State;

  isNotEmpty(options?: { trim?: boolean }): State;

  isNumericString(): State;

  isString(): State;

  isUpperCaseString(): State;

  isUrlString(): State;

  [propName: string]: (options?: unknown) => State;
}

export interface FieldValidator {
  execute: (value: unknown, opts?: unknown) => boolean | Promise<boolean>;
  defaultOpts?: object;
  getErrorMessage?: (opts?: unknown) => string;
}

export default Validator;
