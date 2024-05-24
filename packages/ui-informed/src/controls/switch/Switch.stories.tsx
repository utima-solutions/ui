import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';
import { Form } from '../..';

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
  title: 'Controls/SwitchControl',
  args: {
    name: 'input',
    label: 'Switch',
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

type Story = StoryObj<typeof Switch>;

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
