import type { Meta, StoryObj } from '@storybook/react';

import { Toast, toast } from './Toast';
import { Button } from '../button/button';

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ['autodocs'],
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    gap: 10,
  },
  title: 'Components/Toast',
  decorators: Story => (
    <>
      <Button
        onClick={() => {
          toast('Event has been created', {
            description:
              'Event has been created successfully, you can view it in the calendar, or edit it. You can also undo this action. Do you want to confirm?',
            cancel: {
              label: 'Dismiss',
              onClick: () => {},
            },
            action: {
              label: 'Undo',
              onClick: () => {},
            },
          });
        }}
      >
        Show Toast
      </Button>
      <Story />
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Basic: Story = {
  args: {},
};
