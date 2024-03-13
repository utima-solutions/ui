import {
  Content,
  Root,
  Provider,
  Trigger,
  Portal,
} from '@radix-ui/react-tooltip';
import { memo, type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn } from '@/utils';

import { tooltipDef } from './Tooltip.styles';

export interface TooltipProps
  extends Omit<ComponentPropsWithoutRef<typeof Content>, 'title'>,
    Omit<ComponentPropsWithoutRef<typeof Root>, 'children'>,
    Omit<ComponentPropsWithoutRef<typeof Provider>, 'children'> {
  title: ReactNode;
}

export const Tooltip = memo(function Tooltip({
  className,
  delayDuration = 500,
  skipDelayDuration = 200,
  disableHoverableContent,
  title,
  children,
  defaultOpen,
  open,
  onOpenChange,
  sideOffset = 4,
  ...restProps
}: TooltipProps) {
  return (
    <Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            sideOffset={sideOffset}
            className={cn(tooltipDef.tooltip, className)}
            {...restProps}
          >
            {title}
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
});
