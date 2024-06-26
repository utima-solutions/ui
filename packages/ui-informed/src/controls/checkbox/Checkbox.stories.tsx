import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Form } from '../..';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Controls/CheckboxControl',
  args: {
    name: 'input',
    label: 'Checkbox',
    tooltip: 'Tooltip',
    description: 'Description',
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

type Story = StoryObj<typeof Checkbox>;

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
