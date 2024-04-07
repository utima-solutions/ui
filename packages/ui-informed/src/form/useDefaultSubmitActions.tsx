import { toast } from '@utima/ui';
import type { FormState } from 'informed';
import { useCallback, useState } from 'react';

import { useFormTranslationsContext } from '..';

export interface TypedFormState<T> extends Omit<FormState, 'values'> {
  values: T;
}
type UseFormSubmitActionsParams<T> = {
  onSubmit?: (formState: TypedFormState<T>) => Promise<unknown>;
};

/**
 * Form component actions hook. Handles form submit, delete and failure
 * actions definitions. These actions also handle confirmation modals
 * and notification messages.
 */
export function useDefaultSubmitActions<T>({
  onSubmit,
}: UseFormSubmitActionsParams<T>) {
  const messages = useFormTranslationsContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Submit handler, extends default informed submit handler
   * to be async, to be able to handle loading states automatically.
   */
  const handleSubmit = useCallback(
    async (formState: FormState) => {
      setIsSubmitting(true);

      try {
        await onSubmit?.(formState as TypedFormState<T>);

        // Show success notification
        toast.success(messages.actions.success.title, {
          description: messages.actions.success.message,
        });
      } catch (error) {
        toast.error(messages.actions.fail.title, {
          description: (error as any).message,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [messages, onSubmit],
  );

  /**
   * Submit failure handler, shows notification with error message.
   */
  const handleSubmitFailure = useCallback(() => {
    toast.error(messages.actions.fail.title, {
      description: messages.actions.fail.message,
    });
  }, [messages]);

  return {
    handleSubmit,
    handleSubmitFailure,
    isSubmitting,
  };
}