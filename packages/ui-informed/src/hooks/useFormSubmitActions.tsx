import { toast } from '@utima/ui';
import type { FormState } from 'informed';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

export type TypedFormState<T> = Omit<FormState, 'values'> & { values: T };
type UseFormSubmitActionsParams<T> = {
  onSubmit?: (formState: TypedFormState<T>) => Promise<unknown>;
};

/**
 * Form component actions hook. Handles form submit, delete and failure
 * actions definitions. These actions also handle confirmation modals
 * and notification messages.
 */
export function useFormSubmitActions<T>({
  onSubmit,
}: UseFormSubmitActionsParams<T>) {
  const { t } = useTranslation();
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
        toast.success(t('actions.success.title'), {
          description: t('actions.success.message'),
        });
      } catch (error) {
        toast.error(t('actions.fail.title'), {
          description: (error as any).message,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSubmit, t],
  );

  /**
   * Submit failure handler, shows notification with error message.
   */
  const handleSubmitFailure = useCallback(() => {
    toast.error(t('actions.fail.title'), {
      description: t('actions.fail.message'),
    });
  }, [t]);

  return {
    handleSubmit,
    handleSubmitFailure,
    isSubmitting,
  };
}
