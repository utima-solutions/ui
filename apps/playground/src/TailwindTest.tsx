import { TailwindButton } from '@utima/ui';
import { Wrapper } from './Wrapper';


export function TailwindTest() {
  return (
    <div>
      <Wrapper>
        <TailwindButton variant='primary'>Primary button</TailwindButton>
        <TailwindButton variant='secondary' size='sm'>
          Secondary button
        </TailwindButton>
      </Wrapper>
      <Wrapper>
        <TailwindButton outline variant='primary'>
          Primary outline button
        </TailwindButton>
        <TailwindButton outline variant='secondary' size='sm'>
          Secondary outline button
        </TailwindButton>
      </Wrapper>
      <Wrapper>
        <TailwindButton outline variant='primary'>
          Custom styles override
        </TailwindButton>
      </Wrapper>
      <div>
        <Wrapper>
          <TailwindButton variant='primary'>Theme Override Primary button</TailwindButton>
          <TailwindButton variant='secondary' size='sm'>
            Theme Override Secondary button
          </TailwindButton>
        </Wrapper>
      </div>
    </div>
  );
}
