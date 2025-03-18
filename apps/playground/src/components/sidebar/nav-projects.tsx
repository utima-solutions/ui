'use client';

import { Dropdown, Sidebar, useSidebar } from '@utima/ui';
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from 'lucide-react';

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar.Group className='group-data-[collapsible=icon]:hidden'>
      <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {projects.map(item => (
          <Sidebar.MenuItem key={item.name}>
            <Sidebar.MenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </Sidebar.MenuButton>
            <Dropdown.Root>
              <Dropdown.Trigger asChild>
                <Sidebar.MenuAction showOnHover>
                  <MoreHorizontal />
                  <span className='sr-only'>More</span>
                </Sidebar.MenuAction>
              </Dropdown.Trigger>
              <Dropdown.Content
                className='w-48 rounded-lg'
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <Dropdown.Item>
                  <Folder className='text-muted-foreground' />
                  <span>View Project</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Forward className='text-muted-foreground' />
                  <span>Share Project</span>
                </Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>
                  <Trash2 className='text-muted-foreground' />
                  <span>Delete Project</span>
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className='text-sidebar-foreground/70'>
            <MoreHorizontal className='text-sidebar-foreground/70' />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
