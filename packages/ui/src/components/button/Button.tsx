import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils';

import { buttonDef, buttonStyles } from './Button.styles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonStyles>, 'outline'> {
  asChild?: boolean;
  outline?: boolean;
  loading?: boolean;
  plain?: boolean;
  icon?: ReactNode;
  iconSize?: number;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      type = 'button',
      variant = 'primary',
      size = 'md',
      outline = false,
      asChild = false,
      loading = false,
      plain = false,
      ...restProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const Icon = loading ? (
      <Loader2 className='animate-spin' size={size === 'lg' ? 18 : 16} />
    ) : (
      restProps.icon
    );

    return (
      <Comp
        type={asChild ? undefined : type}
        className={cn(
          buttonStyles({
            variant,
            size,
            outline: (outline || plain) && variant ? variant : null,
          }),
          plain && buttonDef.plain,
          className,
        )}
        ref={ref}
        {...restProps}
      >
        {/* As child doesn't support multiple children */}
        {asChild ? (
          children
        ) : (
          <>
            {Icon}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
