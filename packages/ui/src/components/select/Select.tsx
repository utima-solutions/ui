import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { Root, Trigger, Content, Value } from './index';

export interface SelectProps
  extends ComponentPropsWithoutRef<typeof Root>,
    Pick<
      ComponentPropsWithoutRef<typeof Content>,
      | 'onCloseAutoFocus'
      | 'onEscapeKeyDown'
      | 'onPointerDownOutside'
      | 'position'
      | 'side'
      | 'sideOffset'
      | 'align'
      | 'alignOffset'
      | 'avoidCollisions'
      | 'collisionBoundary'
      | 'collisionPadding'
      | 'arrowPadding'
      | 'sticky'
      | 'hideWhenDetached'
    > {
  placeholder?: string;
  id?: string;
}

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    {
      children,
      placeholder,
      id,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      position,
      side,
      sideOffset,
      align,
      alignOffset,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      arrowPadding,
      sticky,
      hideWhenDetached,
      ...restProps
    },
    ref,
  ) => {
    return (
      <Root {...restProps}>
        <Trigger ref={ref} id={id}>
          <Value placeholder={placeholder} />
        </Trigger>
        <Content
          onCloseAutoFocus={onCloseAutoFocus}
          onEscapeKeyDown={onEscapeKeyDown}
          onPointerDownOutside={onPointerDownOutside}
          position={position}
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          avoidCollisions={avoidCollisions}
          collisionBoundary={collisionBoundary}
          collisionPadding={collisionPadding}
          arrowPadding={arrowPadding}
          sticky={sticky}
          hideWhenDetached={hideWhenDetached}
        >
          {children}
        </Content>
      </Root>
    );
  },
);
