import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

interface MenuItemContentWrapperProps {
  className?: string;
  iconPath?: string;
  alt?: string;
  title?: string;
}

export function MenuItemContentWrapper({
  className,
  iconPath,
  alt,
  title,
}: MenuItemContentWrapperProps) {
  return (
    <div className={cn(menuDef.item.wrapper, className)}>
      {iconPath && (
        <img className={menuDef.item.icon} src={iconPath} alt={alt} />
      )}
      <span className={menuDef.item.text}>{title}</span>
    </div>
  );
}
