import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
  title: 'Components/Tooltip',
  args: {
    title: 'Tooltip content',
    delayDuration: 700,
    skipDelayDuration: 300,
    disableHoverableContent: false,
    defaultOpen: false,
    open: undefined,
    sideOffset: 4,
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: <button type='button'>Hover me</button>,
  },
};
