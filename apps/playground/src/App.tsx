import './app.css';

import * as stylex from '@stylexjs/stylex';
import { Box, Button } from '@utima/ui';
import { primary } from '@utima/ui/tokens/colors.stylex';

const styles = stylex.create({
  override: {
    borderRadius: 0,
    padding: '20px',
    margin: 20,
    border: null,
    borderWidth: 20,
  },
});

const theme = stylex.createTheme(primary, {
  default: 'blue',
  '50': '#f0fdfa',
  '100': '#ccfbf1',
  '200': '#99f6e4',
  '300': '#5eead4',
  '400': '#2dd4bf',
  '500': '#14b8a6',
  '600': '#0d9488',
  '700': '#0f766e',
  '800': '#115e59',
  '900': '#134e4a',
  '950': '#042f2e',
});

function App() {
  return (
    <div {...stylex.props([theme])}>
      <Box items='center' direction='col'>
        <Button>Default button</Button>
        <Button variant='muted'>Muted button</Button>
        <Button variant='outline'>Outline button</Button>
        <Button variant='outline' style={styles.override}>
          Outline override
        </Button>
        <Button variant='secondary'>Secondary button</Button>
        <Button variant='primary'>Primary button</Button>
      </Box>
    </div>
  );
}

export default App;
