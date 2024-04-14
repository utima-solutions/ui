import { cn } from '@utima/ui';
import { Bug } from 'lucide-react';
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
      className={cn(
        'outline-none inline-flex drop-shadow-md shadow-md w-fit gap-2 items-center justify-center rounded-lg bg-zinc-800 text-sm px-4 py-2 transition-all hover:bg-zinc-700 active:scale-95 active:bg-zinc-800',
        className,
      )}
      {...restProps}
    >
      <Bug className='size-4 text-zinc-50' />
      <span className='inline-block font-bold bg-gradient-to-r from-blue-400 via-green-500 to-purple-500  text-transparent bg-clip-text'>
        Form Devtools
      </span>
    </button>
  );
});
