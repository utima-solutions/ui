import { css } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef, ComponentProps } from 'react';

const emotionButtonCss = {
  base: css({
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
  }),
  variants: {
    default: css({
      boxShadow:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      color: '#ffffff',
      backgroundColor: 'rgb(24, 24, 27)',
      ':hover': { backgroundColor: 'rgba(24, 24, 27,0.9)' },
      ':active': { backgroundColor: 'rgba(24, 24, 27,0.8)' },
    }),
  },
};

export type EmotionButtonProps = Omit<ComponentProps<'button'>, 'style'> & {
  asChild?: boolean;
  // variant?: keyof typeof variants;
  // size?: keyof typeof sizes;
  // style?: stylex.StyleXStyles;
};

export const EmotionButton = forwardRef<HTMLButtonElement, EmotionButtonProps>(
  function EmotionButton({ asChild, ...restProps }, ref) {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        // @ts-expect-error asdf
        css={emotionButtonCss.base}
        ref={ref as any}
        // {...stylex.props(styles.base, variants[variant], sizes[size], style)}
        {...restProps}
      />
    );
  },
);
