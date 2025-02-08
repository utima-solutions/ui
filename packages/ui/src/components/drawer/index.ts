import { Drawer as DrawerPrimitive } from 'vaul';

export const Root = DrawerPrimitive.Root;
export const Portal = DrawerPrimitive.Portal;
export const NestedRoot = DrawerPrimitive.NestedRoot;
export const Close = DrawerPrimitive.Close;
export const Trigger = DrawerPrimitive.Trigger;
export const Handle = DrawerPrimitive.Handle;

export {
  DrawerOverlay as Overlay,
  DrawerContent as Content,
  DrawerHeader as Header,
  DrawerFooter as Footer,
  DrawerTitle as Title,
  DrawerDescription as Description,
} from './drawer';
