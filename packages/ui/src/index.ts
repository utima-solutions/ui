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

// Avatar
export * as AvatarPrimitives from '@radix-ui/react-avatar';
export { Avatar } from './components/avatar/Avatar';
export { AvatarFallback } from './components/avatar/AvatarFallback';
export { AvatarImage } from './components/avatar/AvatarImage';
