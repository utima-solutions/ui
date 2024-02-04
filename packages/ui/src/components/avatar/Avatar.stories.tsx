import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { AvatarImage } from './AvatarImage';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
  args: {
    children: 'Avatar',
    size: 'md',
    asChild: false,
    src: 'https://fastly.picsum.photos/id/539/200/300.jpg?hmac=anJssHN1m53jBatiVAldD8gSdk_3w_5WHOCNCFvGFkk',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {};
export const Fallback: Story = {
  args: {
    fallback: 'JD',
    src: '',
  },
};
