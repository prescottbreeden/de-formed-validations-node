import { ValidationSchema } from '@de-formed/base';
export declare function Validation<S>(validationSchema: ValidationSchema<S>): {
    getAllErrors: import("@de-formed/base").GetAllErrors<S>;
    getError: import("@de-formed/base").GetError<S>;
    getFieldValid: import("@de-formed/base").GetFieldValid<S>;
    isValid: null;
    resetValidationState: () => void;
    setValidationState: any;
    validate: import("@de-formed/base").Validate<S>;
    validateAll: import("@de-formed/base").ValidateAll<S>;
    validateAllIfTrue: import("@de-formed/base").ValidateAllIfTrue<S>;
    validateIfTrue: import("@de-formed/base").ValidateIfTrue<S>;
    validationErrors: null;
    validationState: null;
};
