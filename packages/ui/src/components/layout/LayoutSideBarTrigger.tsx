import { Slot } from '@radix-ui/react-slot';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { useLayoutContext } from './useLayoutContext';

interface LayoutSideBarTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export const LayoutSideBarTrigger = memo(function LayoutSideBarTrigger({
  className,
  asChild,
  ...restProps
}: LayoutSideBarTriggerProps) {
  const { setOpen } = useLayoutContext();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn('sm:hidden')}
      onClick={() => setOpen(v => !v)}
      {...restProps}
    />
  );
});
