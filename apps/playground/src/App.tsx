import './app.css';
import * as stylex from '@stylexjs/stylex';

import { StylexTest } from './StylexTest';
import { Title } from './Title';

const styles = stylex.create({
  container: {
    padding: '16px',
  },
});

function App() {
  return (
    <div {...stylex.props(styles.container)}>
      <Title>StyleX</Title>
      <StylexTest />
      <Title>TailwindCSS</Title>
      <StylexTest />
    </div>
  );
}

export default App;
