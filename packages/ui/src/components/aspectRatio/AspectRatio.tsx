import { Root } from '@radix-ui/react-aspect-ratio';
import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { aspectRatioDef } from './AspectRatio.styles';

export function AspectRatio({
  children,
  ...restProps
}: ComponentProps<typeof Root>) {
  return (
    <Root {...restProps}>
      <Slot className={aspectRatioDef.slot}>{children}</Slot>
    </Root>
  );
}
