import * as stylex from '@stylexjs/stylex';
import { Button } from '@utima/ui';
import { buttonTokens, buttonTheme } from '@utima/ui/tokens/button.stylex';
import { Wrapper } from './Wrapper';

const customButtonTheme = stylex.createTheme(buttonTokens, {
  ...buttonTheme,
  borderWidth: '2px',
  borderColor: 'red',
  fontWeight: '600',
  primaryBg: '#CC0000',
  primaryColor: 'black',
  secondaryBg: '#00CC00',
});

const styles = stylex.create({
  btn: {
    fontWeight: 'bold',
    color: '#232323',
    border: 'none',
    background: null,
    boxShadow: '0 0 5px 2px #232323',
  },
});

export function StylexTest() {
  return (
    <div>
      <Wrapper>
        <Button variant='primary'>Primary button</Button>
        <Button variant='secondary' size='sm'>
          Secondary button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button outline variant='primary'>
          Primary outline button
        </Button>
        <Button outline variant='secondary' size='sm'>
          Secondary outline button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button outline variant='primary' style={styles.btn}>
          Custom styles override
        </Button>
      </Wrapper>
      <div {...stylex.props(customButtonTheme)}>
      <Wrapper>
        <Button variant='primary'>Theme Override Primary button</Button>
        <Button variant='secondary' size='sm'>
          Theme Override Secondary button
        </Button>
        </Wrapper>
        </div>
    </div>
  );
}
