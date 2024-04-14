import type { Meta, StoryObj } from '@storybook/react';
import { Cable } from 'lucide-react';

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

export const AddonBefore: Story = {
  args: {
    addonBefore: 'http://',
  },
};

export const AddonAfter: Story = {
  args: {
    addonAfter: <Cable className='size-4' />,
  },
};

export const AddonBoth: Story = {
  args: {
    addonBefore: 'http://',
    addonAfter: '.com',
  },
};
