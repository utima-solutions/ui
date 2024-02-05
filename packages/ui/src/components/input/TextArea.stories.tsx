import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    variant: 'default',
    rows: 3,
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {};
