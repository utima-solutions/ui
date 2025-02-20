import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  slots: {
    trigger:
      'border-input focus-visible:border-ring focus-visible:ring-ring/20 ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent shadow-sm shadow-black/5 transition-shadow focus:outline-none focus:ring-1 focus-visible:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    item: 'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: ' font-semibold',
    icon: 'opacity-50',
    iconWrapper: 'absolute right-2 flex items-center justify-center',
  },
  variants: {
    size: {
      xs: {
        trigger: 'h-6 px-2 py-1.5 text-xs',
        item: 'h-6 px-2 py-1 text-xs',
        label: 'px-2 py-1.5 text-xs',
        icon: 'size-3',
        iconWrapper: 'size-3',
      },
      sm: {
        trigger: 'h-7 px-2 py-1.5 text-xs',
        item: 'h-7 px-2 py-1 text-xs',
        label: 'px-2 py-1.5 text-xs',
        icon: 'size-3.5',
        iconWrapper: 'size-3.5',
      },
      md: {
        trigger: 'h-9 px-3 py-2 text-sm',
        item: 'h-8 px-3 py-1.5 text-sm',
        label: 'px-3 py-2 text-sm',
        icon: 'size-4',
        iconWrapper: 'size-3.5',
      },
      lg: {
        trigger: 'h-11 px-3 py-2 text-base',
        item: 'h-9 px-3 py-1 text-base',
        label: 'px-3 py-2 text-base',
        icon: 'size-4.5',
        iconWrapper: 'size-4',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
