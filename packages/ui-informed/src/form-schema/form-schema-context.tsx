import { createContext, useContext, useMemo } from 'react';

import type { FormSchemaAdapter } from './form-schema';

export type FormSchemaContextType = {
  adapter: FormSchemaAdapter;
};

const FormSchemaContext = createContext<FormSchemaContextType>(undefined!);

/**
 * Saves initial values and other useful information to context, which can be
 * accessed by components inside the form.
 */
export function useFormSchema() {
  const context = useContext(FormSchemaContext);

  if (!context) {
    throw new Error(
      'No FormSchemaContext found when calling useFormSchemaContext.',
    );
  }

  return context;
}

// TODO set default values for the schema?
/**
 * Provider for the form schema context.
 */
export function FormSchemaProvider({
  children,
  adapter,
}: {
  children: React.ReactNode;
} & FormSchemaContextType) {
  const contextValue = useMemo(() => ({ adapter }), [adapter]);

  return (
    <FormSchemaContext.Provider value={contextValue}>
      {children}
    </FormSchemaContext.Provider>
  );
}
