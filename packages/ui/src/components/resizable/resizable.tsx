import { memo, type ComponentPropsWithoutRef } from 'react';
import { PanelGroup } from 'react-resizable-panels';

import { GripVertical } from 'lucide-react';
import { PanelResizeHandle } from 'react-resizable-panels';

import { cn } from '@/utils';

export interface ResizableHandleProps
  extends ComponentPropsWithoutRef<typeof PanelResizeHandle> {
  withHandle?: boolean;
  handleClassName?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export const ResizableHandle = memo(function ResizableHandle({
  withHandle,
  className,
  handleClassName,
  iconWrapperClassName,
  iconClassName,
  ...props
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      data-uui-resizable-handle
      className={cn(
        'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div
          data-uui-resizable-handle-icon-wrapper
          className={cn(
            'z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border',
            iconWrapperClassName,
          )}
        >
          <GripVertical
            data-uui-resizable-handle-icon
            className={cn('h-2.5 w-2.5', iconClassName)}
          />
        </div>
      )}
    </PanelResizeHandle>
  );
});

export interface ResizableGroupProps
  extends ComponentPropsWithoutRef<typeof PanelGroup> {
  withHandle?: boolean;
}

export const ResizableGroup = memo(function ResizableGroup({
  className,
  ...props
}: ResizableGroupProps) {
  return (
    <PanelGroup
      data-uui-resizable-group
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  );
});
