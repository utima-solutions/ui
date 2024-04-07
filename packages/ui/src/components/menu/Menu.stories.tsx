import type { Meta, StoryObj } from '@storybook/react';
import {
  Cog,
  Contact,
  Home,
  LayoutDashboard,
  Lock,
  LogOut,
  User,
} from 'lucide-react';

import * as Menu from '.';

const meta: Meta<typeof Menu.Root> = {
  component: Menu.Root,
  tags: ['autodocs'],
  title: 'Components/Menu',
  args: {
    children: (
      <Menu.Content>
        <Menu.Item>
          <Menu.Link>
            <Home className='size-5' /> Home
          </Menu.Link>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Label>General</Menu.Label>
        <Menu.Item>
          <Menu.Link active>
            <LayoutDashboard className='size-5' /> Dashboard
          </Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Sub defaultOpen>
            <Menu.SubTrigger>
              <Menu.Link>
                <Contact className='size-5' /> Contacts
              </Menu.Link>
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.SubItem>
                <Menu.Link>
                  <User className='size-5' /> Profile
                </Menu.Link>
              </Menu.SubItem>
              <Menu.SubItem>
                <Menu.Link>
                  <Lock className='size-5' /> Account
                </Menu.Link>
              </Menu.SubItem>
              <Menu.Separator />
              <Menu.SubItem>
                <Menu.Sub>
                  <Menu.SubTrigger>
                    <Menu.Link>Dashboard</Menu.Link>
                  </Menu.SubTrigger>
                  <Menu.SubContent>
                    <Menu.Label>User Account</Menu.Label>
                    <Menu.SubItem>
                      <Menu.Link indent>Profile</Menu.Link>
                    </Menu.SubItem>
                    <Menu.SubItem>
                      <Menu.Link indent>Account</Menu.Link>
                    </Menu.SubItem>
                    <Menu.SubItem>
                      <Menu.Link indent>Security</Menu.Link>
                    </Menu.SubItem>
                  </Menu.SubContent>
                </Menu.Sub>
              </Menu.SubItem>
            </Menu.SubContent>
          </Menu.Sub>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link>
            <LogOut className='size-5' /> Logout
          </Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link>
            <Cog className='size-5' /> Settings
          </Menu.Link>
        </Menu.Item>
      </Menu.Content>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Menu.Root>;

export const Basic: Story = {};
