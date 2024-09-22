import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  component: Separator,
  tags: ['autodocs'],
  title: 'Components/Separator',
  args: {
    orientation: 'horizontal',
    decorative: true,
    children: (
      <div className='py-6'>
        <div className='space-y-1'>
          <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
          <p className='text-muted-foreground text-sm'>
            An open-source UI component library.
          </p>
        </div>
        <Separator className='my-4' />
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <div>Blog</div>
          <Separator orientation='vertical' />
          <div>Docs</div>
          <Separator orientation='vertical' />
          <div>Source</div>
        </div>
        <Separator className='my-4' />
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Basic: Story = {};
