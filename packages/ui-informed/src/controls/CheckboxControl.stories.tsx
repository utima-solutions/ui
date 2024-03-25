import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxControl } from './CheckboxControl';
import { Form } from '..';

const meta: Meta<typeof CheckboxControl> = {
  component: CheckboxControl,
  tags: ['autodocs'],
  title: 'Controls/CheckboxControl',
  args: {
    name: 'input',
    label: 'Checkbox',
    tooltip: 'Tooltip',
  },
  decorators: [
    Story => (
      <Form initialValues={{ input: false }}>
        <div className='flex flex-col sm:col-span-3'>
          <Story />
        </div>
      </Form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CheckboxControl>;

export const Basic: Story = {
  args: {},
};
