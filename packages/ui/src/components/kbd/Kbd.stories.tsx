import type { Meta, StoryObj } from '@storybook/react';

import { Kbd } from './Kbd';

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  tags: ['autodocs'],
  title: 'Components/Kbd',
  args: {
    children: 'Ctrl + X',
    size: 'xs',
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Basic: Story = {};
