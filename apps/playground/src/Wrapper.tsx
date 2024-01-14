import * as stylex from '@stylexjs/stylex';
import { Flex } from '@utima/ui';

const styles = stylex.create({
  wrapper: {
    margin: '20px 0',
  },
});

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      gap={12}
      items='center'
      justify='start'
      wrap='wrap'
      style={styles.wrapper}
    >
      {children}
    </Flex>
  );
}
