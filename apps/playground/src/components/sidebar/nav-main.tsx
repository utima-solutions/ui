'use client';

import { cn, Collapsible, Sidebar } from '@utima/ui';
import { ChevronRight, type LucideIcon } from 'lucide-react';

export function NavMain({
  items,
  label,
}: {
  label?: string;
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    highlight?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <Sidebar.Group>
      {label && <Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>}
      <Sidebar.Menu>
        {items.map(item => (
          <Collapsible.Root
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className='group/collapsible'
          >
            <Sidebar.MenuItem>
              <Collapsible.Trigger asChild>
                <Sidebar.MenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </Sidebar.MenuButton>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Sidebar.MenuSub>
                  {item.items?.map(subItem => (
                    <Sidebar.MenuSubItem key={subItem.title}>
                      <Sidebar.MenuSubButton asChild>
                        <a
                          className={cn(item.highlight && 'text-emerald-500 ')}
                          href={subItem.url}
                        >
                          <span>{subItem.title}</span>
                        </a>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  ))}
                </Sidebar.MenuSub>
              </Collapsible.Content>
            </Sidebar.MenuItem>
          </Collapsible.Root>
        ))}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
