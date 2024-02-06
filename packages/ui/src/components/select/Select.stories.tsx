import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { SelectItem } from './SelectItem';

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
  args: {
    size: 'md',
    placeholder: 'Placeholder',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <SelectItem value='1'>Tipmageb</SelectItem>
        <SelectItem value='2'>Zugicoab</SelectItem>
        <SelectItem value='3'>Ecoifoba</SelectItem>
      </>
    ),
  },
};
