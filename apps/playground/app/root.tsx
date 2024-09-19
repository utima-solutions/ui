import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import './tailwind.css';
import { Button, Layout as UILayout } from '@utima/ui';
import { Cloud, Home, Menu, Users } from 'lucide-react';

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
      <UILayout.Header className='bg-slate-900 px-3 gap-3'>
        <UILayout.SidebarTrigger>
          <Button size='icon-sm' variant='secondary'>
            <Menu />
          </Button>
        </UILayout.SidebarTrigger>

        <h1 className='text-white text-lg font-bold'>Company LOGO</h1>
      </UILayout.Header>
      <UILayout.Sidebar className='bg-slate-700 p-2'>
        <ol className='flex flex-col gap-2'>
          <li>
            <a
              href='#'
              className='flex gap-2 hover:bg-slate-800 p-2 rounded-radius'
            >
              <Home /> Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex gap-2 hover:bg-slate-800 p-2 rounded-radius'
            >
              <Users /> Users
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex gap-2 hover:bg-slate-800 p-2 rounded-radius'
            >
              <Cloud /> Dashboard
            </a>
          </li>
        </ol>
      </UILayout.Sidebar>
      <UILayout.Content className='p-5'>
        <Outlet />
      </UILayout.Content>
    </UILayout.Root>
  );
}
