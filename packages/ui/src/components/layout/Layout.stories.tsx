import type { Meta, StoryObj } from '@storybook/react';
import * as Dropdown from '.';
import { Layout } from '@/index';

const meta: Meta<typeof Dropdown.Root> = {
  component: Dropdown.Root,
  tags: ['autodocs'],
  title: 'Components/Layout',
  args: {
    children: (
      <>
        <Layout.Root>
          <Layout.Header>
            <div className='bg-black h-full'>Hi</div>
          </Layout.Header>
          <Layout.Wrapper>
            <Layout.SideBar>
              <h1>hi</h1>
            </Layout.SideBar>
            <Layout.Content>
              <div className='bg-red-100 flex flex-col'>
                Hi
                <div className='h-screen'>Hi</div>
                <div className='h-screen'>Hi</div>
                <div className='h-screen'>Hi</div>
                <div className='h-screen'>Hi</div>
              </div>
            </Layout.Content>
          </Layout.Wrapper>
        </Layout.Root>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown.Root>;

export const Basic: Story = {};
