'use client';

import { Button } from '@utima/ui';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='fixed top-4 right-4'>
      <Button
        variant='secondary'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </Button>
    </div>
  );
}
