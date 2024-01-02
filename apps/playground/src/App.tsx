import './app.css';

import * as stylex from '@stylexjs/stylex';
import { Box, Button } from '@utima/ui';

const styles = stylex.create({
  override: {
    borderRadius: 0,
    padding: '20px',
    margin: 20,
    border: null,
    borderWidth: 20,
  },
});

function App() {
  return (
    <Box items='center' direction='col'>
      <Button>Testing button</Button>
      <Button variant='muted'>Testing button</Button>
      <Button variant='outline'>Testing button</Button>
      <Button variant='outline' style={styles.override}>
        Outline override
      </Button>
      <Button variant='secondary'>Testing button</Button>
      <Button variant='primary'>Testing button</Button>
    </Box>
  );
}

export default App;
