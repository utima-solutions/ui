import { createContext, useContext } from 'react';
import type { AnyZodObject } from 'zod';

export type FormContextType<T = unknown> = {
  initialValues: T;
  disabled: boolean;
  readOnly: boolean;
  loading: boolean;
  showOptional: boolean;
  showRequired: boolean;
  zodSchema?: AnyZodObject;
};

export const FormContext = createContext<FormContextType>(undefined!);

/**
 * Saves initial values and other useful information to context, which can be
 * accessed by components inside the form.
 */
export function useFormContext<T = unknown>() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('No FormContext found when calling useFormContext.');
  }

  return context as FormContextType<T>;
}
