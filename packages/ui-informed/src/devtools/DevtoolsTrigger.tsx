import { cn } from '@utima/ui';
import { memo, type ComponentPropsWithoutRef } from 'react';

export interface DevtoolsTriggerProps
  extends ComponentPropsWithoutRef<'button'> {}

export const DevtoolsTrigger = memo(function DevtoolsTrigger({
  className,
  children,
  ...restProps
}: DevtoolsTriggerProps) {
  return (
    <button
      type='button'
      className={cn(
        'outline-none inline-flex drop-shadow-md shadow-md w-fit gap-2 items-center justify-center rounded-lg bg-zinc-800 text-sm px-4 py-2 transition-all hover:bg-zinc-700 active:scale-95 active:bg-zinc-800',
        className,
      )}
      {...restProps}
    >
      <span className='inline-block bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 bg-clip-text  font-bold text-transparent'>
        Form Devtools
      </span>
    </button>
  );
});
