export interface MenuSeparator {}

export function MenuSeparator(props: MenuSeparator) {
  return <li className='border-b border-menu-separator' role='separator' />;
}
