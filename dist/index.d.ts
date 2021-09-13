import { ValidationSchema } from '@de-formed/base';
export declare function Validation<S>(validationSchema: ValidationSchema<S>): {
    getAllErrors: any;
    getError: any;
    getFieldValid: any;
    isValid: null;
    resetValidationState: () => void;
    setValidationState: any;
    validate: any;
    validateAll: any;
    validateAllIfTrue: any;
    validateIfTrue: any;
    validationErrors: null;
    validationState: null;
};
