import { Slot } from '@radix-ui/react-slot';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { useLayout } from './useLayoutContext';

interface LayoutSidebarTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export const LayoutSidebarTrigger = memo(function LayoutSidebarTrigger({
  className,
  asChild,
  ...restProps
}: LayoutSidebarTriggerProps) {
  const { setSidebarOpened } = useLayout();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn('sidebar:hidden')}
      onClick={() => setSidebarOpened(v => !v)}
      {...restProps}
    />
  );
});
