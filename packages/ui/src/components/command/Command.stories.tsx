import type { Meta, StoryObj } from '@storybook/react';
import {
  Calendar,
  DownloadCloud,
  Mail,
  PersonStanding,
  Rocket,
  ScanFace,
  Settings,
} from 'lucide-react';

import * as Command from '.';
import { Button } from '../button/Button';
import { Kbd } from '../kbd/Kbd';

const meta: Meta<typeof Command.Root> = {
  component: Command.Root,
  tags: ['autodocs'],
  title: 'Components/Command',
  args: {
    // eslint-disable-next-line no-console
    onValueChange: (value: string) => console.info('Value changed:', value),
    children: (
      <>
        <Command.Input placeholder='Type a command. or search...' />
        <Command.List>
          <Command.Empty />
          <Command.Group>
            <Command.Item>
              <Calendar className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <ScanFace className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Rocket className='mr-2 h-4 w-4' />
              <span>Launch</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading='Settings'>
            <Command.Item
              // eslint-disable-next-line no-console
              onClick={() => console.info('Item click')}
              value='complex'
              className='justify-between'
            >
              <div className='flex items-center'>
                <img
                  src='https://picsum.photos/200'
                  alt=''
                  className='mr-2 h-8 w-8 rounded-full'
                />
                <div>
                  <h4 className='font-semibold text-sm'>Rich custom item</h4>
                  <p className='text-xs text-gray-500'>
                    Upgradable transitional product
                  </p>
                </div>
              </div>
              <Button
                variant='primary'
                size='sm'
                icon={<DownloadCloud size={14} />}
                // eslint-disable-next-line no-console
                onClick={() => console.info('Download clicked')}
              >
                Download
              </Button>
            </Command.Item>
            <Command.Item>
              <PersonStanding className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <Kbd variant='bordered'>⌘P</Kbd>
            </Command.Item>
            <Command.Item>
              <Mail className='mr-2 h-4 w-4' />
              <span>Mail</span>
              <Kbd variant='bordered'>⌘B</Kbd>
            </Command.Item>
            <Command.Item>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <Kbd variant='bordered'>⌘S</Kbd>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </>
    ),
  },
  decorators: [
    Story => (
      <div className='rounded-radius shadow-lg border border-border'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Command.Root>;

export const Basic: Story = {
  args: {},
};
