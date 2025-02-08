import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';
import {
  forwardRef,
  memo,
  useMemo,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import { cn } from '@/utils';
import { SelectContext } from './use-select-context';
import { useSelectContext } from './use-select-context';

const selectVariants = tv({
  slots: {
    trigger:
      'flex w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    item: 'relative flex w-full cursor-default select-none items-center rounded-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: ' font-semibold',
    icon: 'opacity-50',
    iconWrapper: 'absolute right-2 flex items-center justify-center',
  },
  variants: {
    size: {
      xs: {
        trigger: 'h-6 px-2 py-1.5 text-xs',
        item: 'h-6 px-2 py-1 text-xs',
        label: 'text-xs px-2 py-1.5',
        icon: 'size-3',
        iconWrapper: 'size-3',
      },
      sm: {
        trigger: 'h-7 px-2 py-1.5 text-xs',
        item: 'h-7 px-2 py-1 text-xs',
        label: 'text-xs px-2 py-1.5',
        icon: 'size-3.5',
        iconWrapper: 'size-3.5',
      },
      md: {
        trigger: 'h-9 px-3 py-2 text-sm',
        item: 'h-8 px-3 py-1.5 text-sm',
        label: 'text-sm px-3 py-2',
        icon: 'size-4',
        iconWrapper: 'size-3.5',
      },
      lg: {
        trigger: 'h-11 px-3 py-2 text-base',
        item: 'h-9 px-3 py-1 text-base',
        label: 'text-base px-3 py-2',
        icon: 'size-4.5',
        iconWrapper: 'size-4',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface SelectRootProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    VariantProps<typeof selectVariants> {}

export const SelectRoot = memo(function SelectRoot({
  size = 'md',
  ...props
}: SelectRootProps) {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectPrimitive.Root data-uui-select {...props} />
    </SelectContext.Provider>
  );
});

export interface SelectTriggerProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  classNameIcon?: string;
  icon?: ReactNode;
}

export const SelectTrigger = forwardRef<
  ComponentRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, classNameIcon, icon, children, ...props }, ref) => {
  const { size } = useSelectContext();
  const styles = selectVariants({ size });

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      data-uui-select-trigger
      className={cn(styles.trigger(), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        {icon ?? (
          <ChevronDown
            data-uui-select-trigger-icon
            className={cn(styles.icon(), classNameIcon)}
          />
        )}
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

export interface SelectScrollUpButtonProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {
  classNameIcon?: string;
  icon?: ReactNode;
}

export const SelectScrollUpButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ className, classNameIcon, icon, ...props }, ref) => {
  const { size } = useSelectContext();
  const styles = selectVariants({ size });

  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      data-uui-select-scroll-up-button
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      {icon ?? (
        <ChevronUp
          data-uui-select-scroll-up-button-icon
          className={cn(styles.icon(), classNameIcon)}
        />
      )}
    </SelectPrimitive.ScrollUpButton>
  );
});

export interface SelectScrollDownButtonProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {
  classNameIcon?: string;
  icon?: ReactNode;
}

export const SelectScrollDownButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownButtonProps
>(({ className, classNameIcon, icon, ...props }, ref) => {
  const { size } = useSelectContext();
  const styles = selectVariants({ size });

  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      data-uui-select-scroll-down-button
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      {icon ?? (
        <ChevronDown
          data-uui-select-scroll-down-button-icon
          className={cn(styles.icon(), classNameIcon)}
        />
      )}
    </SelectPrimitive.ScrollDownButton>
  );
});

export interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  classNameViewport?: string;
}

export const SelectContent = forwardRef<
  ComponentRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    { className, classNameViewport, children, position = 'popper', ...props },
    ref,
  ) => (
    <SelectPrimitive.Content
      ref={ref}
      data-uui-select-content
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        data-uui-select-viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          classNameViewport,
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  ),
);

export const SelectLabel = forwardRef<
  ComponentRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const { size } = useSelectContext();
  const styles = selectVariants({ size });

  return (
    <SelectPrimitive.Label
      ref={ref}
      data-uui-select-label
      className={cn(styles.label(), className)}
      {...props}
    />
  );
});

export interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  classNameIcon?: string;
  classNameIconWrapper?: string;
  icon?: ReactNode;
}

export const SelectItem = forwardRef<
  ComponentRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(
  (
    {
      className,
      classNameIcon,
      classNameIconWrapper,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const { size } = useSelectContext();
    const styles = selectVariants({ size });

    return (
      <SelectPrimitive.Item
        ref={ref}
        data-uui-select-item
        className={cn(styles.item(), className)}
        {...props}
      >
        <span
          data-uui-select-item-icon-wrapper
          className={cn(styles.iconWrapper(), classNameIconWrapper)}
        >
          {icon ?? (
            <SelectPrimitive.ItemIndicator>
              <Check className={cn(styles.icon(), classNameIcon)} />
            </SelectPrimitive.ItemIndicator>
          )}
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);

export const SelectSeparator = forwardRef<
  ComponentRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-uui-select-separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
