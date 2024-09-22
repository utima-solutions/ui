import type { MetaFunction } from '@remix-run/node';
import { Button, Pagination, Table } from '@utima/ui';
import { MoreHorizontal } from 'lucide-react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-3'>
        <Button>Click me</Button>
        <Button variant='danger'>Click me</Button>
        <Button outline>Click me</Button>
      </div>

      <div className='flex gap-3'>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HCol>ID</Table.HCol>
              <Table.HCol>Name</Table.HCol>
              <Table.HCol>Email</Table.HCol>
              <Table.HCol>Status</Table.HCol>
              <Table.HCol>Role</Table.HCol>
              <Table.HCol>Actions</Table.HCol>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Col>001</Table.Col>
              <Table.Col>Lorem Ipsum</Table.Col>
              <Table.Col>lorem@example.com</Table.Col>
              <Table.Col>Active</Table.Col>
              <Table.Col>User</Table.Col>
              <Table.Col className='py-0'>
                <Button size='icon-xs'>
                  <MoreHorizontal className='size-4' />
                </Button>
              </Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>002</Table.Col>
              <Table.Col>Dolor Sit</Table.Col>
              <Table.Col>dolor@example.com</Table.Col>
              <Table.Col>Inactive</Table.Col>
              <Table.Col>Admin</Table.Col>
              <Table.Col className='py-0'>
                <Button size='icon-xs'>
                  <MoreHorizontal className='size-4' />
                </Button>
              </Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>003</Table.Col>
              <Table.Col>Amet Consectetur</Table.Col>
              <Table.Col>amet@example.com</Table.Col>
              <Table.Col>Pending</Table.Col>
              <Table.Col>Editor</Table.Col>
              <Table.Col className='py-0'>
                <Button size='icon-xs'>
                  <MoreHorizontal className='size-4' />
                </Button>
              </Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>004</Table.Col>
              <Table.Col>Adipiscing Elit</Table.Col>
              <Table.Col>adipiscing@example.com</Table.Col>
              <Table.Col>Active</Table.Col>
              <Table.Col>Moderator</Table.Col>
              <Table.Col className='py-0'>
                <Button size='icon-xs'>
                  <MoreHorizontal className='size-4' />
                </Button>
              </Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>005</Table.Col>
              <Table.Col>Sed Do Eiusmod</Table.Col>
              <Table.Col>sed@example.com</Table.Col>
              <Table.Col>Active</Table.Col>
              <Table.Col>User</Table.Col>
              <Table.Col className='py-0'>
                <Button size='icon-xs'>
                  <MoreHorizontal className='size-4' />
                </Button>
              </Table.Col>
            </Table.Row>
          </Table.Body>
          <Table.Foot>
            <Table.Row>
              <Table.HCol colSpan={6}>Total Users: 5</Table.HCol>
            </Table.Row>
          </Table.Foot>
        </Table.Root>
      </div>

      <div>
        <Pagination.Root size='sm'>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Prev disabled>Previous</Pagination.Prev>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Link>1</Pagination.Link>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Link active>3</Pagination.Link>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Link>10</Pagination.Link>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Link>12</Pagination.Link>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination.Root>
      </div>
    </div>
  );
}
