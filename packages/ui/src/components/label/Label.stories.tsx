import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
  args: {
    children: 'Label',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Basic: Story = {};
