"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const base_1 = require("@de-formed/base");
const readValue = (state) => (typeof state === 'function' ? state() : state);
const useCache = (initial) => {
    let state = readValue(initial);
    const setValidationState = (data) => {
        state = data;
        return data;
    };
    const getValidationState = () => state;
    return [getValidationState, setValidationState];
};
function Validation(validationSchema) {
    const [getValidationState, setValidationState] = useCache((0, base_1.createValidationState)(validationSchema));
    const resetValidationState = (0, base_1.createResetValidationState)(validationSchema, setValidationState);
    const validate = (0, base_1.createValidate)(validationSchema, getValidationState, setValidationState);
    const validateAll = (0, base_1.createValidateAll)(validationSchema, getValidationState, setValidationState);
    const validateAllIfTrue = (0, base_1.createValidateAllIfTrue)(validationSchema, getValidationState, setValidationState);
    const validateIfTrue = (0, base_1.createValidateIfTrue)(validationSchema, getValidationState, setValidationState);
    const validateOnBlur = (0, base_1.createValidateOnBlur)(validationSchema, getValidationState, setValidationState);
    const validateOnChange = (0, base_1.createValidateOnChange)(validationSchema, getValidationState, setValidationState);
    const getError = (0, base_1.createGetError)(getValidationState);
    const getAllErrors = (0, base_1.createGetAllErrors)(getValidationState);
    const getFieldValid = (0, base_1.createGetFieldValid)(getValidationState);
    const validationObject = {
        getAllErrors,
        getError,
        getFieldValid,
        isValid: true,
        resetValidationState,
        setValidationState,
        validate,
        validateAll,
        validateAllIfTrue,
        validateIfTrue,
        validateOnBlur,
        validateOnChange,
        validationErrors: [],
        validationState: {},
    };
    Object.defineProperty(validationObject, 'isValid', {
        get: () => (0, base_1.calculateIsValid)(getValidationState),
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationState', {
        get: getValidationState,
        enumerable: true,
    });
    Object.defineProperty(validationObject, 'validationErrors', {
        get: () => (0, base_1.gatherValidationErrors)(getValidationState),
        enumerable: true,
    });
    return validationObject;
}
exports.Validation = Validation;
//# sourceMappingURL=index.js.map