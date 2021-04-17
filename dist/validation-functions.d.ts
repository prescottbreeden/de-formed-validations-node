/// <reference types="ts-toolbelt" />
import { compose, prop, stringIsLessThan, stringIsMoreThan, stringIsNotEmpty } from './utilities';
import { GetAllErrors, GetError, GetFieldValid, SetValidationState, Validate, ValidateAll, ValidateAllIfTrue, ValidateIfTrue, ValidationSchema, ValidationState } from './types';
export { compose, prop, stringIsLessThan, stringIsMoreThan, stringIsNotEmpty };
export declare const isPropertyValid: <S>(property: keyof S) => (...args: any[]) => any;
export declare function createValidationState<S>(schema: ValidationSchema<S>): ValidationState;
export declare function updatePropertyOnState<S>(validationSchema: ValidationSchema<S>): import("Function/Curry").Curry<(property: keyof S, value: any) => any>;
export declare function createValidate<S>(validationSchema: ValidationSchema<S>, validationState: ValidationState, setValidationState: SetValidationState): Validate<S>;
export declare function createValidateIfTrue<S>(validationSchema: ValidationSchema<S>, validationState: () => ValidationState | ValidationState, setValidationState: SetValidationState): ValidateIfTrue<S>;
export declare function createValidateAll<S>(validationSchema: ValidationSchema<S>, validationState: () => ValidationState | ValidationState, setValidationState: SetValidationState): ValidateAll<S>;
export declare function createValidateAllIfTrue<S>(validationSchema: ValidationSchema<S>, validationState: () => ValidationState | ValidationState, setValidationState: SetValidationState): ValidateAllIfTrue<S>;
export declare function createGetAllErrors<S>(validationState: () => ValidationState | ValidationState): GetAllErrors<S>;
export declare function createGetError<S>(validationState: () => ValidationState | ValidationState): GetError<S>;
export declare function createGetFieldValid<S>(validationState: () => ValidationState | ValidationState): GetFieldValid<S>;
export declare function calculateIsValid(validationState: () => ValidationState | ValidationState): boolean;
export declare function gatherValidationErrors<S>(state: () => ValidationState | ValidationState): string[];
