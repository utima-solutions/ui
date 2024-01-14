import { EmotionButton } from '@utima/ui';
import { Wrapper } from './Wrapper';

export function EmotionTest() {
  return (
    <div>
      <Wrapper>
        <EmotionButton variant='primary'>Primary button</EmotionButton>
        <EmotionButton variant='secondary'>
          Secondary button
        </EmotionButton>
      </Wrapper>
      <Wrapper>
        <EmotionButton variant='primary'>
          Primary outline button
        </EmotionButton>
        <EmotionButton variant='secondary'>
          Secondary outline button
        </EmotionButton>
      </Wrapper>
      <Wrapper>
        <EmotionButton variant='primary'>
          Custom styles override
        </EmotionButton>
      </Wrapper>
      <div className='tailwind-override'>
        <Wrapper>
          <EmotionButton variant='primary'>Theme Override Primary button</EmotionButton>
          <EmotionButton variant='secondary'>
            Theme Override Secondary button
          </EmotionButton>
        </Wrapper>
      </div>
    </div>
  );
}
