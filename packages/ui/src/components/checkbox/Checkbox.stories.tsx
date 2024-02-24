import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Label } from '../label/Label';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
  args: {
    id: 'checkbox-id',
    disabled: false,
    required: false,
  },
  decorators: [
    Story => (
      <div className='flex items-center gap-2'>
        <Story />
        <Label htmlFor='checkbox-id'>Checkbox</Label>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {};
