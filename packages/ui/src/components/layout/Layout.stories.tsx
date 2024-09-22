import type { Meta, StoryObj } from '@storybook/react';
import { Home, Menu, Users, Cloud } from 'lucide-react';

import * as Layout from '.';
import { Button } from '../button/Button';

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
      <Layout.Root>
        <Layout.Header className='gap-3 bg-slate-900 px-3'>
          <Layout.SidebarTrigger>
            <Button size='icon-sm' variant='secondary'>
              <Menu />
            </Button>
          </Layout.SidebarTrigger>

          <h1 className='text-lg font-bold text-white'>Company LOGO</h1>
        </Layout.Header>
        <Layout.Sidebar className='bg-slate-700 p-2'>
          <ol className='flex flex-col gap-2'>
            <li>
              <a
                href='#'
                className='rounded-radius flex gap-2 p-2 hover:bg-slate-800'
              >
                <Home /> Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded-radius flex gap-2 p-2 hover:bg-slate-800'
              >
                <Users /> Users
              </a>
            </li>
            <li>
              <a
                href='#'
                className='rounded-radius flex gap-2 p-2 hover:bg-slate-800'
              >
                <Cloud /> Dashboard
              </a>
            </li>
          </ol>
        </Layout.Sidebar>
        <Layout.Content className='p-5'>Web Content</Layout.Content>
      </Layout.Root>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Layout.Root>;

export const Basic: Story = {};
