import type { Meta, StoryObj } from '@storybook/react';

import { InputControl } from './InputControl';
import { Form } from '..';

const meta: Meta<typeof InputControl> = {
  component: InputControl,
  tags: ['autodocs'],
  title: 'Controls/InputControl',
  args: {
    name: 'value',
    label: 'Input',
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

type Story = StoryObj<typeof InputControl>;

export const Basic: Story = {
  args: {},
};
