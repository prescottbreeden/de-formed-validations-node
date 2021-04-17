import { ResetValidationState, ValidationSchema } from './types';
export declare function Validation<S>(validationSchema: ValidationSchema<S>): {
    getAllErrors: any;
    getError: any;
    getFieldValid: any;
    isValid: null;
    resetValidationState: ResetValidationState;
    setValidationState: any;
    validate: any;
    validateAll: any;
    validateAllIfTrue: any;
    validateIfTrue: any;
    validationErrors: null;
    validationState: null;
};
