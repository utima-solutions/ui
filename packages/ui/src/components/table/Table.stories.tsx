import type { Meta, StoryObj } from '@storybook/react';

import * as Table from './index';

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
};

export default meta;

type Story = StoryObj<typeof Table.Root>;

export const Basic: Story = {
  args: {
    children: (
      <Table.Root>
        <Table.Head>
          <Table.HRow>
            <Table.HCol>Header 1</Table.HCol>
            <Table.HCol>Header 2</Table.HCol>
          </Table.HRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Col>Cell 1</Table.Col>
            <Table.Col>Cell 2</Table.Col>
          </Table.Row>
        </Table.Body>
        <Table.Foot>
          <Table.HRow>
            <Table.HCol>Cell 1</Table.HCol>
            <Table.HCol>Cell 2</Table.HCol>
          </Table.HRow>
        </Table.Foot>
      </Table.Root>
    ),
  },
};
