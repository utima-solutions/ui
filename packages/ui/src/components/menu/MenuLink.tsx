export interface MenuLink {}

export function MenuLink({ children }: { children: React.ReactNode }) {
  return (
    <a className='m-1 py-2 px-3 transition-colors cursor-pointer hover:bg-slate-800 block w-auto rounded-radius'>
      {children}
    </a>
  );
}
