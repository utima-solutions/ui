import type { Meta, StoryObj } from '@storybook/react';
import { Slash } from 'lucide-react';

import * as Breadcrumb from './index';
import * as Dropdown from '../dropdown/index';

const meta: Meta<typeof Breadcrumb.Root> = {
  component: Breadcrumb.Root,
  tags: ['autodocs'],
  title: 'Components/Breadcrumb',
  args: {
    children: (
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href='/'>Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Dropdown.Root>
            <Dropdown.Trigger className='flex items-center gap-1'>
              <Breadcrumb.Ellipsis className='size-4' />
              <span className='sr-only'>Toggle menu</span>
            </Dropdown.Trigger>
            <Dropdown.Content align='start'>
              <Dropdown.Item>Documentation</Dropdown.Item>
              <Dropdown.Item>Themes</Dropdown.Item>
              <Dropdown.Item>GitHub</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <Slash />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href='/docs/components'>Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb.Root>;

export const Basic: Story = {
  args: {},
};
