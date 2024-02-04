import { default as get } from 'lodash.get';
import { twMerge } from 'tailwind-merge';
import type { PartialDeep } from 'type-fest';

import type { avatarDef } from './components/avatar/Avatar.styles';
import type { buttonDef } from './components/button/Button.styles';

// import type { alertDialogDef } from './alertDialog/AlertDialog';
// import type { avatarDef } from './avatar/avatar.styles';
// import type {
//   badgeDef,
//   buttonDef,
//   dividerDef,
//   inputDef,
//   labelDef,
//   tableDef,
//   toastDef,
//   tooltipDef,
// } from './index';
// import type { selectDef } from './select/select.styles';

/**
 * This should hold types for all component style definitions
 * to allow building type for global overrides.
 */
type ComponentOverridesDef = {
  button: typeof buttonDef;
  avatar: typeof avatarDef;
  // badge: typeof badgeDef;
  // divider: typeof dividerDef;
  // table: typeof tableDef;
  // input: typeof inputDef;
  // label: typeof labelDef;
  // toast: typeof toastDef;
  // tooltip: typeof tooltipDef;
  // select: typeof selectDef;
  // alertDialog: typeof alertDialogDef;
};

export type ComponentOverrides = PartialDeep<ComponentOverridesDef>;

/**
 * Singleton object to hold custom global component style overrides.
 */
let overrides: ComponentOverrides;

/**
 * Set global component overrides. This should be called in the top
 * most file (usually index.ts), to ensure that all style overrides
 * are applied correctly.
 */
export function setComponentOverrides(customOverrides: ComponentOverrides) {
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
  componentPath: keyof ComponentOverridesDef,
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