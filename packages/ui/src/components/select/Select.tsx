import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { Root, Trigger, Content, Value } from './index';

type SelectProps = ComponentPropsWithoutRef<typeof Root> & {
  placeholder?: string;
  id?: string;
};

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  ({ children, placeholder, id, ...restProps }, ref) => {
    return (
      <Root {...restProps}>
        <Trigger ref={ref} id={id}>
          <Value placeholder={placeholder} />
        </Trigger>
        <Content>{children}</Content>
      </Root>
    );
  },
);
