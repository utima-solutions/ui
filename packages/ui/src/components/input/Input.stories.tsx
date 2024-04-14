import type { Meta, StoryObj } from '@storybook/react';
import { Cable } from 'lucide-react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {};

export const AddonBefore: Story = {
  args: {
    addonBefore: 'http://',
  },
};

export const AddonAfter: Story = {
  args: {
    addonAfter: <Cable className='size-4' />,
  },
};

export const AddonBoth: Story = {
  args: {
    addonBefore: 'http://',
    addonAfter: '.com',
  },
};
