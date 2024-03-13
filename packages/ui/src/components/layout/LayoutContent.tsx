import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { useLayoutContext } from './useLayoutContext';

export const LayoutContent = memo(function LayoutContent({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  const { withSidebar, withHeader, open, setOpen } = useLayoutContext();

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={cn(layoutDef.content.overlay)}
        />
      )}
      <div
        className={cn(
          layoutDef.content.base,
          withSidebar && layoutDef.content.withSidebar,
          withHeader && layoutDef.content.withHeader,
          className,
        )}
        {...restProps}
      />
    </>
  );
});
