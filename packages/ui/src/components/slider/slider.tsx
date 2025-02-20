import * as SliderPrimitive from '@radix-ui/react-slider';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '../../utils';

export const sliderVariants = tv({
  slots: {
    root: 'relative touch-none select-none',
    track: 'relative grow overflow-hidden rounded-full',
    range: 'absolute',
    thumb:
      'focus-visible:ring-ring block border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  },
  variants: {
    variant: {
      primary: {
        track: 'bg-primary/20',
        range: 'bg-primary',
        thumb: 'border-primary/50 bg-background',
      },
      success: {
        track: 'bg-success/20',
        range: 'bg-success',
        thumb: 'border-success/50 bg-background',
      },
      destructive: {
        track: 'bg-destructive/20',
        range: 'bg-destructive',
        thumb: 'border-destructive/50 bg-background',
      },
      secondary: {
        track: 'bg-secondary/20',
        range: 'bg-secondary',
        thumb: 'border-secondary/50 bg-background',
      },
      outline: {
        track: 'border-input bg-background shadow-xs border',
        range: 'bg-border/75',
        thumb: 'border-border/50 bg-background',
      },
    },
    orientation: {
      horizontal: {
        root: 'flex w-full items-center',
        track: 'h-1.5 w-full',
        range: 'h-full',
        thumb: '',
      },
      vertical: {
        root: 'flex h-full items-center',
        track: 'h-full w-1.5',
        range: 'w-full',
        thumb: 'translate-x-[-50%]',
      },
    },
    size: {
      xs: {
        thumb: 'size-3',
      },
      sm: {
        thumb: 'size-4',
      },
      md: {
        thumb: 'size-5',
      },
      lg: {
        thumb: 'size-6',
      },
      xl: {
        thumb: 'size-7',
      },
    },
    shape: {
      circle: {
        thumb: 'rounded-full',
      },
      square: {
        thumb: 'rounded-md',
      },
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      orientation: 'vertical',
      class: {
        track: 'w-1',
        thumb: '-translate-x-1',
      },
    },
    {
      size: 'xs',
      orientation: 'horizontal',
      class: {
        track: 'h-1',
      },
    },
    {
      size: 'sm',
      orientation: 'vertical',
      class: {
        track: 'w-1.5',
        thumb: '-translate-x-[0.3125rem]',
      },
    },
    {
      size: 'sm',
      orientation: 'horizontal',
      class: {
        track: 'h-1.5',
      },
    },
    {
      size: 'md',
      orientation: 'vertical',
      class: {
        track: 'w-2',
        thumb: '-translate-x-1.5',
      },
    },
    {
      size: 'md',
      orientation: 'horizontal',
      class: {
        track: 'h-2',
      },
    },
    {
      size: 'lg',
      orientation: 'vertical',
      class: {
        track: 'w-3',
        thumb: '-translate-x-1.5',
      },
    },
    {
      size: 'lg',
      orientation: 'horizontal',
      class: {
        track: 'h-3',
      },
    },
    {
      size: 'xl',
      orientation: 'vertical',
      class: {
        track: 'w-4',
        thumb: '-translate-x-1.5',
      },
    },
    {
      size: 'xl',
      orientation: 'horizontal',
      class: {
        track: 'h-4',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    orientation: 'horizontal',
    shape: 'circle',
  },
});

export interface SliderProps
  extends Omit<
      ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
      'asChild'
    >,
    VariantProps<typeof sliderVariants> {
  trackClassName?: string;
  rangeClassName?: string;
  thumbClassName?: string;
}

export const Slider = forwardRef<
  ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      variant,
      size,
      shape,
      orientation,
      trackClassName,
      rangeClassName,
      thumbClassName,
      ...props
    },
    ref,
  ) => {
    const { root, track, range, thumb } = sliderVariants({
      variant,
      size,
      orientation,
      shape,
    });

    return (
      <SliderPrimitive.Root
        ref={ref}
        data-uui-slider
        orientation={orientation}
        className={cn(root(), className)}
        {...props}
      >
        <SliderPrimitive.Track
          data-uui-slider-track
          className={cn(track(), trackClassName)}
        >
          <SliderPrimitive.Range
            data-uui-slider-range
            className={cn(range(), rangeClassName)}
          />
        </SliderPrimitive.Track>
        {Array.isArray(props.defaultValue) ? (
          props.defaultValue.map((value, index) => (
            <SliderPrimitive.Thumb
              key={index}
              data-uui-slider-thumb
              className={cn(thumb(), thumbClassName)}
            />
          ))
        ) : (
          <SliderPrimitive.Thumb
            data-uui-slider-thumb
            className={cn(thumb(), thumbClassName)}
          />
        )}
      </SliderPrimitive.Root>
    );
  },
);
