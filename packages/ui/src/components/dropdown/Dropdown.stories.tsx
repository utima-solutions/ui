import type { Meta, StoryObj } from '@storybook/react';
import {
  Cloud,
  CreditCard,
  GitBranchPlus,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import * as Dropdown from '.';
import { Button } from '../button/Button';

const meta: Meta<typeof Dropdown.Root> = {
  component: Dropdown.Root,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
  args: {
    children: (
      <>
        <Dropdown.Trigger asChild>
          <Button>Open</Button>
        </Dropdown.Trigger>
        <Dropdown.Content className='w-56'>
          <Dropdown.Label>My Account</Dropdown.Label>
          <Dropdown.Separator />
          <Dropdown.Group>
            <Dropdown.Item>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <Dropdown.Shortcut>⇧⌘P</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <Dropdown.Shortcut>⌘B</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <Dropdown.Shortcut>⌘S</Dropdown.Shortcut>
            </Dropdown.Item>
            <Dropdown.Item>
              <Keyboard className='mr-2 h-4 w-4' />
              <span>Keyboard shortcuts</span>
              <Dropdown.Shortcut>⌘K</Dropdown.Shortcut>
            </Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Separator />
          <Dropdown.Group>
            <Dropdown.Item>
              <Users className='mr-2 h-4 w-4' />
              <span>Team</span>
            </Dropdown.Item>
            <Dropdown.Sub>
              <Dropdown.SubTrigger>
                <UserPlus className='mr-2 h-4 w-4' />
                <span>Invite users</span>
              </Dropdown.SubTrigger>
              <Dropdown.SubContent>
                <Dropdown.Item>
                  <Mail className='mr-2 h-4 w-4' />
                  <span>Email</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <MessageSquare className='mr-2 h-4 w-4' />
                  <span>Message</span>
                </Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>
                  <PlusCircle className='mr-2 h-4 w-4' />
                  <span>More...</span>
                </Dropdown.Item>
              </Dropdown.SubContent>
            </Dropdown.Sub>
            <Dropdown.Item>
              <Plus className='mr-2 h-4 w-4' />
              <span>New Team</span>
              <Dropdown.Shortcut>⌘+T</Dropdown.Shortcut>
            </Dropdown.Item>
          </Dropdown.Group>
          <Dropdown.Separator />
          <Dropdown.Item>
            <GitBranchPlus className='mr-2 h-4 w-4' />
            <span>GitHub</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <LifeBuoy className='mr-2 h-4 w-4' />
            <span>Support</span>
          </Dropdown.Item>
          <Dropdown.Item disabled>
            <Cloud className='mr-2 h-4 w-4' />
            <span>API</span>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.RadioItem value='2'>Test</Dropdown.RadioItem>
          <Dropdown.Separator />
          <Dropdown.Item>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
            <Dropdown.Shortcut>⇧⌘Q</Dropdown.Shortcut>
          </Dropdown.Item>
        </Dropdown.Content>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown.Root>;

export const Basic: Story = {};
