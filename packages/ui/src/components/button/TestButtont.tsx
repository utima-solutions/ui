import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { forwardRef, ComponentProps } from 'react';

export type TestButtonProps = Omit<ComponentProps<'button'>, 'style'> & {
  asChild?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  style?: stylex.StyleXStyles;
};

export const TestButton = forwardRef<HTMLButtonElement, TestButtonProps>(
  (
    {
      size = 'default',
      variant = 'default',
      asChild = false,
      style,
      ...restProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref as any}
        {...stylex.props(styles.base, variants[variant], sizes[size], style)}
        {...restProps}
      />
    );
  },
);

const styles = stylex.create({
  base: {
    border: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    cursor: 'pointer',
  },
});

const variants = stylex.create({
  default: {
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    color: '#ffffff',
    backgroundColor: 'rgb(24, 24, 27)',
    ':hover': { backgroundColor: 'rgba(24, 24, 27,0.9)' },
    ':active': { backgroundColor: 'rgba(24, 24, 27,0.8)' },
  },
  destructive: {
    color: '#ffffff',
    backgroundColor: 'rgb(239, 68, 68)',
    ':hover': { backgroundColor: 'rgba(239, 68, 68,0.9)' },
    ':active': { backgroundColor: 'rgba(239, 68, 68,0.8)' },
  },
  secondary: {
    backgroundColor: 'rgb(244, 244, 245)',
    color: 'rgb(24, 24, 27)',
    ':hover': { backgroundColor: 'rgba(244, 244, 245,0.9)' },
    ':active': { backgroundColor: 'rgba(244, 244, 245,0.8)' },
  },
});

const sizes = stylex.create({
  default: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  sm: {
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  },
  lg: {
    paddingTop: '0.9rem',
    paddingBottom: '0.9rem',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    fontSize: '1.125rem',
  },
});
