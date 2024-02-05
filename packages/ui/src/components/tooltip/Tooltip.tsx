import * as RTooltip from '@radix-ui/react-tooltip';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';

import { tooltipDef } from './Tooltip.styles';

type TooltipProps = Omit<
  ComponentPropsWithoutRef<typeof RTooltip.Content>,
  'title'
> &
  Omit<ComponentPropsWithoutRef<typeof RTooltip.Root>, 'children'> &
  Omit<ComponentPropsWithoutRef<typeof RTooltip.Provider>, 'children'> & {
    title: ReactNode;
  };

export const Tooltip = forwardRef<
  ElementRef<typeof RTooltip.Content>,
  TooltipProps
>(function (
  {
    className,
    delayDuration = 700,
    skipDelayDuration = 300,
    disableHoverableContent,
    title,
    children,
    defaultOpen,
    open,
    onOpenChange,
    sideOffset = 4,
    ...props
  },
  ref,
) {
  return (
    <RTooltip.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <RTooltip.Root
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      >
        <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(tooltipDef.tooltip, className)}
            {...props}
          >
            {title}
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
});
