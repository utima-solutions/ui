'use client';

import { Breadcrumb, Separator, Sidebar } from '@utima/ui';

import { KanbuSidebar } from './kanbu-sidebar/kanbu-sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar.Provider>
      {/* <AppSidebar /> */}
      <KanbuSidebar />
      <Sidebar.Inset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <Sidebar.Trigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb.Root>
              <Breadcrumb.List>
                <Breadcrumb.Item className='hidden md:block'>
                  <Breadcrumb.Link href='#'>
                    Building Your Application
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator className='hidden md:block' />
                <Breadcrumb.Item>
                  <Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb.Root>
          </div>
        </header>
        <main>{children}</main>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
