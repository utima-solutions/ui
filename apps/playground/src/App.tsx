import './app.css';
import './tailwind.css';
import * as stylex from '@stylexjs/stylex';

import { EmotionTest } from './EmotionTest';
import { StylexTest } from './StylexTest';
import { TailwindTest } from './TailwindTest';
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
      <Title>TailwindTest</Title>
      <TailwindTest />
      <Title>EmotionCSS</Title>
      <EmotionTest />
    </div>
  );
}

export default App;
