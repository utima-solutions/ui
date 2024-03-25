import { Label, Tooltip, cn } from '@utima/ui';
import { type VariantProps, cva } from 'class-variance-authority';
import { type FieldProps, useField } from 'informed';
import { HelpCircle } from 'lucide-react';
import { useId, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { ZodType } from 'zod';

import { FormInfo } from './FormInfo';
import { FormMessage } from './FormMessage';
import { useFormContext } from '../../hooks/useFormContext';
import { zodResolver, getFieldZodObject } from '../../zodUtils';

const formItemStyles = cva('flex flex-1 gap-2', {
  variants: {
    layout: {
      vertical: 'w-full flex-col',
      horizontal: 'w-full flex-row items-center',
      inline: 'w-auto flex-row items-center',
    },
  },
});

export type UserFields = {
  id: string;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  type?: string;
};

export type FormControlRender = (params: {
  label?: string;
  field: ReturnType<typeof useField<UserFields, string | number>>;
}) => ReactNode;

export type FormItemProps = FieldProps<Omit<UserFields, 'id'>> &
  VariantProps<typeof formItemStyles> & {
    children?: ReactNode;
    className?: string;
    label?: string;
    name: string;
    type?: string;
    disabled?: boolean;
    readOnly?: boolean;
    tooltip?: ReactNode;
    render: FormControlRender;
    zodItemSchema?: ZodType;
  };

/**
 * Base form control component, used to wrap form inputs.
 * It provides styling for error messages, states, labels
 * and tooltips.
 */
export function FormControl({
  className,
  layout = 'vertical',
  children,
  label,
  name,
  type = 'text',
  required,
  tooltip,
  render,
  zodItemSchema,
  ...restProps
}: FormItemProps) {
  const id = useId();
  const { t } = useTranslation();
  const {
    disabled,
    loading,
    readOnly,
    zodSchema: zodFullSchema,
  } = useFormContext();

  const validate = zodItemSchema
    ? zodResolver(zodItemSchema)
    : zodResolver(getFieldZodObject(name, zodFullSchema));

  const field = useField<UserFields, string | number>({
    id,
    name,
    type,
    disabled:
      loading ||
      disabled ||
      readOnly ||
      restProps.disabled ||
      restProps.readOnly,
    readOnly: readOnly || restProps.readOnly,
    required,
    validate,
    ...restProps,
  });

  const { showError, error } = field.fieldState;

  return field.render(
    <div className={cn(formItemStyles({ layout }), className)}>
      {label && (
        <Label className='inline-flex items-center gap-1' htmlFor={id}>
          {label}
          {tooltip && (
            <Tooltip title={tooltip}>
              <FormInfo className='cursor-help'>
                <HelpCircle size={14} />
              </FormInfo>
            </Tooltip>
          )}
          {!required && <FormInfo>({t('labels.optional')})</FormInfo>}
        </Label>
      )}
      {/* Every wrapped component should pass render prop */}
      {render({ field, label })}
      {showError && <FormMessage>{error as any}</FormMessage>}
    </div>,
  );
}
