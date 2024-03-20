import type { Meta, StoryObj } from '@storybook/react';

import { InputControl } from './InputControl';

const meta: Meta<typeof InputControl> = {
  component: InputControl,
  tags: ['autodocs'],
  title: 'Controls/InputControl',
  args: {
    label: 'Label',
    name: 'Name',
    placeholder: 'Placeholder',
    fieldState: {
      value: 'value',
      // maskedValue: unknown,
      // error: unknown,
      // modified: boolean,
      // touched: boolean,
      // pristine: boolean,
      // dirty: boolean,
      // valid: boolean,
      // invalid: boolean,
      // showError: boolean,
      // validating: boolean,
      // focused: boolean,
      // data: unknown,
      // gathering: boolean,
      // memory: unknown,
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Basic: Story = {
  args: {},
};
