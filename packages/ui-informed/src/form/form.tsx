import { cn } from '@utima/ui';
import { Form as InformedForm, type FormState } from 'informed';
import {
  startTransition,
  useCallback,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import type { ZodObject, ZodRawShape } from 'zod';

import { FormContext, type FormContextType } from './use-form-context';
import { useFormTranslationsContext } from '..';

export interface TypedFormState<T> extends Omit<FormState, 'values'> {
  values: T;
}

export interface FormProps<T>
  extends Omit<
    ComponentPropsWithoutRef<typeof InformedForm>,
    'initialValues' | 'onSubmit'
  > {
  onSubmit?: (formState: TypedFormState<T>) => Promise<unknown> | void;
  initialValues?: T | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  showOptional?: boolean;
  showRequired?: boolean;
  zodSchema?: ZodObject<ZodRawShape>;
}

/**
 * Basic form component used to wrap form inputs. It wraps
 * all content in Informed Form component, which handles
 * form state and validation.
 */
export function Form<T>({
  initialValues,
  onSubmit,
  readOnly = false,
  disabled = false,
  loading = false,
  showOptional = false,
  showRequired = true,
  zodSchema,
  ...restProps
}: FormProps<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messages = useFormTranslationsContext();
  const contextValue = useMemo<FormContextType>(
    () => ({
      initialValues,
      disabled,
      readOnly,
      loading: loading || isSubmitting,
      showRequired,
      showOptional,
      zodSchema,
    }),
    [
      initialValues,
      disabled,
      loading,
      readOnly,
      zodSchema,
      showOptional,
      showRequired,
      isSubmitting,
    ],
  );

  /**
   * Promisified submit handler that handles
   * form submission and validation.
   */
  const handleSubmit = useCallback(
    async (formState: FormState) => {
      startTransition(() => {
        setIsSubmitting(true);
      });

      try {
        await onSubmit?.(formState as TypedFormState<T>);
      } finally {
        startTransition(() => {
          setIsSubmitting(false);
        });
      }
    },
    [onSubmit],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <InformedForm
        className={cn(
          'group/form',
          readOnly && 'is-read-only',
          disabled && 'is-disabled',
        )}
        initialValues={initialValues as Record<string, unknown>}
        onSubmit={handleSubmit}
        errorMessage={{
          required: messages.errors.required,
        }}
        {...restProps}
      />
    </FormContext.Provider>
  );
}
