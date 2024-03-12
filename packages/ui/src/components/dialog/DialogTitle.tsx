import { Title } from '@radix-ui/react-dialog';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...restProps }, ref) => (
  <Title ref={ref} className={cn(dialogDef.title, className)} {...restProps} />
));
