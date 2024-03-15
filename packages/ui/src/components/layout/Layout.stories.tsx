import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from 'lucide-react';

import * as Layout from '.';

// custom width sidebar a custom height header context
const meta: Meta<typeof Layout.Root> = {
  component: Layout.Root,
  tags: ['autodocs'],
  title: 'Components/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <Layout.Root withSidebar withHeader>
        <Layout.Header>
          <Layout.SidebarTrigger>
            <Menu />
          </Layout.SidebarTrigger>
          <h1>ahoj</h1>
        </Layout.Header>
        <Layout.SideBar>
          <h1>Hi</h1>
        </Layout.SideBar>
        <Layout.Content>
          <div className='h-screen'>Hi</div>
          <div className='h-screen'>Hi</div>
          <div className='h-screen'>Hi</div>
          <div className='h-screen'>Hi</div>
          <div className='h-screen'>Hi</div>
        </Layout.Content>
      </Layout.Root>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Layout.Root>;

export const Basic: Story = {};
