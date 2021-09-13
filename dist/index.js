"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const base_1 = require("@de-formed/base");
const useCache = (initial) => {
    let value = initial;
    const setValidationState = (data) => {
        value = data;
        return data;
    };
    const getValidationState = () => value;
    return { getValidationState, setValidationState };
};
function Validation(validationSchema) {
    const { getValidationState, setValidationState } = useCache((0, base_1.createValidationState)(validationSchema));
    return new base_1.BaseValidation(validationSchema, getValidationState, setValidationState);
}
exports.Validation = Validation;
//# sourceMappingURL=index.js.map