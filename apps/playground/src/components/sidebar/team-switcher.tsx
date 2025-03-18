'use client';

import { Dropdown, Sidebar, useSidebar } from '@utima/ui';
import { ChevronsUpDown, Plus } from 'lucide-react';
import * as React from 'react';

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Sidebar.MenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                <activeTeam.logo className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>
                  {activeTeam.name}
                </span>
                <span className='truncate text-xs'>{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className='ml-auto' />
            </Sidebar.MenuButton>
          </Dropdown.Trigger>
          <Dropdown.Content
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <Dropdown.Label className='text-muted-foreground text-xs'>
              Teams
            </Dropdown.Label>
            {teams.map((team, index) => (
              <Dropdown.Item
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className='gap-2 p-2'
              >
                <div className='flex size-6 items-center justify-center rounded-sm border'>
                  <team.logo className='size-4 shrink-0' />
                </div>
                {team.name}
                <Dropdown.Shortcut>⌘{index + 1}</Dropdown.Shortcut>
              </Dropdown.Item>
            ))}
            <Dropdown.Separator />
            <Dropdown.Item className='gap-2 p-2'>
              <div className='bg-background flex size-6 items-center justify-center rounded-md border'>
                <Plus className='size-4' />
              </div>
              <div className='text-muted-foreground font-medium'>Add team</div>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
