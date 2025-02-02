import { Root, Indicator } from '@radix-ui/react-checkbox';
import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/utils';

export const checkboxVariants = tv({
  slots: {
    root: 'peer inline-flex shrink-0 cursor-pointer items-center shadow-black/5 justify-center rounded-[0.25rem] border shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    indicator: 'text-current',
  },
  variants: {
    variant: {
      success: {
        root: 'border-success/30 data-[state=checked]:border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground hover:border-success/50',
      },
      primary: {
        root: 'border-primary/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary/50',
      },
      destructive: {
        root: 'border-destructive/30 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground hover:border-destructive/50',
      },
      secondary: {
        root: 'border-secondary/30 data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground hover:border-secondary/50',
      },
      outline: {
        root: 'border-input bg-background hover:bg-accent shadow-xs hover:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground',
      },
    },
    size: {
      xs: {
        root: 'h-3 w-3',
        indicator: '[&_svg]:size-2',
      },
      sm: {
        root: 'h-3.5 w-3.5',
        indicator: '[&_svg]:size-2.5',
      },
      md: {
        root: 'h-4 w-4',
        indicator: '[&_svg]:size-3',
      },
      lg: {
        root: 'h-5 w-5',
        indicator: '[&_svg]:size-4',
      },
      xl: {
        root: 'h-6 w-6',
        indicator: '[&_svg]:size-5',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, 'asChild'>,
    VariantProps<typeof checkboxVariants> {
  circle?: boolean;
  classNameIndicator?: string;
  indicator?: ReactNode;
}

export const Checkbox = forwardRef<ComponentRef<typeof Root>, CheckboxProps>(
  function Checkbox({
    className,
    classNameIndicator,
    size,
    variant,
    circle,
    indicator = <Check strokeWidth={3} />,
    ...restProps
  }, ref) {
    const { root, indicator: indicatorClass } = checkboxVariants({ size, variant });

    return (
      <Root
        ref={ref}
        data-uui-checkbox
        className={cn(
          root(),
          circle && 'rounded-full',
          className,
        )}
        {...restProps}
      >
        <Indicator
          data-uui-checkbox-indicator
          className={cn(indicatorClass(), classNameIndicator)}
        >
          {indicator}
        </Indicator>
      </Root>
    );
  },
);
