import { default as get } from 'lodash.get';
import { twMerge } from 'tailwind-merge';
import type { PartialDeep } from 'type-fest';



/**
 * Singleton object to hold custom global component style overrides.
 */
let overrides: any;

/**
 * Set global component overrides. This should be called in the top
 * most file (usually index.ts), to ensure that all style overrides
 * are applied correctly.
 */
export function setComponentOverrides(customOverrides: any) {
  overrides = customOverrides;
}

// Initialize with empty object
setComponentOverrides({});

/**
 * Utility for merging tailwind classes with component overrides.
 * This should always wrap any component style definitions to allow
 * for global overrides.
 */
export function twOverrides<T>(
  def: T,
  componentPath: any,
  path: string[] = [],
): T {
  for (const key in def) {
    const val = def[key];

    if (typeof val === 'object') {
      twOverrides(val, componentPath, [...path, key]);

      continue;
    }

    if (typeof val === 'string') {
      const localOverrides = get(overrides, componentPath);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (def[key] as any) = twMerge(
        val,
        get(localOverrides, [...path, key].join('.')),
      );
    }
  }

  return def as T;
}
