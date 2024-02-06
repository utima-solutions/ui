import { Trigger, Icon } from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef, selectStyles } from './select.styles';
import { useSelectContext } from './useSelectContext';

export const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(function SelectTrigger({ className, children, ...props }, ref) {
  const { size, variant } = useSelectContext();

  return (
    <Trigger
      ref={ref}
      className={cn(
        selectDef.trigger,
        selectStyles({ size, variant }),
        className,
      )}
      {...props}
    >
      {children}
      <Icon asChild>
        <ChevronDown size={16} className='text-primary opacity-75' />
      </Icon>
    </Trigger>
  );
});
