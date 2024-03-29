import { createContext, useContext } from 'react';

const defaultTranslations = {
  actions: {
    success: {
      title: 'Success',
      message: 'Item was successfully saved.',
    },
    fail: {
      title: 'Failure',
      message: 'Item was not saved.',
    },
  },
  errors: {
    required: 'This field is required',
  },
  labels: {
    optional: 'optional',
  },
};

type Translations = typeof defaultTranslations;

export const FormTranslationsContext =
  createContext<Translations>(defaultTranslations);

/**
 * Hook to get translations from context.
 */
export function useFormTranslationsContext() {
  const context = useContext(FormTranslationsContext);

  if (!context) {
    throw new Error(
      'No FormTranslationsContext found when calling useFormTranslationsContext.',
    );
  }

  return context as Translations;
}
