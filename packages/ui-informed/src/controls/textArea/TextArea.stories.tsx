import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import { Form } from '../..';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ['autodocs'],
  title: 'Controls/TextAreaControl',
  args: {
    name: 'value',
    label: 'TextArea',
    placeholder: 'Placeholder',
    readOnly: false,
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

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {},
};
