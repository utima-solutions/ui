import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
  title: 'Components/Switch',
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {},
};
