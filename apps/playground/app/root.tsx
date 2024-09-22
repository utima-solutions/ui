import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Button, Layout as UILayout, Menu } from '@utima/ui';
import {
  Cog,
  Contact,
  Home,
  LayoutDashboard,
  LogOut,
  Menu as MenuIcon,
  Lock,
  User,
} from 'lucide-react';

import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// eslint-disable-next-line react/no-multi-comp
export default function App() {
  return (
    <UILayout.Root>
      <UILayout.Header className='border-border sidebar:px-7 gap-3 border-b px-3'>
        <UILayout.SidebarTrigger asChild>
          <Button size='icon-xs'>
            <MenuIcon className='size-4' />
          </Button>
        </UILayout.SidebarTrigger>

        <h1 className='text-lg font-bold text-black'>@utima/ui Playground</h1>
      </UILayout.Header>
      <UILayout.Sidebar className='border-border border-r'>
        <Menu.Root className='sidebar:p-3 p-1'>
          <Menu.Content>
            <Menu.Item>
              <Menu.Link>
                <Home className='size-5' /> Home
              </Menu.Link>
            </Menu.Item>
            <Menu.Label>General</Menu.Label>
            <Menu.Item>
              <Menu.Link active>
                <LayoutDashboard className='size-5' /> Dashboard
              </Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Sub defaultOpen>
                <Menu.SubTrigger>
                  <Menu.Link disabled>
                    <Contact className='size-5' /> Contacts
                  </Menu.Link>
                </Menu.SubTrigger>
                <Menu.SubContent className='bg-white pl-4'>
                  <Menu.SubItem>
                    <Menu.Link>
                      <User className='size-5' /> Profile
                    </Menu.Link>
                  </Menu.SubItem>
                  <Menu.SubItem>
                    <Menu.Link>
                      <Lock className='size-5' /> Account
                    </Menu.Link>
                  </Menu.SubItem>
                  <Menu.Separator />
                  <Menu.SubItem>
                    <Menu.Sub>
                      <Menu.SubTrigger>
                        <Menu.Link href='/'>Dashboard</Menu.Link>
                      </Menu.SubTrigger>
                      <Menu.SubContent className='bg-white pl-4'>
                        <Menu.Label>User Account</Menu.Label>
                        <Menu.SubItem>
                          <Menu.Link>Profile</Menu.Link>
                        </Menu.SubItem>
                        <Menu.SubItem>
                          <Menu.Link>Account</Menu.Link>
                        </Menu.SubItem>
                        <Menu.SubItem>
                          <Menu.Link>Security</Menu.Link>
                        </Menu.SubItem>
                      </Menu.SubContent>
                    </Menu.Sub>
                  </Menu.SubItem>
                </Menu.SubContent>
              </Menu.Sub>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link>
                <LogOut className='size-5' /> Logout
              </Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link>
                <Cog className='size-5' /> Settings
              </Menu.Link>
            </Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </UILayout.Sidebar>
      <UILayout.Content className='container p-5'>
        <Outlet />
      </UILayout.Content>
    </UILayout.Root>
  );
}
