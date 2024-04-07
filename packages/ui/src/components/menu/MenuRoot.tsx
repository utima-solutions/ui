export interface MenuRoot {}

export function MenuRoot({ children }: { children: React.ReactNode }) {
  return <nav>{children}</nav>;
}
