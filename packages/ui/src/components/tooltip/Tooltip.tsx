import {
  Content,
  Root,
  Provider,
  Trigger,
  Portal,
} from '@radix-ui/react-tooltip';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';

import { tooltipDef } from './Tooltip.styles';

type TooltipProps = Omit<ComponentPropsWithoutRef<typeof Content>, 'title'> &
  Omit<ComponentPropsWithoutRef<typeof Root>, 'children'> &
  Omit<ComponentPropsWithoutRef<typeof Provider>, 'children'> & {
    title: ReactNode;
  };

export const Tooltip = forwardRef<ElementRef<typeof Content>, TooltipProps>(
  function (
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
      <Provider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
          <Trigger asChild>{children}</Trigger>
          <Portal>
            <Content
              ref={ref}
              sideOffset={sideOffset}
              className={cn(tooltipDef.tooltip, className)}
              {...props}
            >
              {title}
            </Content>
          </Portal>
        </Root>
      </Provider>
    );
  },
);
