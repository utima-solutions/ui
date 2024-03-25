import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaControl } from './TextAreaControl';
import { Form } from '..';

const meta: Meta<typeof TextAreaControl> = {
  component: TextAreaControl,
  tags: ['autodocs'],
  title: 'Controls/TextAreaControl',
  args: {
    name: 'value',
    label: 'TextArea',
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

type Story = StoryObj<typeof TextAreaControl>;

export const Basic: Story = {
  args: {},
};
