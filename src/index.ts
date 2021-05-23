import { compose } from './utilities';
import {
  ValidationSchema,
  ValidationState,
  calculateIsValid,
  createGetAllErrors,
  createGetError,
  createGetFieldValid,
  createValidate,
  createValidateAll,
  createValidateAllIfTrue,
  createValidateIfTrue,
  createValidationState,
  gatherValidationErrors,
} from '@de-formed/base';

export * from './types';

// useCache :: none -> [f, g]
const useCache = (initial: ValidationState) => {
  let value = initial;
  const setValue = (data: ValidationState) => {
    value = data;
    return data;
  }
  const retrieveValue = () => value;
  return [retrieveValue, setValue];
};

export function Validation<S>(validationSchema: ValidationSchema<S>) {
  const [getValidationState, setValidationState] = compose(
    useCache,
    createValidationState,
  )(validationSchema);

  const resetValidationState = (): void => {
    return compose(
      setValidationState,
      createValidationState
    )(validationSchema);
  };

  const validate = 
    createValidate(
      validationSchema,
      getValidationState,
      setValidationState
    );

  const validateAll = 
    createValidateAll(
      validationSchema,
      getValidationState,
      setValidationState
    );

  const validateAllIfTrue =
    createValidateAllIfTrue(
      validationSchema,
      getValidationState,
      setValidationState
  );

  const validateIfTrue = 
    createValidateIfTrue(
      validationSchema,
      getValidationState,
      setValidationState
  );

  const getError = createGetError<S>(getValidationState);
  const getAllErrors = createGetAllErrors<S>(getValidationState)
  const getFieldValid = createGetFieldValid<S>(getValidationState);

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
  }

  Object.defineProperty(
    validationObject,
    'isValid', {
      get: () => calculateIsValid(getValidationState),
      enumerable: true,
    });

  Object.defineProperty(
    validationObject,
    'validationState', {
      get: getValidationState,
      enumerable: true,
    });

  Object.defineProperty(
    validationObject,
    'validationErrors', {
      get: () => gatherValidationErrors(getValidationState),
      enumerable: true,
    });

  return validationObject;
}

