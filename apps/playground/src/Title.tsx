import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  title: {
    margin: '20px 0',
    fontFamily: 'AppleSystemUIFont, sans-serif',
    fontWeight: 500,
    fontSize: '2rem',
  },
});

export function Title({ children }: { children: React.ReactNode }) {
  return <h2 {...stylex.props(styles.title)}>{children}</h2>;
}
