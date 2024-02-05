import type { Meta, StoryObj } from '@storybook/react';

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
