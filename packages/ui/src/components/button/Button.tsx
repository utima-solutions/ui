import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

import { primary } from '../../tokens/colors.stylex';

export type ButtonProps = Omit<ComponentProps<'button'>, 'style'> & {
  variant?: keyof typeof variants;
  style?: stylex.StyleXStyles;
};

export function Button({
  variant = 'default',
  style,
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      {...stylex.props(styles.base, variants[variant], style)}
    />
  );
}

const styles = stylex.create({
  base: {
    borderRadius: 4,
    border: 'none',
    padding: '8px 16px',
    fontSize: 16,
    fontWeight: 'bold',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
});

const variants = stylex.create({
  default: {
    backgroundColor: primary.default,
    color: 'white',
    ':hover': {
      backgroundColor: 'darkgray',
    },
    ':active': {
      backgroundColor: 'lightgray',
    },
  },
  primary: {
    backgroundColor: primary[500],
    color: 'white',
    ':hover': {
      backgroundColor: primary[600],
    },
    ':active': {
      backgroundColor: primary[400],
    },
  },
  secondary: {
    backgroundColor: 'orange',
    color: 'white',
    ':hover': {
      backgroundColor: 'darkorange',
    },
    ':active': {
      backgroundColor: 'lightcoral',
    },
  },
  muted: {
    opacity: 0.5,
    backgroundColor: 'gray',
    color: 'white',
    ':hover': {
      backgroundColor: 'darkgray',
    },
    ':active': {
      backgroundColor: 'lightgray',
    },
  },
  outline: {
    border: '2px solid',
    backgroundColor: 'transparent',
    color: 'black',
    ':hover': {
      borderColor: 'darkgray',
    },
    ':active': {
      borderColor: 'lightgray',
    },
  },
});
