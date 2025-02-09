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

// Pagination
export * as Pagination from './components/pagination';
export type * from './components/pagination/types';

// Progress
export {
  Progress,
  type ProgressProps,
  progressVariants,
} from './components/progress/progress';

// Dropdown
export * as Dropdown from './components/dropdown';
export type * from './components/dropdown/types';

// Popover
export * as Popover from './components/popover';

// Aspect Ratio
export {
  AspectRatio,
  type AspectRatioProps,
} from '@radix-ui/react-aspect-ratio';

// Resizable
export * as Resizable from './components/resizable';

// Tooltip
export * as Tooltip from './components/tooltip';

// Dialog
export * as Dialog from './components/dialog';

// AlertDialog
export * as AlertDialog from './components/alert-dialog';

// Table
export * as Table from './components/table';

// ScrollArea
export { ScrollArea, type ScrollAreaProps } from './components/scroll-area';

// Toast
export * from './components/toast/toast';

// Avatar
export * as Avatar from './components/avatar';
export { avatarVariants } from './components/avatar/avatar';

// Skeleton
export { Skeleton } from './components/skeleton/skeleton';

// Select
export * as Select from './components/select';
export * from './components/select/select-context';
export * from './components/select/use-select-context';
export type {
  SelectContentProps,
  SelectItemProps,
  SelectRootProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectTriggerProps,
} from './components/select/select';

// Tabs
export * as Tabs from './components/tabs';

// Card
export * as Card from './components/card';

// Accordion
export * as Accordion from './components/accordion';

// Inputs
export { Input, inputVariants, type InputProps } from './components/input/input';
export { TextArea, textareaVariants, type TextareaProps } from './components/input/textarea';

// Alert
export * as Alert from './components/alert';

// Collapsible
export * as Collapsible from './components/collapsible';

// Drawer
export * as Drawer from './components/drawer';

// Command
export * as Command from './components/command';
export { useCommandState } from 'cmdk';

// Sheet
export * as Sheet from './components/sheet';
