import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const Table = memo(function Table({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'table'>) {
  return (
    <div className='rounded-radius border-border relative w-full overflow-auto border'>
      <table className={cn(tableDef.table, className)} {...restProps} />
    </div>
  );
});
