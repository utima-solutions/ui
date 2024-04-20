import { Portal, cn } from '@utima/ui';
import { useFormState } from 'informed';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { JSONTree } from 'react-json-tree';

import { DevtoolsLabel } from './DevtoolsLabel';
import { DevtoolsTrigger } from './DevtoolsTrigger';

export interface DevtoolsProps {
  className?: string;
}

const theme = {
  scheme: 'tailwind',
  author: 'Tailwind CSS',
  base00: 'transparent',
  base01: '#F3F4F6',
  base02: '#E5E7EB',
  base03: '#D1D5DB',
  base04: '#9CA3AF',
  base05: '#6B7280',
  base06: '#4B5563',
  base07: '#374151',
  base08: '#F87171',
  base09: '#FBBF24',
  base0A: '#FCD34D',
  base0B: '#34D399',
  base0C: '#22D3EE',
  base0D: '#60A5FA',
  base0E: '#A78BFA',
  base0F: '#EC4899',
};

const SESSION_KEY = 'utima_ui_informed_devtools_visible';

/**
 * Wrapper around informed Debug component with some custom visuals.
 */
export function Devtools({ className }: DevtoolsProps) {
  const formState = useFormState();
  const [visible, setVisible] = useState<boolean>(() => {
    const storedVisible = sessionStorage.getItem(SESSION_KEY);

    return storedVisible ? JSON.parse(storedVisible) : false;
  });

  useEffect(() => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(visible));
  }, [visible]);

  return (
    <div className={cn(visible && 'pb-[500px]')}>
      <DevtoolsTrigger
        onClick={() => setVisible(v => !v)}
        className={className}
      />
      {visible && (
        <Portal>
          <div
            className='w-full text-zinc-100 bg-zinc-800 fixed height-[500px] left-0 bottom-0 z-[100000] animate-in slide-in-from-bottom duration-300'
            style={{ colorScheme: 'dark' }}
          >
            <button
              type='button'
              className='absolute -top-5 right-2 w-6 h-5 bg-zinc-800 bg-transparent rounded-t-md flex items-center justify-center'
              onClick={() => setVisible(false)}
            >
              <ChevronDown className='size-4' />
            </button>

            <header className='flex items-center justify-between p-3'>
              <h4 className='font-bold bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 inline-block text-transparent bg-clip-text'>
                @utima/ui-informed
              </h4>
              <div className='flex gap-2'>
                <DevtoolsLabel
                  dotClassName='bg-indigo-400'
                  active={formState.pristine}
                >
                  Pristine
                </DevtoolsLabel>
                <DevtoolsLabel
                  dotClassName='bg-yellow-500'
                  active={formState.dirty}
                >
                  Dirty
                </DevtoolsLabel>
                <DevtoolsLabel
                  dotClassName='bg-cyan-500'
                  active={formState.submitted}
                >
                  Submitted
                </DevtoolsLabel>
                <DevtoolsLabel
                  dotClassName='bg-rose-500'
                  active={formState.invalid}
                >
                  Invalid
                </DevtoolsLabel>
                <DevtoolsLabel
                  dotClassName='bg-emerald-500'
                  active={formState.valid}
                >
                  Valid
                </DevtoolsLabel>
                <DevtoolsLabel
                  active={!!Object.keys(formState.errors).length}
                  dotClassName='bg-orange-500'
                >
                  Errors{' '}
                  <span className='bg-zinc-500 px-1 text-[11px] rounded-md text-zinc-50'>
                    {Object.keys(formState.errors).length}
                  </span>
                </DevtoolsLabel>
              </div>
            </header>

            <div className='grid grid-cols-2 max-h-[450px]'>
              <div className='overflow-y-auto max-h-[450px] text-sm'>
                <h4 className='px-3 py-2 sticky top-0 bg-zinc-700 text-sm flex items-center font-medium'>
                  State
                </h4>
                <div className='px-2 py-1'>
                  <JSONTree hideRoot data={formState} theme={theme} />
                </div>
              </div>
              <div className='overflow-y-auto max-h-[450px] text-sm'>
                <h4 className='px-3 py-2 sticky top-0 bg-zinc-700 text-sm flex items-center font-medium'>
                  Data
                </h4>
                <div className='px-2 py-1'>
                  <JSONTree
                    hideRoot
                    shouldExpandNodeInitially={(_, __, level) => level <= 3}
                    data={formState.values}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
