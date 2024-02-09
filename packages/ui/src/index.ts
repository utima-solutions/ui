export { cn } from './utils';

/**
 * Re-export radix utilities, so we can use them in the consuming app
 * without having to import them from the radix package directly.
 */
export { Slot } from '@radix-ui/react-slot';

/**
 * Components
 */
// Buttton
export { Button } from './components/button/Button';

// Badge
export { Badge } from './components/badge/Badge';

// Avatar
export * as AvatarPrimitive from './components/avatar';
export { Avatar } from './components/avatar/Avatar';

// Label
export { Label } from './components/label/Label';

// Table
export * as Table from './components/table';

// Inputs
export { Input } from './components/input/Input';
export { TextArea } from './components/input/TextArea';

// Tooltip
export { Tooltip } from './components/tooltip/Tooltip';

// Select
export * as SelectPrimitive from './components/select';
export { Select } from './components/select/Select';
export { SelectItem } from './components/select/SelectItem';

// Toast
export { Toast, toast } from './components/toast/Toast';
