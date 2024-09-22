import type { MetaFunction } from '@remix-run/node';
import { Button } from '@utima/ui';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='flex gap-3'>
      <Button>Click me</Button>
      <Button variant='danger'>Click me</Button>
      <Button outline>Click me</Button>
    </div>
  );
}
