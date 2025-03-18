'use client';

import { Avatar, Dropdown, Sidebar, useSidebar } from '@utima/ui';
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react';

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Sidebar.MenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar.Root className='size-8 rounded-lg'>
                <Avatar.Image src={user.avatar} alt={user.name} />
                <Avatar.Fallback className='rounded-lg'>CN</Avatar.Fallback>
              </Avatar.Root>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-xs'>{user.email}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </Sidebar.MenuButton>
          </Dropdown.Trigger>
          <Dropdown.Content
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <Dropdown.Label className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar.Root className='size-8 rounded-lg'>
                  <Avatar.Image src={user.avatar} alt={user.name} />
                  <Avatar.Fallback className='rounded-lg'>CN</Avatar.Fallback>
                </Avatar.Root>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user.name}</span>
                  <span className='truncate text-xs'>{user.email}</span>
                </div>
              </div>
            </Dropdown.Label>
            <Dropdown.Separator />
            <Dropdown.Group>
              <Dropdown.Item>
                <Sparkles />
                Upgrade to Pro
              </Dropdown.Item>
            </Dropdown.Group>
            <Dropdown.Separator />
            <Dropdown.Group>
              <Dropdown.Item>
                <BadgeCheck />
                Account
              </Dropdown.Item>
              <Dropdown.Item>
                <CreditCard />
                Billing
              </Dropdown.Item>
              <Dropdown.Item>
                <Bell />
                Notifications
              </Dropdown.Item>
            </Dropdown.Group>
            <Dropdown.Separator />
            <Dropdown.Item>
              <LogOut />
              Log out
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
