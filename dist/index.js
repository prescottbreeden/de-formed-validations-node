"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const utilities_1 = require("./utilities");
const base_1 = require("@de-formed/base");
const useCache = (initial) => {
    let value = initial;
    const setValue = (data) => {
        value = data;
        return data;
    };
    const retrieveValue = () => value;
    return [retrieveValue, setValue];
};
function Validation(validationSchema) {
    const [getValidationState, setValidationState] = utilities_1.compose(useCache, base_1.createValidationState)(validationSchema);
    const resetValidationState = () => {
        return utilities_1.compose(setValidationState, base_1.createValidationState)(validationSchema);
    };
    const validate = base_1.createValidate(validationSchema, getValidationState, setValidationState);
    const validateAll = base_1.createValidateAll(validationSchema, getValidationState, setValidationState);
    const validateAllIfTrue = base_1.createValidateAllIfTrue(validationSchema, getValidationState, setValidationState);
    const validateIfTrue = base_1.createValidateIfTrue(validationSchema, getValidationState, setValidationState);
    const getError = base_1.createGetError(getValidationState);
    const getAllErrors = base_1.createGetAllErrors(getValidationState);
    const getFieldValid = base_1.createGetFieldValid(getValidationState);
    const validationObject = {
        getAllErrors,
        getError,
        getFieldValid,
        isValid: null,
        resetValidationState,
        setValidationState,
        validate,
        validateAll,
        validateAllIfTrue,
        validateIfTrue,
        validationErrors: null,
        validationState: null,
    };
    Object.defineProperty(validationObject, 'isValid', {
        get: () => base_1.calculateIsValid(getValidationState),
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationState', {
        get: getValidationState,
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationErrors', {
        get: () => base_1.gatherValidationErrors(getValidationState),
        enumerable: true,
    });
    return validationObject;
}
exports.Validation = Validation;
//# sourceMappingURL=index.js.map