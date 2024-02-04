import './componentOverrides';
import './app.css';
import { Button } from '@utima/ui';
import { PlusCircle } from 'lucide-react';

function App() {
  return (
    <div>
      <div className='flex flex-col gap-5 p-5'>
        <h4 className='text-xl font-semibold text-foreground'>Buttons</h4>
        <div className='flex flex-wrap gap-5'>
          <Button size='lg' icon={<PlusCircle size={18} />}>
            Primary
          </Button>
          <Button variant='secondary' size='lg' icon={<PlusCircle size={18} />}>
            Secondary
          </Button>
          <Button variant='accent'>Accent</Button>
          <Button loading variant='danger'>
            Danger
          </Button>
          <Button variant='success'>Success</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='link'>Link</Button>
          <Button variant='warning'>Warning</Button>
          <Button variant='secondary' asChild>
            <a href='/'>asChild</a>
          </Button>
        </div>
        <div className='flex flex-wrap gap-5'>
          <Button size='lg' outline>
            <PlusCircle size={14} />
            Primary
          </Button>
          <Button outline variant='secondary'>
            Secondary
          </Button>
          <Button outline variant='accent'>
            Accent
          </Button>
          <Button outline variant='danger'>
            Danger
          </Button>
          <Button outline variant='success'>
            Success
          </Button>
          <Button outline variant='ghost'>
            Ghost
          </Button>
          <Button outline variant='link'>
            Link
          </Button>
          <Button outline variant='warning'>
            Warning
          </Button>
          <Button variant='secondary' asChild>
            <a href='/'>asChild</a>
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 p-5'>
        <h4 className='text-xl font-semibold text-foreground'>Avatar</h4>
        <div className='flex flex-wrap gap-5'>
          {/* <Avatar /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
