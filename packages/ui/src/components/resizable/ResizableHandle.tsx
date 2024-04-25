import { GripVertical } from 'lucide-react';
import { memo, type ComponentPropsWithoutRef } from 'react';
import { PanelResizeHandle } from 'react-resizable-panels';

import { cn } from '@/utils';

import { resizableDef } from './Resizable.styles';

export interface ResizableHandleProps
  extends ComponentPropsWithoutRef<typeof PanelResizeHandle> {
  withHandle?: boolean;
  classNames?: {
    handle?: string;
    iconWrapper?: string;
    icon?: string;
  };
}

export const ResizableHandle = memo(function ResizableHandle({
  withHandle,
  className,
  classNames = {},
  ...props
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      className={cn(resizableDef.handle.handle, classNames?.handle, className)}
      {...props}
    >
      {withHandle && (
        <div
          className={cn(
            resizableDef.handle.iconWrapper,
            classNames?.iconWrapper,
          )}
        >
          <GripVertical
            className={cn(resizableDef.handle.icon, classNames?.icon)}
          />
        </div>
      )}
    </PanelResizeHandle>
  );
});
