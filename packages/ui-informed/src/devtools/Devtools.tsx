import { Button, Portal, cn } from '@utima/ui';
import { useFormState } from 'informed';
import { Bug, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { JSONTree } from 'react-json-tree';

export interface DevtoolsProps {
  className?: string;
}

const theme = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: 'transparent',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c',
};

/**
 * Wrapper around informed Debug component with some custom visuals.
 */
export function Devtools({ className }: DevtoolsProps) {
  const [visible, setVisible] = useState(false);
  const formState = useFormState();

  return (
    <>
      <Button
        variant='danger'
        onClick={() => setVisible(prev => !prev)}
        className={cn(
          'font-semibold text-white bg-rose-600 hover:bg-rose-500',
          className,
        )}
        size='xs'
        icon={<Bug size={16} />}
      >
        Form Devtools
      </Button>
      {visible && (
        <Portal>
          <div
            className='w-full bg-slate-800 fixed left-0 bottom-0 z-50 text-white animate-in fade-in slide-in-from-bottom'
            style={{ colorScheme: 'dark' }}
          >
            <div className='flex bg-slate-900 items-center justify-between px-4 py-2'>
              <h4 className='font-mono'>
                <span className='bg-slate-700 p-1 text-sm'>
                  @utima/ui-informed - Devtools
                </span>
              </h4>
              <Button
                size='icon-sm'
                className=' bg-transparent rounded-md'
                onClick={() => setVisible(false)}
                icon={<ChevronDown />}
              />
            </div>
            <div className='grid grid-cols-2 max-h-[450px]'>
              <div className='px-4 overflow-y-auto max-h-[450px] text-sm'>
                <h4 className='font-mono mt-4 text-xs flex items-center'>
                  <span className='bg-rose-600 p-1'>State</span>
                </h4>
                <JSONTree hideRoot data={formState} theme={theme} />
              </div>
              <div className='px-4 overflow-y-auto max-h-[450px] text-sm'>
                <h4 className='font-mono mt-4 text-xs flex items-center'>
                  <span className='bg-emerald-600 p-1'>Data</span>
                </h4>
                <JSONTree hideRoot data={formState.values} theme={theme} />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
