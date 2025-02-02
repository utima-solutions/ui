export { cn } from './utils';

/**
 * Re-export radix utilities, so we can use them in the consuming app
 * without having to import them from the radix package directly.
 */
export { Slot, type SlotProps } from '@radix-ui/react-slot';
export { Portal, type PortalProps } from '@radix-ui/react-portal';

/**
 * Components
 */
// Buttton
export {
  Button,
  type ButtonProps,
  buttonVariants,
} from './components/button/button';

// IconButton
export {
  IconButton,
  type IconButtonProps,
  iconButtonVariants,
} from './components/icon-button/icon-button';

// Badge
export {
  Badge,
  type BadgeProps,
  badgeVariants,
} from './components/badge/badge';

// Kbd
export { Kbd, type KbdProps, kbdVariants } from './components/kbd/kbd';

// Switch
export {
  Switch,
  type SwitchProps,
  switchVariants,
} from './components/switch/switch';

// Label
export {
  Label,
  type LabelProps,
  labelVariants,
} from './components/label/label';

// Checkbox
export {
  Checkbox,
  type CheckboxProps,
  checkboxVariants,
} from './components/checkbox/checkbox';

// Separator
export {
  Separator,
  type SeparatorProps,
  separatorVariants,
} from './components/separator/separator';

// Breadcrumb
export * as Breadcrumb from './components/breadcrumb';
export type * from './components/breadcrumb/types';










// Avatar
export { Avatar, type AvatarProps } from './components/avatar/Avatar';
export * as AvatarPrimitive from './components/avatar/index';

// Table
export * as Table from './components/table';

// Inputs
export { Input, type InputProps } from './components/input/Input';
export { TextArea, type TextareaProps } from './components/input/TextArea';

// Tooltip
export { Tooltip, type TooltipProps } from './components/tooltip/Tooltip';

// Select
export * as SelectPrimitive from './components/select';
export { Select, type SelectProps } from './components/select/Select';
export { SelectItem } from './components/select/SelectItem';
export { useSelectContext } from './components/select/useSelectContext';

// Toast
export { Toast, type ToastProps, toast } from './components/toast/Toast';

// Progress
export { Progress, type ProgressProps } from './components/progress/Progress';

// Aspect Ratio
export {
  AspectRatio,
  type AspectRatioProps,
} from './components/aspectRatio/AspectRatio';

// Dropdown
export * as Dropdown from './components/dropdown';

// Popover
export * as Popover from './components/popover';

// Command
export * as Command from './components/command';
export { useCommandState } from 'cmdk';

// Dialog
export * as Dialog from './components/dialog';

// AlertDialog
export * as AlertDialog from './components/alertDialog';

// Layout
export * as Layout from './components/layout';
export { useLayout } from './components/layout/useLayoutContext';

// Menu
export * as Menu from './components/menu';
export { useMenuSubContext } from './components/menu/useMenuSubContext';
export {
  MenuSubContext,
  type MenuSubContextType,
} from './components/menu/menuSubContext';

// Pagination
export * as Pagination from './components/pagination';

// Resizable
export * as Resizable from './components/resizable';
