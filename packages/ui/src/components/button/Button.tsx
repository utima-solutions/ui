import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

const styles = stylex.create({
  base: {
    borderRadius: 4,
    border: 'none',
    padding: '8px 16px',
    fontSize: 16,
    fontWeight: 'bold',
    transition: 'all 0.2s ease-in-out',
  },
});

const variants = stylex.create({
  default: {
    backgroundColor: 'gray',
    color: 'white',
  },
  primary: {
    backgroundColor: {
      default: 'blue',
      ':hover': 'darkblue',
      ':active': 'lightBlue',
    },
    color: 'white',
  },
  secondary: {
    backgroundColor: 'orange',
    color: 'white',
  },
  accent: {
    backgroundColor: 'white',
    color: 'blue',
  },
});

export type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variants;
};

export function Button({ variant = 'default', ...restProps }: ButtonProps) {
  return (
    <button {...restProps} {...stylex.props(styles.base, variants[variant])} />
  );
}
