import { Form as InformedForm } from 'informed';
import { useMemo, type ComponentProps } from 'react';
import type { ZodObject, ZodRawShape } from 'zod';

import { FormContext, type FormContextType } from './useFormContext';
import { useFormTranslationsContext } from '..';

export interface FormProps<T>
  extends Omit<
    ComponentProps<typeof InformedForm>,
    'initialValues' | 'onSubmit'
  > {
  initialValues?: T | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  showOptional?: boolean;
  disableDefaultToast?: boolean;
  zodSchema?: ZodObject<ZodRawShape>;
}

/**
 * Basic form component used to wrap form inputs. It wraps
 * all content in Informed Form component, which handles
 * form state and validation.
 */
export function Form<T>({
  initialValues,
  readOnly = false,
  disabled = false,
  loading = false,
  showOptional = false,
  disableDefaultToast,
  zodSchema,
  ...restProps
}: FormProps<T>) {
  const messages = useFormTranslationsContext();
  const contextValue = useMemo<FormContextType>(
    () => ({
      initialValues,
      disabled,
      readOnly,
      loading,
      showOptional,
      zodSchema,
    }),
    [initialValues, disabled, loading, readOnly, zodSchema, showOptional],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <InformedForm
        initialValues={initialValues as Record<string, unknown>}
        errorMessage={{
          required: messages.errors.required,
        }}
        {...restProps}
      />
    </FormContext.Provider>
  );
}
