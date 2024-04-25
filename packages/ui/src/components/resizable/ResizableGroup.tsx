import { memo, type ComponentPropsWithoutRef } from 'react';
import { PanelGroup } from 'react-resizable-panels';

import { cn } from '@/utils';

import { resizableDef } from './Resizable.styles';

export interface ResizableGroupProps
  extends ComponentPropsWithoutRef<typeof PanelGroup> {
  withHandle?: boolean;
}

export const ResizableGroup = memo(function ResizableGroup({
  className,
  ...props
}: ResizableGroupProps) {
  return (
    <PanelGroup className={cn(resizableDef.panelGroup, className)} {...props} />
  );
});
