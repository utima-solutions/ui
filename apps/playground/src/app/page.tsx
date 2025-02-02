import { Subtitle } from '@/components/subtitle';
import { Title } from '@/components/title';
import { Button, IconButton } from '@utima/ui';
import { Download, Mailbox } from 'lucide-react';

export default function Home() {
  return (
    <div className='grid mt-12 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col gap-4'>
        <Title>&lt;Button /&gt;</Title>
        <Subtitle>Variants</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button variant='primary'>Default</Button>
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
            <Button size='xs' variant='primary'>
            XS
            </Button>
          </div>
          <div>
            <Button size='sm' variant='primary'>
              SM
            </Button>
          </div>
          <div>
            <Button size='md' variant='primary'>
              Default
            </Button>
          </div>
          <div>
            <Button size='lg' variant='primary'>
              LG
            </Button>
          </div>
          <div>
            <Button size='xl' variant='primary'>
              XL
            </Button>
          </div>
        </div>
        <Subtitle>With icons</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Button size='xs' variant='primary'><Download className='size-10' /> Default</Button>
          </div>
          <div>
            <Button size='sm' variant='destructive'><Download /> Destructive</Button>
          </div>
          <div>
            <Button size='md' variant='ghost'><Download /> Ghost</Button>
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
            <Button size='xs' variant='primary' loading>Default</Button>
          </div>
          <div>
            <Button size='sm' variant='destructive' circle disabled loading>Destructive</Button>
          </div>
          <div>
            <Button size='md' variant='ghost' disabled><Download /> Ghost</Button>
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


      <div className='flex flex-col gap-4'>
        <Title>&lt;IconButton /&gt;</Title>
        <Subtitle>Variants</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <IconButton variant='primary'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='destructive'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='ghost'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='link'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='success'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='secondary'><Mailbox /></IconButton>
          </div>
          <div>
            <IconButton variant='outline'><Mailbox /></IconButton>
          </div>
        </div>
        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <IconButton size='xs' variant='primary'>
              <Download />
            </IconButton>
          </div>
          <div>
            <IconButton size='sm' variant='primary'>
              <Download />
            </IconButton>
          </div>
          <div>
            <IconButton size='md' variant='primary'>
              <Download />
            </IconButton>
          </div>
          <div>
            <IconButton size='lg' variant='primary'>
              <Download />
            </IconButton>
          </div>
          <div>
            <IconButton size='xl' variant='primary'>
              <Download />
            </IconButton>
          </div>
        </div>
        <Subtitle>With icons</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <IconButton size='xs' variant='primary'><Download /></IconButton>
          </div>
          <div>
            <IconButton size='sm' variant='destructive'><Download /></IconButton>
          </div>
          <div>
            <IconButton size='md' variant='ghost'><Download /></IconButton>
          </div>
          <div>
            <IconButton size='lg' variant='link'><Download /></IconButton>
          </div>
          <div>
            <IconButton size='xl' variant='success'><Download /></IconButton>
          </div>
        </div>
        <Subtitle>States</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <IconButton size='xs' variant='primary' loading><Download /></IconButton>
          </div>
          <div>
            <IconButton size='sm' variant='destructive' circle disabled loading><Download /></IconButton>
          </div>
          <div>
            <IconButton size='md' variant='ghost' disabled><Download /></IconButton>
          </div>
          <div>
            <IconButton size='lg' variant='link' disabled><Download /></IconButton>
          </div>
          <div>
            <IconButton size='xl' variant='success' asChild>
              <a href='/'>
                <Download />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
