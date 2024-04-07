export interface MenuContent {}

export function MenuContent({ children }: { children: React.ReactNode }) {
  return <ul className='list-none m-0'>{children}</ul>;
}
