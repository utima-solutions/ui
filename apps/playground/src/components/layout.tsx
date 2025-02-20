'use client';

import { Collapsible, Dropdown, Sidebar } from '@utima/ui';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
} from 'lucide-react';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar.Provider>
      <Sidebar.Root>
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Dropdown.Root>
                <Dropdown.Trigger asChild>
                  <Sidebar.MenuButton>
                    Select Workspace
                    <ChevronDown className='ml-auto' />
                  </Sidebar.MenuButton>
                </Dropdown.Trigger>
                <Dropdown.Content className='w-[--radix-popper-anchor-width]'>
                  <Dropdown.Item>
                    <span>Acme Inc</span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <span>Acme Corp.</span>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Root>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {items.map((item) => (
                  <Sidebar.MenuItem key={item.title}>
                    <Sidebar.MenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
          <Collapsible.Root defaultOpen className='group/collapsible'>
            <Sidebar.Group>
              <Sidebar.GroupLabel asChild>
                <Collapsible.Trigger>
                  Collapsible{' '}
                  <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                </Collapsible.Trigger>
              </Sidebar.GroupLabel>
              <Collapsible.Content>
                <Sidebar.GroupContent>
                  <Sidebar.Menu>
                    {items.map((item) => (
                      <Sidebar.MenuItem key={item.title}>
                        <Sidebar.MenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                    ))}
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              </Collapsible.Content>
            </Sidebar.Group>
          </Collapsible.Root>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Dropdown.Root>
                <Dropdown.Trigger asChild>
                  <Sidebar.MenuButton>
                    Username
                    <ChevronUp className='ml-auto' />
                  </Sidebar.MenuButton>
                </Dropdown.Trigger>
                <Dropdown.Content className='w-[--radix-popper-anchor-width]'>
                  <Dropdown.Item>
                    <span>Acme Inc</span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <span>Acme Corp.</span>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Root>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
      </Sidebar.Root>
      <main>
        <Sidebar.Trigger />
        {children}
      </main>
    </Sidebar.Provider>
  );
}
