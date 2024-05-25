import type { VariantProps } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';
import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';

import { inputDef, inputStyles } from './Input.styles';

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputStyles> {
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  passwordPreview?: boolean;
}

/**
 * Input component with support for addons.
 *
 * ```tsx
 * <Input addonBefore='http://' placeholder='example.com' />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    size = 'md',
    variant = 'default',
    addonBefore,
    addonAfter,
    passwordPreview,
    type,
    ...restProps
  },
  ref,
) {
  const [passwordToggle, setPasswordToggle] = useState(false);

  const input = (
    <div className={inputDef.container}>
      <input
        ref={ref}
        type={type === 'password' && passwordToggle ? 'text' : type}
        className={cn(
          inputStyles({ size, variant }),
          addonBefore && 'rounded-l-none',
          addonAfter && 'rounded-r-none',
          className,
        )}
        {...restProps}
      />
      {passwordPreview && type === 'password' && (
        <button
          type='button'
          className={inputDef.passwordPreview.button}
          onClick={() => setPasswordToggle(v => !v)}
        >
          {passwordToggle ? (
            <EyeOff className={inputDef.passwordPreview.icon} />
          ) : (
            <Eye className={inputDef.passwordPreview.icon} />
          )}
        </button>
      )}
    </div>
  );

  if (!addonAfter && !addonBefore) {
    return input;
  }

  return (
    <div className={inputDef.wrapper}>
      {addonBefore && (
        <span
          className={cn(
            inputStyles({ size }),
            inputDef.addon.base,
            inputDef.addon.before,
          )}
        >
          {addonBefore}
        </span>
      )}
      {input}
      {addonAfter && (
        <span
          className={cn(
            inputStyles({ size }),
            inputDef.addon.base,
            inputDef.addon.after,
          )}
        >
          {addonAfter}
        </span>
      )}
    </div>
  );
});
