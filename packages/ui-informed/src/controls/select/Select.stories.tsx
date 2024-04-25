import type { Meta, StoryObj } from '@storybook/react';
import { SelectItem } from '@utima/ui';

import { Select } from './Select';
import { Form } from '../..';

function SelectItems() {
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <>
      {items.map(item => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </>
  );
}

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Controls/SelectControl',
  args: {
    name: 'value',
    label: 'Select',
    placeholder: 'Placeholder',
    readOnly: false,
    tooltip: 'Tooltip',
    children: <SelectItems />,
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

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {},
};
