import type { Meta, StoryObj } from '@storybook/react';

import { InputControl } from './InputControl';

const meta: Meta<typeof InputControl> = {
  component: InputControl,
  tags: ['autodocs'],
  title: 'Controls/InputControl',
  args: {
    name: 'Name',
    placeholder: 'Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Basic: Story = {
  args: {},
};
