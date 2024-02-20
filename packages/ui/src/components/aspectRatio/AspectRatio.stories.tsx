import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from './AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  tags: ['autodocs'],
  title: 'Components/AspectRatio',
  args: {
    ratio: 21 / 9,
    asChild: false,
    children: (
      <img
        src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
        alt='Landscape photograph by Tobias Tullius'
      />
    ),
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Basic: Story = {
  args: {},
};
