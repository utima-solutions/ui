import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for wrapping clsx and tailwind-merge together.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
