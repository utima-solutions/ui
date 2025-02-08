import type { ComponentPropsWithoutRef } from 'react';
import { Toaster as Sonner, toast } from 'sonner';

interface ToasterProps extends ComponentPropsWithoutRef<typeof Sonner> {}

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}


export { toast };
