import * as stylex from '@stylexjs/stylex';

export type FlexProps = {
  flex?: keyof typeof flexStyles;
  items?: keyof typeof itemsStyles;
  justify?: keyof typeof justifyStyles;
  wrap?: keyof typeof wrapStyles;
  vertical?: boolean;
  verticalReverse?: boolean;
  reverse?: boolean;
  gap?: number;
  children?: React.ReactNode;
  style?: stylex.StyleXStyles;
};

export function Flex({
  flex,
  items,
  justify,
  wrap,
  vertical,
  verticalReverse,
  reverse,
  gap = 0,
  style,
  ...restProps
}: FlexProps) {
  return (
    <div
      {...restProps}
      {...stylex.props(
        styles.base,
        vertical && styles.vertical,
        verticalReverse && styles.verticalReverse,
        reverse && styles.reverse,
        justify && justifyStyles[justify],
        wrap && wrapStyles[wrap],
        items && itemsStyles[items],
        flex && flexStyles[flex],
        styles.gap(gap),
        style,
      )}
    />
  );
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
  },
  reverse: { flexDirection: 'row-reverse' },
  vertical: { flexDirection: 'column' },
  verticalReverse: { flexDirection: 'column-reverse' },
  gap: (gap: number) => ({ gap }),
});

const wrapStyles = stylex.create({
  wrap: { flex: '1 1 auto' },
  wrapReverse: { flex: '0 1 auto' },
});

const flexStyles = stylex.create({
  identic: { flex: '1 1 0%' },
  auto: { flex: '1 1 auto' },
  initial: { flex: '0 1 auto' },
});

const itemsStyles = stylex.create({
  start: { alignItems: 'flex-start' },
  end: { alignItems: 'flex-end' },
  center: { alignItems: 'center' },
  baseline: { alignItems: 'baseline' },
  stretch: { alignItems: 'stretch' },
});

const justifyStyles = stylex.create({
  center: { justifyContent: 'center' },
  start: { justifyContent: 'flex-start' },
  end: { justifyContent: 'flex-end' },
});
