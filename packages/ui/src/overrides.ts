import { default as get } from 'lodash.get';
import { twMerge } from 'tailwind-merge';
import type { PartialDeep } from 'type-fest';

import type { aspectRatioDef } from './components/aspectRatio/AspectRatio.styles';
import type { avatarDef } from './components/avatar/Avatar.styles';
import type { badgeDef } from './components/badge/Badge.styles';
import type { buttonDef } from './components/button/Button.styles';
import type { checkboxDef } from './components/checkbox/Checkbox.styles';
import type { commandDef } from './components/command/Command.styles';
import type { dialogDef } from './components/dialog/Dialog.styles';
import type { dropdownDef } from './components/dropdown/Dropdown.styles';
import type { globalDef } from './components/global.styles';
import type { inputDef } from './components/input/Input.styles';
import type { labelDef } from './components/label/Label.styles';
import type { popoverDef } from './components/popover/Popover.styles';
import type { selectDef } from './components/select/select.styles';
import type { separatorDef } from './components/separator/Separator.styles';
import type { switchDef } from './components/switch/Switch.styles';
import type { tableDef } from './components/table/Table.styles';
import type { toastDef } from './components/toast/Toast.styles';
import type { tooltipDef } from './components/tooltip/Tooltip.styles';

/**
 * This should hold types for all component style definitions
 * to allow building type for global overrides.
 */
type ComponentOverridesDef = {
  global: typeof globalDef;
  button: typeof buttonDef;
  avatar: typeof avatarDef;
  badge: typeof badgeDef;
  label: typeof labelDef;
  table: typeof tableDef;
  input: typeof inputDef;
  tooltip: typeof tooltipDef;
  select: typeof selectDef;
  toast: typeof toastDef;
  aspectRatio: typeof aspectRatioDef;
  switch: typeof switchDef;
  dropdown: typeof dropdownDef;
  popover: typeof popoverDef;
  separator: typeof separatorDef;
  checkbox: typeof checkboxDef;
  command: typeof commandDef;
  dialog: typeof dialogDef;
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
