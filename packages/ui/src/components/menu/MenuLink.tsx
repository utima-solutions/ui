export interface MenuLink {}

export function MenuLink({ children }: { children: React.ReactNode }) {
  return (
    <a className='flex items-center py-2 px-3 transition-colors cursor-pointer hover:bg-menu-accent hover:text-menu-accent-fg w-auto rounded-radius gap-4 text-menu-fg'>
      {children}
    </a>
  );
}
