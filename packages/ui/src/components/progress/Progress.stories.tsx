import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';
import { progressDef } from './Progress.styles';

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ['autodocs'],
  title: 'Components/Progress',
  args: {
    outline: false,
    variant: 'primary',
    size: 'md',
    value: 15,
    max: 100,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(progressDef.variants.variant),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.keys(progressDef.variants.size),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Basic: Story = {};
export const Outline: Story = {
  args: {
    outline: true,
  },
};

export const OutlineDanger: Story = {
  args: {
    outline: true,
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};
