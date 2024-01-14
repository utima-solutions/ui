import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { forwardRef, ComponentProps } from 'react';

import { buttonTokens } from '../../tokens/button.stylex';

export type ButtonProps = Omit<ComponentProps<'button'>, 'style'> & {
  asChild?: boolean;
  outline?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  style?: stylex.StyleXStyles;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      size = 'default',
      variant = 'primary',
      outline,
      asChild,
      style,
      ...restProps
    },
    ref,
  ) {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref as any}
        {...restProps}
        {...stylex.props(
          styles.base,
          variants[variant],
          outline && outlineVariants[variant],
          sizes[size],
          style,
        )}
      />
    );
  },
);

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonTokens.borderRadius,
    border: `${buttonTokens.borderWidth} solid ${buttonTokens.borderColor}`,
    fontWeight: buttonTokens.fontWeight,
    fontSize: buttonTokens.fontSize,
    lineHeight: buttonTokens.lineHeight,
    whiteSpace: 'nowrap',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    cursor: 'pointer',
  },
});

const variants = stylex.create({
  primary: {
    color: buttonTokens.primaryColor,
    background: buttonTokens.primaryBg,
    ':hover': {
      color: buttonTokens.primaryHoverColor,
      background: buttonTokens.primaryHoverBg,
    },
    ':active': {
      color: buttonTokens.primaryActiveColor,
      background: buttonTokens.primaryActiveBg,
    },
  },
  secondary: {
    color: buttonTokens.secondaryColor,
    background: buttonTokens.secondaryBg,
    ':hover': {
      color: buttonTokens.secondaryHoverColor,
      background: buttonTokens.secondaryHoverBg,
    },
    ':active': {
      color: buttonTokens.secondaryActiveColor,
      background: buttonTokens.secondaryActiveBg,
    },
  },
});

const outlineVariants = stylex.create({
  primary: {
    color: buttonTokens.primaryBg,
    borderColor: buttonTokens.primaryBg,
    background: 'transparent',
    ':hover': {
      color: buttonTokens.primaryHoverBg,
      borderColor: buttonTokens.primaryHoverBg,
      background: 'transparent',
    },
    ':active': {
      color: buttonTokens.primaryActiveBg,
      borderColor: buttonTokens.primaryActiveBg,
      background: 'transparent',
    },
  },
  secondary: {
    color: buttonTokens.secondaryBg,
    borderColor: buttonTokens.secondaryBg,
    background: 'transparent',
    ':hover': {
      color: buttonTokens.secondaryHoverBg,
      borderColor: buttonTokens.secondaryHoverBg,
      background: 'transparent',
    },
    ':active': {
      color: buttonTokens.secondaryActiveBg,
      borderColor: buttonTokens.secondaryActiveBg,
      background: 'transparent',
    },
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
