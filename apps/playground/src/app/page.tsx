import { Subtitle } from '@/components/subtitle';
import { Title } from '@/components/title';
import { Button } from '@utima/ui';
import { Download } from 'lucide-react';

export default function Home() {
  return (
    <div className='grid mt-12 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col gap-4'>
        <Title>&lt;Button /&gt;</Title>
        <Subtitle>Variants</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button variant='default'>Default</Button>
          </div>
          <div>
            <Button variant='destructive'>Destructive</Button>
          </div>
          <div>
            <Button variant='ghost'>Ghost</Button>
          </div>
          <div>
            <Button variant='link'>Link</Button>
          </div>
          <div>
            <Button variant='success'>Success</Button>
          </div>
          <div>
            <Button variant='secondary'>Secondary</Button>
          </div>
          <div>
            <Button variant='outline'>Outline</Button>
          </div>
        </div>
        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button size='xs' variant='default'>
            XS
            </Button>
          </div>
          <div>
            <Button size='sm' variant='default'>
              SM
            </Button>
          </div>
          <div>
            <Button size='default' variant='default'>
              Default
            </Button>
          </div>
          <div>
            <Button size='lg' variant='default'>
              LG
            </Button>
          </div>
          <div>
            <Button size='xl' variant='default'>
              XL
            </Button>
          </div>
        </div>
        <Subtitle>With icons</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button size='xs' variant='default'><Download className='size-10' /> Default</Button>
          </div>
          <div>
            <Button size='sm' variant='destructive'><Download /> Destructive</Button>
          </div>
          <div>
            <Button size='default' variant='ghost'><Download /> Ghost</Button>
          </div>
          <div>
            <Button size='lg' variant='link'><Download /> Link</Button>
          </div>
          <div>
            <Button size='xl' variant='success'><Download /> Success</Button>
          </div>
        </div>
        <Subtitle>States</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button size='xs' variant='default' loading>Default</Button>
          </div>
          <div>
            <Button size='sm' variant='destructive' disabled loading>Destructive</Button>
          </div>
          <div>
            <Button size='default' variant='ghost' disabled><Download /> Ghost</Button>
          </div>
          <div>
            <Button size='lg' variant='link' disabled><Download /> Link</Button>
          </div>
          <div>
            <Button size='xl' variant='success' asChild>
              <a href='/'>
                As child
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
