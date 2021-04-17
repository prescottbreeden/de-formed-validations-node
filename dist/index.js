"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const utilities_1 = require("./utilities");
const validation_functions_1 = require("./validation-functions");
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
    const [getValidationState, setValidationState] = utilities_1.compose(useCache, validation_functions_1.createValidationState)(validationSchema);
    const resetValidationState = () => {
        return utilities_1.compose(setValidationState, validation_functions_1.createValidationState)(validationSchema);
    };
    const validate = validation_functions_1.createValidate(validationSchema, getValidationState, setValidationState);
    const validateAll = validation_functions_1.createValidateAll(validationSchema, getValidationState, setValidationState);
    const validateAllIfTrue = validation_functions_1.createValidateAllIfTrue(validationSchema, getValidationState, setValidationState);
    const validateIfTrue = validation_functions_1.createValidateIfTrue(validationSchema, getValidationState, setValidationState);
    const getError = validation_functions_1.createGetError(getValidationState);
    const getAllErrors = validation_functions_1.createGetAllErrors(getValidationState);
    const getFieldValid = validation_functions_1.createGetFieldValid(getValidationState);
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
        get: () => validation_functions_1.calculateIsValid(getValidationState),
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationState', {
        get: getValidationState,
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationErrors', {
        get: () => validation_functions_1.gatherValidationErrors(getValidationState),
        enumerable: true,
    });
    return validationObject;
}
exports.Validation = Validation;
//# sourceMappingURL=index.js.map