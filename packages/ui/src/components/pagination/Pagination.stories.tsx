import type { Meta, StoryObj } from '@storybook/react';

import * as Pagination from './index';
import { PaginationEllipsis } from './PaginationEllipsis';
import { PaginationLink } from './PaginationLink';

const meta: Meta<typeof Pagination.Root> = {
  component: Pagination.Root,
  tags: ['autodocs'],
  title: 'Components/Pagination',
  args: {
    children: (
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Prev disabled>Previous</Pagination.Prev>
        </Pagination.Item>
        <Pagination.Item>
          <PaginationLink>1</PaginationLink>
        </Pagination.Item>
        <Pagination.Item>
          <PaginationLink active>3</PaginationLink>
        </Pagination.Item>
        <Pagination.Item>
          <PaginationEllipsis />
        </Pagination.Item>
        <Pagination.Item>
          <PaginationLink>10</PaginationLink>
        </Pagination.Item>
        <Pagination.Item>
          <PaginationLink>12</PaginationLink>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next>Next</Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Pagination.Root>;

export const Basic: Story = {};
