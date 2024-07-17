import type { Meta, StoryObj } from '@storybook/react';
import { Database } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  argTypes: {
    variant: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'ghost',
        'link',
      ],
    },
  },
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'md',
    outline: false,
    asChild: false,
    disabled: false,
    plain: false,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};
export const Outline: Story = { args: { outline: true } };
export const Plain: Story = { args: { plain: true } };
export const Loading: Story = { args: { loading: true, variant: 'success' } };
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
