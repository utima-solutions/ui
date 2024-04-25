import { createContext, useContext } from 'react';

const defaultTranslations = {
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
