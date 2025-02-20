import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  type ComponentPropsWithoutRef,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/utils';

// eslint-disable-next-line tailwindcss/no-custom-classname
export const inputAddonVariants = tv({
  slots: {
    root: 'relative flex w-full items-center',
    addon:
      'text-muted-foreground border-input flex items-center border shadow-sm shadow-black/5',
    addonStart: 'rounded-s-md border-e-0',
    addonEnd: 'rounded-e-md border-s-0',
    content: 'w-full',
  },
  variants: {
    size: {
      xs: {
        addon: 'h-6 px-2 text-xs',
      },
      sm: {
        addon: 'h-7 px-3 text-xs',
      },
      md: {
        addon: 'h-9 px-3 text-sm',
      },
      lg: {
        addon: 'h-11 px-4 text-base',
      },
    },
    variant: {
      default: {
        addon: 'bg-muted',
      },
      outline: {
        addon: 'bg-transparent',
      },
      absolute: {
        addon:
          'absolute top-1/2 z-10 -translate-y-1/2 border-none bg-transparent shadow-none',
        addonStart: 'left-0',
        addonEnd: 'right-0',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

type InputAddonContextValue = {
  size: NonNullable<VariantProps<typeof inputAddonVariants>['size']>;
  variant: NonNullable<VariantProps<typeof inputAddonVariants>['variant']>;
  hasStart: boolean;
  hasEnd: boolean;
};

const InputAddonContext = createContext<InputAddonContextValue | null>(null);

function useInputAddonContext() {
  const context = useContext(InputAddonContext);

  if (!context) {
    throw new Error(
      'Input addon components must be used within an InputAddon.Root',
    );
  }

  return context;
}

export interface InputAddonRootProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'size'> {
  size?: VariantProps<typeof inputAddonVariants>['size'];
  variant?: VariantProps<typeof inputAddonVariants>['variant'];
  hasStart?: boolean;
  hasEnd?: boolean;
}

const InputAddonRoot = forwardRef<HTMLDivElement, InputAddonRootProps>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      hasStart = false,
      hasEnd = false,
      children,
      ...props
    },
    ref,
  ) => {
    const styles = inputAddonVariants({ size, variant });
    const contextValue = useMemo(
      () => ({ size, hasStart, hasEnd, variant }),
      [size, hasStart, hasEnd, variant],
    );

    return (
      <InputAddonContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-uui-input-addon-root
          className={cn(styles.root(), className)}
          {...props}
        >
          {children}
        </div>
      </InputAddonContext.Provider>
    );
  },
);

export interface InputAddonContentProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'size'> {
  size?: VariantProps<typeof inputAddonVariants>['size'];
  classNameInput?: string;
}

const InputAddonContent = forwardRef<HTMLDivElement, InputAddonContentProps>(
  ({ className, children, classNameInput, ...props }, ref) => {
    const { size, hasStart, hasEnd, variant } = useInputAddonContext();
    const styles = inputAddonVariants({ size });

    return (
      <div
        ref={ref}
        data-uui-input-addon-content
        className={cn(
          styles.content(),
          variant !== 'absolute' && hasStart && '[&>*]:rounded-l-none',
          variant !== 'absolute' && hasEnd && '[&>*]:rounded-r-none',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

interface InputAddonItemProps extends ComponentPropsWithoutRef<'div'> {
  size?: VariantProps<typeof inputAddonVariants>['size'];
}

const InputAddonStart = forwardRef<HTMLDivElement, InputAddonItemProps>(
  ({ className, size, children, ...props }, ref) => {
    const context = useInputAddonContext();
    const styles = inputAddonVariants({
      size: size ?? context.size,
      variant: context.variant,
    });

    return (
      <div
        ref={ref}
        data-uui-input-addon-start
        className={cn(styles.addon(), styles.addonStart(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const InputAddonEnd = forwardRef<HTMLDivElement, InputAddonItemProps>(
  ({ className, size, children, ...props }, ref) => {
    const context = useInputAddonContext();
    const styles = inputAddonVariants({
      size: size ?? context.size,
      variant: context.variant,
    });

    return (
      <div
        ref={ref}
        data-uui-input-addon-end
        className={cn(styles.addon(), styles.addonEnd(), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const InputAddon = {
  Content: InputAddonContent,
  Root: InputAddonRoot,
  Start: InputAddonStart,
  End: InputAddonEnd,
};
