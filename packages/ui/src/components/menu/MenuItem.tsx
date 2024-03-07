import type { ReactNode } from 'react';

import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

import { menuDef } from './Menu.styles';
import React from 'react';
import { useState } from 'react';

interface MenuItemProps {
  children?: ReactNode;
  icon?: string;
  label: React.ReactNode;
  asChild?: ReactNode;      // THIS DONT WORK NO IDEA HOW TO FIX
  className?: string;
}

export function MenuItem({
  label,
  children,
  icon,
  asChild, // Use the asChild prop
  className,
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  // Toggle submenu visibility
  const toggleSubmenu = (event: { stopPropagation: () => void }) => {
    event.stopPropagation(); // Prevent click from bubbling up to parent elements
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  // Use Slot to conditionally wrap the wrapper content with a custom component
  const WrapperComponent = asChild ? Slot : 'div';

  return (
    <div className={cn(menuDef.item.root, className)}>
      <WrapperComponent className={cn(menuDef.item.wrapper)}>
        <div className={cn(menuDef.item.content)}>
          {icon && <img src={icon} alt='icon' />}
          <span>{label}</span>
        </div>
        {hasChildren && (
          <div onClick={toggleSubmenu}>{isOpen ? '▲' : '▼'}</div>
        )}
      </WrapperComponent>
      {hasChildren && isOpen && <div>{children}</div>}
    </div>
  );
}
