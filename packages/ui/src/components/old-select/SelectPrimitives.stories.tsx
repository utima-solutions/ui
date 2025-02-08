import type { Meta, StoryObj } from '@storybook/react';

import * as Select from './index';

const meta: Meta<typeof Select.Root> = {
  component: Select.Root,
  tags: ['autodocs'],
  title: 'Components/SelectPrimitives',
  args: {
    size: 'md',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Select.Root>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder='Placeholder' />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Group 1</Select.Label>
            <Select.Item value='1'>Russia</Select.Item>
            <Select.Item value='2'>Australia</Select.Item>
            <Select.Item value='3'>Antigua & Barbuda</Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.Label>Group 2</Select.Label>
            <Select.Item disabled value='21'>
              Turkey
            </Select.Item>
            <Select.Item disabled value='22'>
              Samoa
            </Select.Item>
            <Select.Item value='23'>Timor-Leste</Select.Item>
          </Select.Group>
        </Select.Content>
      </>
    ),
  },
};

export const Element: Story = {
  decorators: [
    (Story, context) => (
      <Select.Element size='md' {...context.args}>
        Select
      </Select.Element>
    ),
  ],
};
