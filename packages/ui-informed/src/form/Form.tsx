import { Form as InformedForm } from 'informed';
import { useMemo, type ComponentProps } from 'react';
import type { ZodObject, ZodRawShape } from 'zod';

import {
  useDefaultSubmitActions,
  type TypedFormState,
} from './useDefaultSubmitActions';
import { FormContext, type FormContextType } from './useFormContext';
import { useFormTranslationsContext } from '..';

export interface FormProps<T>
  extends Omit<
    ComponentProps<typeof InformedForm>,
    'initialValues' | 'onSubmit'
  > {
  initialValues: T;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  onSubmit?: (formState: TypedFormState<T>) => Promise<unknown>;
  zodSchema?: ZodObject<ZodRawShape>;
}

/**
 * Basic form component used to wrap form inputs. It wraps
 * all content in Informed Form component, which handles
 * form state and validation.
 */
export function Form<T>({
  onSubmit,
  children,
  initialValues,
  readOnly = false,
  disabled = false,
  loading = false,
  zodSchema,
  ...restProps
}: FormProps<T>) {
  const messages = useFormTranslationsContext();
  const { handleSubmit, handleSubmitFailure, isSubmitting } =
    useDefaultSubmitActions<T>({
      onSubmit,
    });

  const contextValue = useMemo<FormContextType>(
    () => ({
      initialValues,
      disabled,
      readOnly,
      loading: loading || isSubmitting,
      zodSchema,
    }),
    [initialValues, disabled, loading, isSubmitting, readOnly, zodSchema],
  );

  return (
    <InformedForm
      initialValues={initialValues as Record<string, unknown>}
      onSubmit={handleSubmit}
      onSubmitFailure={handleSubmitFailure}
      errorMessage={{
        required: messages.errors.required,
      }}
      {...restProps}
    >
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </InformedForm>
  );
}
