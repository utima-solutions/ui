import type { Meta, StoryObj } from '@storybook/react';

import * as Dialog from './index';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Label } from '../label/Label';

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  tags: ['autodocs'],
  title: 'Components/Dialog',
  decorators: [
    Story => (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Show Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content className='sm:max-w-[425px]'>
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here.
            </Dialog.Description>
          </Dialog.Header>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' value='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input id='username' value='@peduarte' className='col-span-3' />
            </div>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button type='submit'>Save changes</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dialog.Root>;

export const Basic: Story = {};
