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
        <TailwindButton className='p-6 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-700 rounded-full' outline variant='primary'>
          Custom styles override
        </TailwindButton>
      </Wrapper>
      <div className='tailwind-override'>
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
