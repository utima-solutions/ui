import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from 'lucide-react';

import * as Layout from '.';

const meta: Meta<typeof Layout.Root> = {
  component: Layout.Root,
  tags: ['autodocs'],
  title: 'Components/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <Layout.Root withHeader withSidebar>
        <Layout.Header>
          <Layout.SidebarTrigger>
            <Menu />
          </Layout.SidebarTrigger>
        </Layout.Header>
        <Layout.SideBar>
          <h1>hi</h1>
        </Layout.SideBar>
        <Layout.Content>
          Hi
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
