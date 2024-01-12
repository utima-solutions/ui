import './app.css';

import * as stylex from '@stylexjs/stylex';
import { Button, Flex } from '@utima/ui';
import { colors, theme } from '@utima/ui/tokens/colors.stylex';

const customTheme = stylex.createTheme(colors, {
  ...theme,
});

function App() {
  return (
    <div {...stylex.props([customTheme])}>
      <Flex gap={12} items='center' justify='start' wrap='wrap'>
        <Button>Test button</Button>
        <Flex gap={24} items='center' justify='start'>
          <Button variant='secondary' size='sm'>
            Test button
          </Button>
          <Button variant='destructive'>Test button</Button>
        </Flex>
        <Button variant='destructive' size='lg'>
          Test button
        </Button>
      </Flex>
    </div>
  );
}

export default App;
