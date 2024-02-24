import { Title } from '@radix-ui/react-dialog';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

type DialogTitleProps = ComponentPropsWithoutRef<typeof Title>;

export const DialogTitle = forwardRef<
  ElementRef<typeof Title>,
  DialogTitleProps
>(({ className, ...restProps }, ref) => (
  <Title ref={ref} className={cn(dialogDef.title, className)} {...restProps} />
));
