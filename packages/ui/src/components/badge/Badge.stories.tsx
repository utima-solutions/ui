import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  title: 'Components/Badge',
  args: {
    children: 'Badge',
    size: 'md',
    outline: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {};
export const Outline: Story = { args: { outline: true } };
export const Disabled: Story = { args: { disabled: true } };
