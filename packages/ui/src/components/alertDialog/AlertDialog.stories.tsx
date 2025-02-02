import type { Meta, StoryObj } from '@storybook/react';

import * as AlertDialog from './index';
import { Button } from '../button/button';

const meta: Meta<typeof AlertDialog.Root> = {
  component: AlertDialog.Root,
  tags: ['autodocs'],
  title: 'Components/AlertDialog',
  decorators: [
    Story => (
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Button>Open</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
              <AlertDialog.Description>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel asChild>
                <Button variant='ghost'>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button>Continue</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AlertDialog.Root>;

export const Basic: Story = {};
