import type { Meta, StoryObj } from '@storybook/react';

import * as Resizable from './index';

const meta: Meta<typeof Resizable.Group> = {
  component: Resizable.Group,
  tags: ['autodocs'],
  title: 'Components/Resizable',
  args: {
    direction: 'horizontal',
    className: 'min-h-[200px] max-w-md rounded-lg border',
    children: (
      <>
        <Resizable.Panel defaultSize={50}>
          <div className='flex h-[200px] items-center justify-center p-6'>
            <span className='font-semibold'>One</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={50}>
          <Resizable.Group direction='vertical'>
            <Resizable.Panel defaultSize={25}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'>Two</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle />
            <Resizable.Panel defaultSize={75}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'>Three</span>
              </div>
            </Resizable.Panel>
          </Resizable.Group>
        </Resizable.Panel>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Resizable>;

export const Basic: Story = {};
