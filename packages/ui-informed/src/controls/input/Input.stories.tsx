import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Form } from '../..';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Controls/InputControl',
  args: {
    name: 'value',
    label: 'Input',
    readOnly: false,
    placeholder: 'Placeholder',
    tooltip: 'Tooltip',
  },
  decorators: [
    Story => (
      <Form initialValues={{ value: '' }}>
        <div className='flex flex-col sm:col-span-3'>
          <Story />
        </div>
      </Form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {},
};

export const XS: Story = {
  args: {
    size: 'xs',
  },
};

export const SM: Story = {
  args: {
    size: 'sm',
  },
};

export const LG: Story = {
  args: {
    size: 'lg',
  },
};
