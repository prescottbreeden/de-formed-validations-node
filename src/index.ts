import {
  ValidationSchema,
  ValidationState,
  createValidationState,
  BaseValidation,
} from '@de-formed/base';

// useCache :: none -> [f, g]
const useCache = (initial: ValidationState) => {
  let value = initial;
  const setValidationState = (data: ValidationState) => {
    value = data;
    return data;
  }
  const getValidationState = () => value;
  return { getValidationState, setValidationState };
};

export function Validation<S>(validationSchema: ValidationSchema<S>) {
  const { getValidationState, setValidationState } = useCache(
    createValidationState(validationSchema)
  );

  return new BaseValidation(
    validationSchema,
    getValidationState,
    setValidationState
  )
}

