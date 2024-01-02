import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

export type BoxProps = ComponentProps<'div'> & {
  flex?: keyof typeof flexStyles;
  items?: keyof typeof alignStyles;
  justify?: keyof typeof justifyStyles;
  direction?: keyof typeof directionStyles;
};

export function Box({
  flex,
  items,
  justify,
  direction,
  ...restProps
}: BoxProps) {
  return (
    <div
      {...restProps}
      {...stylex.props(
        styles.base,
        flex && flexStyles[flex],
        items && alignStyles[items],
        justify && justifyStyles[justify],
        direction && directionStyles[direction],
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
  },
});

const flexStyles = stylex.create({
  1: {
    flex: '1 1 0%',
  },
  auto: {
    flex: '1 1 auto',
  },
  initial: {
    flex: '0 1 auto',
  },
  none: {
    flex: 'none',
  },
});

const alignStyles = stylex.create({
  center: {
    alignItems: 'center',
  },
  'flex-start': {
    alignItems: 'flex-start',
  },
  'flex-end': {
    alignItems: 'flex-end',
  },
});

const justifyStyles = stylex.create({
  center: {
    justifyContent: 'center',
  },
  'flex-start': {
    justifyContent: 'flex-start',
  },
  'flex-end': {
    justifyContent: 'flex-end',
  },
});

const directionStyles = stylex.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  'row-reverse': {
    flexDirection: 'row-reverse',
  },
  'col-reverse': {
    flexDirection: 'column-reverse',
  },
});
