import { cn } from '@utima/ui';
import { Form as InformedForm } from 'informed';
import { useMemo, type ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import type { ZodObject, ZodRawShape } from 'zod';

import { FormContext, type FormContextType } from '../hooks/useFormContext';
import {
  useFormSubmitActions,
  type TypedFormState,
} from '../hooks/useFormSubmitActions';

export type FormProps<T> = Omit<
  ComponentProps<typeof InformedForm>,
  'initialValues' | 'onSubmit'
> & {
  initialValues: T;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  columns?: boolean;
  onSubmit?: (formState: TypedFormState<T>) => Promise<unknown>;
  zodSchema?: ZodObject<ZodRawShape>;
};

/**
 * Basic form component used to wrap form inputs. It provides action bar,
 * column layout, and wraps all content in Informed Form component,
 * which handles form state and validation.
 */
export function Form<T>({
  onSubmit,
  children,
  initialValues,
  readOnly = false,
  disabled = false,
  loading = false,
  columns = true,
  zodSchema,
  ...restProps
}: FormProps<T>) {
  const { t } = useTranslation();
  const { handleSubmit, handleSubmitFailure, isSubmitting } =
    useFormSubmitActions<T>({
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
        required: t('errors.required'),
      }}
      {...restProps}
    >
      <FormContext.Provider value={contextValue}>
        <div
          className={cn(columns && 'sm:grid gap-6')}
          style={{
            gridTemplateColumns: columns
              ? 'repeat(11, minmax(0, 1fr))'
              : undefined,
          }}
        >
          {children}
        </div>
      </FormContext.Provider>
    </InformedForm>
  );
}
