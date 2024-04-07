import type { Meta, StoryObj } from '@storybook/react';
import { Database } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  args: {
    children: 'Button',
    size: 'md',
    outline: false,
    asChild: false,
    disabled: false,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};
export const Outline: Story = { args: { outline: true } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

export const Icon: Story = {
  args: {
    size: 'icon-md',
    icon: <Database size={18} />,
    children: null,
  },
};

export const Multiline: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  decorators: [
    Story => (
      <div style={{ width: 50 }}>
        <Story />
      </div>
    ),
  ],
};
