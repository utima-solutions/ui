import type { MetaFunction } from '@remix-run/node';
import {
  Badge,
  BreadcrumbEllipsis,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Checkbox,
  IconButton,
  Kbd,
  Label,
  Separator,
  Switch,
  BreadcrumbList,
  Breadcrumb,
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  Card,
  Collapsible,
  Dialog,
  Drawer,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormItem,
  Input,
  Pagination,
  Popover,
  Progress,
  ScrollArea,
  Select,
  Skeleton,
  Slider,
  Tabs,
  Textarea,
  toast,
  Tooltip,
  DropdownMenu,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  TooltipProvider,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
  ResizableGroup,
  ResizableHandle,
  ResizablePanel,
  DialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  AvatarFallback,
  AvatarImage,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectTrigger,
  SelectValue,
  TabsContent,
  TabsList,
  TabsTrigger,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  AlertDescription,
  AlertTitle,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  CollapsibleContent,
  CollapsibleTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  FormActions,
  FormGroup,
  FormItemContent,
  FormItemDescription,
  FormItemError,
  FormItemHelpers,
  FormItemHelperText,
  FormItemLabel,
  FormRow,
  FormSection,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Sheet,
  CommandSeparator,
} from '@utima/ui';
import { Subtitle } from '../../components/subtitle';
import { Title } from '../../components/title';
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronsUpDown,
  Cloud,
  CreditCard,
  Download,
  GitBranchPlus,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Mailbox,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  Terminal,
  User,
  UserPlus,
  Users,
  Calendar,
  Smile,
  Calculator,
  FileText,
  FolderPlus,
  File,
  Folder,
  Search,
  Table,
} from 'lucide-react';
import { BaseLayout } from '../../components/layout';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export default function Index() {
  return (
    <BaseLayout>
      <div className='mt-12 grid min-h-screen items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
        <div className='flex flex-col gap-4'>
          <Title>&lt;Button /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Button variant='primary'>Default</Button>
            </div>
            <div>
              <Button variant='destructive'>Destructive</Button>
            </div>
            <div>
              <Button variant='ghost'>Ghost</Button>
            </div>
            <div>
              <Button variant='link'>Link</Button>
            </div>
            <div>
              <Button variant='success'>Success</Button>
            </div>
            <div>
              <Button variant='secondary'>Secondary</Button>
            </div>
            <div>
              <Button variant='outline'>Outline</Button>
            </div>
          </div>
          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Button size='xs' variant='primary'>
                XS
              </Button>
            </div>
            <div>
              <Button size='sm' variant='primary'>
                SM
              </Button>
            </div>
            <div>
              <Button size='md' variant='primary'>
                Default
              </Button>
            </div>
            <div>
              <Button size='lg' variant='primary'>
                LG
              </Button>
            </div>
            <div>
              <Button size='xl' variant='primary'>
                XL
              </Button>
            </div>
          </div>
          <Subtitle>With icons</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Button size='xs' variant='primary'>
                <Download className='size-10' /> Default
              </Button>
            </div>
            <div>
              <Button size='sm' variant='destructive'>
                <Download /> Destructive
              </Button>
            </div>
            <div>
              <Button size='md' variant='ghost'>
                <Download /> Ghost
              </Button>
            </div>
            <div>
              <Button size='lg' variant='link'>
                <Download /> Link
              </Button>
            </div>
            <div>
              <Button size='xl' variant='success'>
                <Download /> Success
              </Button>
            </div>
          </div>
          <Subtitle>States</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Button size='xs' variant='primary' loading>
                Default
              </Button>
            </div>
            <div>
              <Button size='sm' variant='destructive' circle disabled loading>
                Destructive
              </Button>
            </div>
            <div>
              <Button size='md' variant='ghost' disabled>
                <Download /> Ghost
              </Button>
            </div>
            <div>
              <Button size='lg' variant='link' disabled>
                <Download /> Link
              </Button>
            </div>
            <div>
              <Button size='xl' variant='success' asChild>
                <a href='/'>As child</a>
              </Button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;IconButton /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <IconButton variant='primary'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='destructive'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='ghost'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='link'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='success'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='secondary'>
                <Mailbox />
              </IconButton>
            </div>
            <div>
              <IconButton variant='outline'>
                <Mailbox />
              </IconButton>
            </div>
          </div>
          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <IconButton size='xs' variant='primary'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='sm' variant='primary'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='md' variant='primary'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='lg' variant='primary'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='xl' variant='primary'>
                <Download />
              </IconButton>
            </div>
          </div>
          <Subtitle>With icons</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <IconButton size='xs' variant='primary'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='sm' variant='destructive'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='md' variant='ghost'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='lg' variant='link'>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='xl' variant='success'>
                <Download />
              </IconButton>
            </div>
          </div>
          <Subtitle>States</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <IconButton size='xs' variant='primary' loading>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton
                size='sm'
                variant='destructive'
                circle
                disabled
                loading
              >
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='md' variant='ghost' disabled>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='lg' variant='link' disabled>
                <Download />
              </IconButton>
            </div>
            <div>
              <IconButton size='xl' variant='success' asChild>
                <a href='/'>
                  <Download />
                </a>
              </IconButton>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;ButtonGroup /&gt;</Title>
          <Subtitle>Button</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <ButtonGroup>
              <Button variant='primary'>
                <Download /> Default
              </Button>
              <Button variant='primary'>
                <Download /> Destructive
              </Button>
              <Button variant='primary'>
                <Download /> Ghost
              </Button>
              <Button variant='primary'>
                <Download /> Link
              </Button>
              <Button variant='primary'>
                <Download /> Success
              </Button>
            </ButtonGroup>
          </div>
          <div className='flex flex-row flex-wrap gap-4'>
            <ButtonGroup variant='outline'>
              <Button variant='outline'>
                <Download className='size-10' /> Default
              </Button>
              <Button variant='outline'>
                <Download /> Destructive
              </Button>
              <Button variant='outline'>
                <Download /> Ghost
              </Button>
              <Button variant='outline'>
                <Download /> Link
              </Button>
              <Button variant='outline'>
                <Download /> Success
              </Button>
            </ButtonGroup>
          </div>
          <div className='flex flex-row flex-wrap gap-4'>
            <ButtonGroup variant='success'>
              <IconButton variant='success'>
                <Download />
              </IconButton>
              <IconButton variant='success'>
                <Download />
              </IconButton>
              <IconButton variant='success'>
                <Download />
              </IconButton>
              <IconButton variant='success'>
                <Download />
              </IconButton>
              <IconButton variant='success' asChild>
                <a href='/'>
                  <Download />
                </a>
              </IconButton>
            </ButtonGroup>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Badge /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Badge variant='primary'>Default</Badge>
            </div>
            <div>
              <Badge variant='destructive'>Destructive</Badge>
            </div>
            <div>
              <Badge variant='secondary'>Secondary</Badge>
            </div>
            <div>
              <Badge variant='success'>Success</Badge>
            </div>
            <div>
              <Badge variant='outline'>Outline</Badge>
            </div>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row flex-wrap items-center gap-4'>
            <div>
              <Badge size='xs' variant='primary'>
                XS
              </Badge>
            </div>
            <div>
              <Badge size='sm' variant='primary'>
                SM
              </Badge>
            </div>
            <div>
              <Badge size='md' variant='primary'>
                Default
              </Badge>
            </div>
            <div>
              <Badge size='lg' variant='primary'>
                LG
              </Badge>
            </div>
            <div>
              <Badge size='xl' variant='primary'>
                XL
              </Badge>
            </div>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Badge variant='primary' disabled>
                Disabled
              </Badge>
            </div>
            <div>
              <Badge variant='outline' disabled>
                Outline Disabled
              </Badge>
            </div>
            <div>
              <Badge variant='primary' circle>
                Circle
              </Badge>
            </div>
            <div>
              <Badge variant='outline' circle>
                Circle Outline
              </Badge>
            </div>
            <div>
              <Badge variant='outline' circle>
                <span className='bg-success size-1.5 rounded-full' />
                Custom Status
              </Badge>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Label /&gt;</Title>
          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row gap-4'>
            <div>
              <Label size='xs'>Extra Small Label</Label>
            </div>
            <div>
              <Label size='sm'>Small Label</Label>
            </div>
            <div>
              <Label size='md'>Default Label</Label>
            </div>
            <div>
              <Label size='lg'>Large Label</Label>
            </div>
            <div>
              <Label size='xl'>Extra Large Label</Label>
            </div>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-row gap-4'>
            <div>
              <Label disabled>Disabled Label</Label>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Kbd /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row flex-wrap gap-4'>
            <div>
              <Kbd variant='outline'>Outline ⌘</Kbd>
            </div>
            <div>
              <Kbd variant='ghost'>Ghost ⌘</Kbd>
            </div>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row flex-wrap items-center gap-4'>
            <div>
              <Kbd size='xs'>⌘</Kbd>
            </div>
            <div>
              <Kbd size='sm'>⌘</Kbd>
            </div>
            <div>
              <Kbd size='md'>⌘</Kbd>
            </div>
            <div>
              <Kbd size='lg'>⌘</Kbd>
            </div>
            <div>
              <Kbd size='xl'>⌘</Kbd>
            </div>
          </div>

          <Subtitle>Examples</Subtitle>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command menu
            </div>
            <div>
              <Button variant='primary'>
                Add new
                <Kbd
                  variant='outline'
                  className='text-primary-foreground/50 border-border/50 bg-transparent'
                  size='xs'
                >
                  ⌘ + K
                </Kbd>
              </Button>
            </div>
            <div className='flex items-center gap-2'>
              Press <Kbd variant='outline'>Shift</Kbd> +{' '}
              <Kbd variant='outline'>?</Kbd> for help
            </div>
            <div className='flex items-center gap-2'>
              <Kbd
                size='lg'
                variant='outline'
                circle
                className='pointer-events-none opacity-50'
              >
                Esc
              </Kbd>{' '}
              to close
            </div>
            <div className='flex items-center gap-2'>
              <Kbd size='xl'>↑</Kbd> <Kbd size='xl'>↓</Kbd> to navigate
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Checkbox /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-primary'
                variant='primary'
                defaultChecked
              />
              <Label htmlFor='checkbox-primary'>Primary</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-success'
                variant='success'
                defaultChecked
              />
              <Label htmlFor='checkbox-success'>Success</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-destructive'
                variant='destructive'
                defaultChecked
              />
              <Label htmlFor='checkbox-destructive'>Destructive</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-secondary'
                variant='secondary'
                defaultChecked
              />
              <Label htmlFor='checkbox-secondary'>Secondary</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-outline'
                variant='outline'
                defaultChecked
              />
              <Label htmlFor='checkbox-outline'>Outline</Label>
            </div>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-xs' size='xs' defaultChecked />
              <Label htmlFor='checkbox-xs' size='xs'>
                XS
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-sm' size='sm' defaultChecked />
              <Label htmlFor='checkbox-sm' size='sm'>
                SM
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-md' size='md' defaultChecked />
              <Label htmlFor='checkbox-md'>Default</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-lg' size='lg' defaultChecked />
              <Label htmlFor='checkbox-lg' size='lg'>
                LG
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-xl' size='xl' defaultChecked />
              <Label htmlFor='checkbox-xl' size='xl'>
                XL
              </Label>
            </div>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-row gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-checked' defaultChecked />
              <Label htmlFor='checkbox-checked'>Checked</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='checkbox-disabled' disabled />
              <Label htmlFor='checkbox-disabled' disabled>
                Disabled
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-disabled-checked'
                disabled
                defaultChecked
              />
              <Label htmlFor='checkbox-disabled-checked' disabled>
                Disabled Checked
              </Label>
            </div>
          </div>

          <Subtitle>Customization</Subtitle>
          <div className='flex flex-row gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-custom-indicator'
                variant='primary'
                defaultChecked
                indicator={<Download className='size-3' />}
              />
              <Label htmlFor='checkbox-custom-indicator'>Custom Icon</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-custom-class'
                variant='primary'
                defaultChecked
                classNameIndicator='text-yellow-500'
              />
              <Label htmlFor='checkbox-custom-class'>Custom Color</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='checkbox-circle'
                variant='outline'
                defaultChecked
                circle
              />
              <Label htmlFor='checkbox-circle'>Circle</Label>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Switch /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Switch id='switch-primary' variant='primary' defaultChecked />
              <Label htmlFor='switch-primary'>Primary</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-success' variant='success' defaultChecked />
              <Label htmlFor='switch-success'>Success</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch
                id='switch-destructive'
                variant='destructive'
                defaultChecked
              />
              <Label htmlFor='switch-destructive'>Destructive</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch
                id='switch-secondary'
                variant='secondary'
                defaultChecked
              />
              <Label htmlFor='switch-secondary'>Secondary</Label>
            </div>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Switch id='switch-xs' size='xs' defaultChecked />
              <Label htmlFor='switch-xs' size='xs'>
                XS
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-sm' size='sm' defaultChecked />
              <Label htmlFor='switch-sm' size='sm'>
                SM
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-md' size='md' defaultChecked />
              <Label htmlFor='switch-md'>Default</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-lg' size='lg' defaultChecked />
              <Label htmlFor='switch-lg' size='lg'>
                LG
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-xl' size='xl' defaultChecked />
              <Label htmlFor='switch-xl' size='xl'>
                XL
              </Label>
            </div>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-row gap-4'>
            <div className='flex items-center gap-2'>
              <Switch id='switch-checked' defaultChecked />
              <Label htmlFor='switch-checked'>Checked</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-disabled' disabled />
              <Label htmlFor='switch-disabled' disabled>
                Disabled
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch id='switch-disabled-checked' disabled defaultChecked />
              <Label htmlFor='switch-disabled-checked' disabled>
                Disabled Checked
              </Label>
            </div>
          </div>

          <Subtitle>Customization</Subtitle>
          <div className='flex flex-row gap-4'>
            <div className='flex items-center gap-2'>
              <Switch
                id='switch-custom-thumb'
                classNameThumb='items-center justify-center inline-flex'
                variant='primary'
                defaultChecked
                thumb={<Check className='size-3' strokeWidth={3} />}
              />
              <Label htmlFor='switch-custom-thumb'>Custom Thumb</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Switch
                id='switch-custom-class'
                variant='primary'
                defaultChecked
                classNameThumb='bg-yellow-500'
              />
              <Label htmlFor='switch-custom-class'>Custom Color</Label>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Separator /&gt;</Title>
          <Subtitle>Orientations</Subtitle>
          <div className='flex flex-col gap-4'>
            <div className='space-y-4'>
              <div>Above horizontal separator</div>
              <Separator orientation='horizontal' className='w-full' />
              <div>Below horizontal separator</div>
            </div>
            <div className='flex h-8 items-center space-x-4'>
              <div>Left</div>
              <Separator orientation='vertical' />
              <div>Middle</div>
              <Separator orientation='vertical' />
              <div>Right</div>
            </div>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-4'>
            <div className='space-y-4'>
              <Separator size='xs' />
              <Separator size='sm' />
              <Separator size='md' />
              <Separator size='lg' />
              <Separator size='xl' />
            </div>
            <div className='flex h-8 items-center space-x-4'>
              <Separator orientation='vertical' size='xs' />
              <Separator orientation='vertical' size='sm' />
              <Separator orientation='vertical' size='md' />
              <Separator orientation='vertical' size='lg' />
              <Separator orientation='vertical' size='xl' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Breadcrumb /&gt;</Title>
          <div className='flex flex-col gap-4'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/'>Documents</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage>Current Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Dropdown /&gt;</Title>
          <div className='flex flex-col gap-4'>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User />
                        <span>Profile</span>
                        <Kbd variant='ghost' size='sm'>
                          ⇧⌘P
                        </Kbd>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard />
                        <span>Billing</span>
                        <Kbd variant='ghost' size='sm'>
                          ⌘B
                        </Kbd>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <Kbd variant='ghost' size='sm'>
                          ⌘S
                        </Kbd>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Keyboard />
                        <span>Keyboard shortcuts</span>
                        <Kbd variant='ghost' size='sm'>
                          ⌘K
                        </Kbd>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Users />
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <UserPlus />
                          <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <Mail />
                              <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare />
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <PlusCircle />
                              <span>More...</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        <Plus />
                        <span>New Team</span>
                        <Kbd variant='ghost' size='sm'>
                          ⌘+T
                        </Kbd>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <GitBranchPlus />
                      <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy />
                      <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      <Cloud />
                      <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioItem value='1'>
                      Test
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value='2'>
                      Test
                    </DropdownMenuRadioItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>Test</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Test</DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut />
                      <span>Log out</span>
                      <Kbd variant='ghost' size='sm'>
                        ⇧⌘Q
                      </Kbd>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Pagination /&gt;</Title>
          <Subtitle>Default</Subtitle>
          <div className='flex flex-col gap-4'>
            <Pagination>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <PaginationItem selected>3</PaginationItem>
                <PaginationItem>4</PaginationItem>
                <PaginationItem>5</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </div>

          <Subtitle>With ellipsis</Subtitle>
          <div className='flex flex-col gap-4'>
            <Pagination>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>4</PaginationItem>
                <PaginationItem selected>5</PaginationItem>
                <PaginationItem>6</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-4'>
            <Pagination size='xs'>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem selected>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>

            <Pagination size='sm'>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem selected>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>

            <Pagination size='md'>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem selected>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>

            <Pagination size='lg'>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem selected>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>

            <Pagination size='lg'>
              <PaginationContent>
                <PaginationPrev />
                <PaginationItem>1</PaginationItem>
                <PaginationItem selected>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-col gap-4'>
            <Pagination>
              <PaginationContent>
                <PaginationPrev disabled />
                <PaginationItem selected>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext />
              </PaginationContent>
            </Pagination>

            <Pagination>
              <PaginationContent>
                <PaginationPrev asChild>
                  <a href='#'>
                    <ChevronLeft />
                    As Child
                  </a>
                </PaginationPrev>
                <PaginationItem>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <PaginationItem selected>3</PaginationItem>
                <PaginationEllipsis />
                <PaginationItem>10</PaginationItem>
                <PaginationNext disabled>Custom Next</PaginationNext>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Progress /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-col gap-4'>
            <Progress value={25} variant='primary' />
            <Progress value={50} variant='success' />
            <Progress value={65} variant='destructive' />
            <Progress value={75} variant='secondary' />
            <Progress value={90} variant='outline' />
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-4'>
            <Progress value={75} size='xs' />
            <Progress value={75} size='sm' />
            <Progress value={75} size='md' />
            <Progress value={75} size='lg' />
            <Progress value={75} size='xl' />
          </div>

          <Subtitle>Custom max value</Subtitle>
          <div className='flex flex-col gap-4'>
            <Progress value={25} max={50} />
            <Progress value={750} max={1000} />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Popover /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='outline'>Open Popover</Button>
              </PopoverTrigger>
              <PopoverPortal>
                <PopoverContent align='start'>
                  <div className='grid gap-4'>
                    <div className='space-y-2'>
                      <h4 className='font-medium leading-none'>Dimensions</h4>
                      <p className='text-muted-foreground text-sm'>
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className='grid gap-2'>
                      <div className='grid grid-cols-3 items-center gap-4'>
                        <Label htmlFor='width'>Width</Label>
                        <Input
                          id='width'
                          defaultValue='100%'
                          className='col-span-2 h-8'
                        />
                      </div>
                      <div className='grid grid-cols-3 items-center gap-4'>
                        <Label htmlFor='maxWidth'>Max. width</Label>
                        <Input
                          id='maxWidth'
                          defaultValue='300px'
                          className='col-span-2 h-8'
                        />
                      </div>
                      <div className='grid grid-cols-3 items-center gap-4'>
                        <Label htmlFor='height'>Height</Label>
                        <Input
                          id='height'
                          defaultValue='25px'
                          className='col-span-2 h-8'
                        />
                      </div>
                      <div className='grid grid-cols-3 items-center gap-4'>
                        <Label htmlFor='maxHeight'>Max. height</Label>
                        <Input
                          id='maxHeight'
                          defaultValue='none'
                          className='col-span-2 h-8'
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </PopoverPortal>
            </Popover>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Tooltip /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant='outline'>Hover me</Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent>
                    <p>Hello</p>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Resizable /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <ResizableGroup
              direction='horizontal'
              className='max-w-md rounded-lg border md:min-w-[450px]'
            >
              <ResizablePanel defaultSize={50}>
                <div className='flex h-[200px] items-center justify-center p-6'>
                  <span className='font-semibold'>One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <ResizableGroup direction='vertical'>
                  <ResizablePanel defaultSize={25}>
                    <div className='flex h-full items-center justify-center p-6'>
                      <span className='font-semibold'>Two</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className='flex h-full items-center justify-center p-6'>
                      <span className='font-semibold'>Three</span>
                    </div>
                  </ResizablePanel>
                </ResizableGroup>
              </ResizablePanel>
            </ResizableGroup>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Dialog /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline'>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      value='Pedro Duarte'
                      className='col-span-3'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='username' className='text-right'>
                      Username
                    </Label>
                    <Input
                      id='username'
                      value='@peduarte'
                      className='col-span-3'
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;AlertDialog /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant='outline'>Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogPortal>
                  <AlertDialogOverlay />
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialog>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Table /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className='text-right'>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className='font-medium'>
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className='text-right'>
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className='text-right'>$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;ScrollArea /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <ScrollArea className='h-72 w-48 rounded-md border'>
                <div className='p-4'>
                  <h4 className='mb-4 text-sm font-medium leading-none'>
                    Tags
                  </h4>
                  {tags.map((tag) => (
                    <>
                      <div key={tag} className='text-sm'>
                        {tag}
                      </div>
                      <Separator size='sm' className='my-2' />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Avatar /&gt;</Title>
            <Subtitle>Sizes</Subtitle>
            <div className='flex items-center gap-4'>
              <Avatar size='xs'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size='sm'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size='md'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size='lg'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size='xl'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <Subtitle>With Fallback</Subtitle>
            <div className='flex items-center gap-4'>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>🎉</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  UI
                </AvatarFallback>
              </Avatar>
            </div>

            <Subtitle>Invalid Image</Subtitle>
            <div className='flex items-center gap-4'>
              <Avatar>
                <AvatarImage src='/broken-image.jpg' alt='@broken' />
                <AvatarFallback>BK</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Toast /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Button
                variant='outline'
                onClick={() =>
                  toast('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo'),
                    },
                  })
                }
              >
                Show Toast
              </Button>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Skeleton /&gt;</Title>
            <div className='flex items-center space-x-4'>
              <Skeleton className='size-12 rounded-full' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Select /&gt;</Title>
            <Subtitle>Sizes</Subtitle>
            <div className='flex items-end gap-4'>
              <Select size='xs'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Extra small' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='banana'>Banana</SelectItem>
                      <SelectItem value='blueberry'>Blueberry</SelectItem>
                      <SelectItem value='grapes'>Grapes</SelectItem>
                      <SelectItem value='pineapple'>Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Select size='sm'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Small' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='banana'>Banana</SelectItem>
                      <SelectItem value='blueberry'>Blueberry</SelectItem>
                      <SelectItem value='grapes'>Grapes</SelectItem>
                      <SelectItem value='pineapple'>Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Select size='md'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Medium (default)' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='banana'>Banana</SelectItem>
                      <SelectItem value='blueberry'>Blueberry</SelectItem>
                      <SelectItem value='grapes'>Grapes</SelectItem>
                      <SelectItem value='pineapple'>Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectPortal>
              </Select>

              <Select size='lg'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Large' />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='banana'>Banana</SelectItem>
                      <SelectItem value='blueberry'>Blueberry</SelectItem>
                      <SelectItem value='grapes'>Grapes</SelectItem>
                      <SelectItem value='pineapple'>Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectPortal>
              </Select>
            </div>

            <Subtitle>Default Example</Subtitle>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectPortal>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value='apple'>Apple</SelectItem>
                    <SelectItem value='banana'>Banana</SelectItem>
                    <SelectItem value='blueberry'>Blueberry</SelectItem>
                    <SelectItem value='grapes'>Grapes</SelectItem>
                    <SelectItem value='pineapple'>Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectPortal>
            </Select>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Tabs /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Tabs defaultValue='account' className='w-[400px]'>
                <TabsList className='grid w-full grid-cols-2'>
                  <TabsTrigger value='account'>Account</TabsTrigger>
                  <TabsTrigger value='password'>Password</TabsTrigger>
                </TabsList>
                <TabsContent value='account'>
                  <div className='width-96 border-border bg-muted flex h-32 items-center justify-center rounded-md border text-sm font-medium'>
                    Account
                  </div>
                </TabsContent>
                <TabsContent value='password'>
                  <div className='width-96 border-border bg-muted flex h-32 items-center justify-center rounded-md border text-sm font-medium'>
                    Password
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Card /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Card className='w-80'>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className='grid w-full items-center gap-4'>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' placeholder='Name of your project' />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='framework'>Framework</Label>
                        <Select>
                          <SelectTrigger id='framework'>
                            <SelectValue placeholder='Select' />
                          </SelectTrigger>
                          <SelectContent position='popper'>
                            <SelectItem value='next'>Next.js</SelectItem>
                            <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                            <SelectItem value='astro'>Astro</SelectItem>
                            <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Button variant='outline'>Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Alert /&gt;</Title>
            <Subtitle>Default</Subtitle>
            <Alert>
              <Terminal className='size-4' />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>

            <Subtitle>Primary</Subtitle>
            <Alert variant='primary'>
              <Terminal className='size-4' />
              <AlertTitle>Welcome!</AlertTitle>
              <AlertDescription>
                Get started with your new project by exploring the
                documentation.
              </AlertDescription>
            </Alert>

            <Subtitle>Outline</Subtitle>
            <Alert variant='outline'>
              <Terminal className='size-4' />
              <AlertTitle>Welcome!</AlertTitle>
              <AlertDescription>
                Get started with your new project by exploring the
                documentation.
              </AlertDescription>
            </Alert>

            <Alert variant='primary'>
              <MessageSquare className='size-4' />
              <AlertDescription>
                New message from your team. Click here to read it.
              </AlertDescription>
            </Alert>

            <Subtitle>Success</Subtitle>
            <Alert variant='success'>
              <Check className='size-4' />
              <AlertTitle>Successfully saved!</AlertTitle>
              <AlertDescription>
                Your changes have been saved to the cloud.
              </AlertDescription>
            </Alert>

            <Alert variant='success'>
              <Check className='size-4' />
              <AlertDescription>
                Your profile has been updated successfully.
              </AlertDescription>
            </Alert>

            <Alert variant='success'>
              <Check className='size-4' />
              <AlertTitle>Payment processed</AlertTitle>
              <AlertDescription>
                <div className='mb-3'>
                  Your payment has been successfully processed and confirmed.
                </div>
                <Button size='sm' variant='outline'>
                  View Receipt
                </Button>
              </AlertDescription>
            </Alert>

            <Subtitle>Destructive</Subtitle>
            <Alert variant='destructive'>
              <AlertCircle className='size-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>

            <Subtitle>Without Icon</Subtitle>
            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                This is a simple alert without an icon.
              </AlertDescription>
            </Alert>

            <Subtitle>Without Title</Subtitle>
            <Alert>
              <Terminal className='size-4' />
              <AlertDescription>
                You can also create alerts without titles for simple messages.
              </AlertDescription>
            </Alert>

            <Subtitle>With Custom Content</Subtitle>
            <Alert>
              <Terminal className='size-4' />
              <AlertTitle>Deployment Started</AlertTitle>
              <AlertDescription>
                <div className='mb-3'>
                  Your application is being deployed to production.
                </div>
                <div className='flex gap-3'>
                  <Button size='sm' variant='outline'>
                    View Logs
                  </Button>
                  <Button size='sm'>Open Dashboard</Button>
                </div>
              </AlertDescription>
            </Alert>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Accordion /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Collapsible /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Collapsible className='w-[350px] space-y-2'>
                <div className='flex items-center justify-between space-x-4 px-4'>
                  <h4 className='text-sm font-semibold'>
                    @peduarte starred 3 repositories
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm'>
                      <ChevronsUpDown className='size-4' />
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className='space-y-2'>
                  <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                    @radix-ui/colors
                  </div>
                  <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Drawer /&gt;</Title>
            <div className='flex flex-row gap-4'>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant='outline'>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerPortal>
                  <DrawerOverlay />
                  <DrawerContent>
                    <div className='mx-auto w-full max-w-sm'>
                      <DrawerHeader>
                        <DrawerHandle />
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>
                          Set your daily activity goal.
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </DrawerPortal>
              </Drawer>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Input /&gt;</Title>
            <Subtitle>Variants</Subtitle>
            <div className='flex flex-col gap-4'>
              <Input placeholder='Default input' />
              <Input variant='destructive' placeholder='Destructive input' />
              <Input variant='success' placeholder='Success input' />
            </div>

            <Subtitle>Sizes</Subtitle>
            <div className='flex flex-col gap-4'>
              <Input size='xs' placeholder='Extra small input' />
              <Input size='sm' placeholder='Small input' />
              <Input size='md' placeholder='Default input' />
              <Input size='lg' placeholder='Large input' />
            </div>

            <Subtitle>With addons</Subtitle>
            <div className='flex flex-col gap-4'>
              {/* <Input addonBefore='http://' placeholder='example.com' />
            <Input addonAfter='.com' placeholder='domain' />
            <Input
              addonBefore={<Mail className='size-4' />}
              placeholder='Enter email'
            />
            <Input
              addonAfter={<Check className='size-4' />}
              placeholder='Verified input'
            /> */}
            </div>

            <Subtitle>States</Subtitle>
            <div className='flex flex-col gap-4'>
              <Input placeholder='Disabled input' disabled />
              <Input placeholder='Required input' required />
              <Input placeholder='Read only input' readOnly />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;TextArea /&gt;</Title>
            <Subtitle>Variants</Subtitle>
            <div className='flex flex-col gap-4'>
              <Textarea placeholder='Default textarea' />
              <Textarea
                variant='destructive'
                placeholder='Destructive textarea'
              />
              <Textarea variant='success' placeholder='Success textarea' />
            </div>

            <Subtitle>Sizes</Subtitle>
            <div className='flex flex-col gap-4'>
              <Textarea size='xs' placeholder='Extra small textarea' />
              <Textarea size='sm' placeholder='Small textarea' />
              <Textarea size='md' placeholder='Default textarea' />
              <Textarea size='lg' placeholder='Large textarea' />
            </div>

            <Subtitle>With addons</Subtitle>
            <div className='flex flex-col gap-4'>
              <Textarea
                addonBefore={<MessageSquare className='size-4' />}
                placeholder='Enter message'
              />
              <Textarea
                addonAfter={<Check className='size-4' />}
                placeholder='Verified message'
              />
            </div>

            <Subtitle>States</Subtitle>
            <div className='flex flex-col gap-4'>
              <Textarea placeholder='Disabled textarea' disabled />
              <Textarea placeholder='Required textarea' required />
              <Textarea placeholder='Read only textarea' readOnly />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Command /&gt;</Title>
            <Subtitle>Default</Subtitle>
            <div className='flex flex-col gap-4'>
              <Command>
                <CommandInput placeholder='Type a command or search...' />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading='Suggestions'>
                    <CommandItem>
                      <Calendar className='mr-2 size-4' />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className='mr-2 size-4' />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className='mr-2 size-4' />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading='Settings'>
                    <CommandItem>
                      <User className='mr-2 size-4' />
                      <span>Profile</span>
                      <Kbd className='ml-auto' size='sm'>
                        ⌘P
                      </Kbd>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className='mr-2 size-4' />
                      <span>Billing</span>
                      <Kbd className='ml-auto' size='sm'>
                        ⌘B
                      </Kbd>
                    </CommandItem>
                    <CommandItem>
                      <Settings className='mr-2 size-4' />
                      <span>Settings</span>
                      <Kbd className='ml-auto' size='sm'>
                        ⌘S
                      </Kbd>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>

            <Subtitle>With Loading State</Subtitle>
            <div className='flex flex-col gap-4'>
              <Command>
                <CommandInput placeholder='Loading example...' loading />
                <CommandList>
                  <CommandEmpty loading loadingMessage='Fetching results...' />
                </CommandList>
              </Command>
            </div>

            <Subtitle>In Dialog</Subtitle>
            <div className='flex flex-col gap-4'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='outline'>
                    <Search className='mr-2 size-4' />
                    Search Commands
                  </Button>
                </DialogTrigger>
                <CommandDialog>
                  <CommandInput placeholder='Type a command or search...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Quick Actions'>
                      <CommandItem>
                        <Plus className='mr-2 size-4' />
                        <span>Create New Project</span>
                      </CommandItem>
                      <CommandItem>
                        <FileText className='mr-2 size-4' />
                        <span>Create New Document</span>
                      </CommandItem>
                      <CommandItem>
                        <FolderPlus className='mr-2 size-4' />
                        <span>Create New Folder</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading='Recent'>
                      <CommandItem>
                        <File className='mr-2 size-4' />
                        <span>design-system.fig</span>
                      </CommandItem>
                      <CommandItem>
                        <File className='mr-2 size-4' />
                        <span>presentation.pdf</span>
                      </CommandItem>
                      <CommandItem>
                        <Folder className='mr-2 size-4' />
                        <span>Project Assets</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </CommandDialog>
              </Dialog>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Sheet /&gt;</Title>
            <Subtitle>Default</Subtitle>
            <div className='flex flex-row gap-4'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Open Sheet</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className='grid gap-4 py-4'>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='name' className='text-right'>
                          Name
                        </Label>
                        <Input
                          id='name'
                          value='Pedro Duarte'
                          className='col-span-3'
                        />
                      </div>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='username' className='text-right'>
                          Username
                        </Label>
                        <Input
                          id='username'
                          value='@peduarte'
                          className='col-span-3'
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <Button type='submit'>Save changes</Button>
                    </SheetFooter>
                  </SheetContent>
                </SheetPortal>
              </Sheet>
            </div>

            <Subtitle>Side Variants</Subtitle>
            <div className='flex flex-row gap-4'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Top Sheet</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent side='top'>
                    <SheetHeader>
                      <SheetTitle>Top Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the top of the screen.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </SheetPortal>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Right Sheet</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent side='right'>
                    <SheetHeader>
                      <SheetTitle>Right Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the right of the screen.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </SheetPortal>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Bottom Sheet</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent side='bottom'>
                    <SheetHeader>
                      <SheetTitle>Bottom Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the bottom of the screen.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </SheetPortal>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Left Sheet</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent side='left'>
                    <SheetHeader>
                      <SheetTitle>Left Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the left of the screen.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </SheetPortal>
              </Sheet>
            </div>

            <Subtitle>Custom Close Icon</Subtitle>
            <div className='flex flex-row gap-4'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline'>Custom Close</Button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay />
                  <SheetContent
                    closeIcon={<Menu className='size-4' />}
                    closeLabel='Menu'
                  >
                    <SheetHeader>
                      <SheetTitle>Custom Close Icon</SheetTitle>
                      <SheetDescription>
                        This sheet uses a custom close icon and label.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </SheetPortal>
              </Sheet>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;Slider /&gt;</Title>
            <Subtitle>Variants</Subtitle>
            <div className='flex max-w-md flex-col gap-4'>
              <Slider defaultValue={[50]} variant='primary' />
              <Slider defaultValue={[75]} variant='success' />
              <Slider defaultValue={[25]} variant='destructive' />
              <Slider defaultValue={[60]} variant='secondary' />
              <Slider defaultValue={[40]} variant='outline' />
            </div>

            <Subtitle>Sizes</Subtitle>
            <div className='flex max-w-md flex-col gap-8'>
              <FormItem size='xs'>
                <FormItemLabel>Extra Small</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[25]} size='xs' />
                </FormItemContent>
              </FormItem>

              <FormItem size='sm'>
                <FormItemLabel>Small</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[50]} size='sm' />
                  <FormItemDescription>
                    Small slider with matching form field size
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>

              <FormItem size='md'>
                <FormItemLabel>Medium (Default)</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[75]} size='md' />
                  <FormItemDescription>
                    Default size slider with matching form field size
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>

              <FormItem size='lg'>
                <FormItemLabel>Large</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[85]} size='lg' />
                  <FormItemDescription>
                    Large slider with matching form field size
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>
            </div>

            <Subtitle>Layouts</Subtitle>
            <div className='flex max-w-md flex-col gap-8'>
              <FormItem layout='vertical'>
                <FormItemLabel>Vertical Layout</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[75]} />
                  <FormItemDescription>
                    Label appears above the slider
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>

              <FormItem layout='vertical'>
                <FormItemLabel>Vertical Layout</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[75]} />
                  <FormItemDescription>
                    Label appears above the slider
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>

              <FormItem layout='horizontal'>
                <FormItemLabel>Horizontal Layout</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[75]} />
                  <FormItemDescription>
                    Default size slider with matching form field size
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>
            </div>

            <Subtitle>With Helpers</Subtitle>
            <div className='flex max-w-md flex-col gap-8'>
              <FormItem>
                <FormItemLabel tooltip='Drag to adjust volume'>
                  Volume
                </FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[75]} />
                  <FormItemHelpers>
                    <FormItemDescription>
                      Adjust system volume
                    </FormItemDescription>
                    <FormItemHelperText position='right'>
                      75%
                    </FormItemHelperText>
                  </FormItemHelpers>
                </FormItemContent>
              </FormItem>

              <FormItem>
                <FormItemLabel required>Range Selection</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[10, 90]} variant='destructive' />
                  <FormItemDescription>
                    Select a range between 20 and 80
                  </FormItemDescription>
                  <FormItemError>Value must be between 20 and 80</FormItemError>
                </FormItemContent>
              </FormItem>
            </div>

            <Subtitle>States</Subtitle>
            <div className='flex max-w-md flex-col gap-4'>
              <Slider
                onValueChange={(value) => console.log(value)}
                defaultValue={[50]}
                disabled
              />
              <Slider
                onValueChange={(value) => console.log(value)}
                defaultValue={[30, 70]}
                disabled
              />
            </div>

            <Subtitle>Custom Steps</Subtitle>
            <div className='flex max-w-md flex-col gap-4'>
              <FormItem>
                <FormItemLabel>Step 10</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[50]} step={10} />
                  <FormItemDescription>
                    Slider with step value of 10
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>

              <FormItem>
                <FormItemLabel>Fine Control</FormItemLabel>
                <FormItemContent>
                  <Slider
                    defaultValue={[0.1, 0.2, 0.7]}
                    onValueChange={(value) => console.log(value)}
                    max={1}
                    step={0.1}
                  />
                  <FormItemDescription>
                    Slider with decimal steps (0.1)
                  </FormItemDescription>
                </FormItemContent>
              </FormItem>
            </div>

            <Subtitle>Vertical Orientation</Subtitle>
            <div className='flex h-48 flex-row gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <Label>Primary</Label>
                <Slider defaultValue={[30]} orientation='vertical' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Success</Label>
                <Slider
                  defaultValue={[50]}
                  orientation='vertical'
                  variant='success'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Destructive</Label>
                <Slider
                  defaultValue={[70]}
                  orientation='vertical'
                  variant='destructive'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Secondary</Label>
                <Slider
                  defaultValue={[40]}
                  orientation='vertical'
                  variant='secondary'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Outline</Label>
                <Slider
                  defaultValue={[60]}
                  orientation='vertical'
                  variant='outline'
                />
              </div>
            </div>

            <Subtitle>Vertical Sizes</Subtitle>
            <div className='flex h-48 flex-row gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <Label size='xs'>XS</Label>
                <Slider defaultValue={[30]} orientation='vertical' size='xs' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label size='sm'>SM</Label>
                <Slider defaultValue={[40]} orientation='vertical' size='sm' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>MD</Label>
                <Slider defaultValue={[50]} orientation='vertical' size='md' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label size='lg'>LG</Label>
                <Slider defaultValue={[60]} orientation='vertical' size='lg' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label size='xl'>XL</Label>
                <Slider defaultValue={[70]} orientation='vertical' size='xl' />
              </div>
            </div>

            <Subtitle>Vertical Range</Subtitle>
            <div className='flex h-48 flex-row gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <Label>Primary</Label>
                <Slider defaultValue={[20, 80]} orientation='vertical' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Success</Label>
                <Slider
                  defaultValue={[30, 60]}
                  orientation='vertical'
                  variant='success'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>With Steps</Label>
                <Slider
                  defaultValue={[25, 75]}
                  orientation='vertical'
                  step={25}
                />
              </div>
            </div>

            <Subtitle>Thumb Shapes</Subtitle>
            <div className='flex max-w-md flex-col gap-4'>
              <FormItem>
                <FormItemLabel>Circle (Default)</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[50]} shape='circle' />
                </FormItemContent>
              </FormItem>

              <FormItem>
                <FormItemLabel>Boxed</FormItemLabel>
                <FormItemContent>
                  <Slider defaultValue={[50]} shape='square' />
                </FormItemContent>
              </FormItem>

              <FormItem>
                <FormItemLabel>Boxed Range</FormItemLabel>
                <FormItemContent>
                  <Slider
                    defaultValue={[30, 70]}
                    shape='square'
                    variant='success'
                  />
                </FormItemContent>
              </FormItem>

              <FormItem>
                <FormItemLabel>Boxed with Steps</FormItemLabel>
                <FormItemContent>
                  <Slider
                    defaultValue={[25]}
                    shape='square'
                    step={25}
                    variant='destructive'
                  />
                </FormItemContent>
              </FormItem>
            </div>

            <Subtitle>Vertical with Shapes</Subtitle>
            <div className='flex h-48 flex-row gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <Label>Circle</Label>
                <Slider
                  defaultValue={[30]}
                  orientation='vertical'
                  shape='circle'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Boxed</Label>
                <Slider
                  defaultValue={[50]}
                  orientation='vertical'
                  shape='square'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Boxed Range</Label>
                <Slider
                  defaultValue={[20, 80]}
                  orientation='vertical'
                  shape='square'
                  variant='success'
                />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Label>Boxed Steps</Label>
                <Slider
                  defaultValue={[25]}
                  orientation='vertical'
                  shape='square'
                  step={25}
                  variant='destructive'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Title>&lt;FormItem /&gt;</Title>

            <Subtitle>Sizes</Subtitle>
            <div className='flex flex-col gap-8'>
              <FormSection>
                <FormGroup>
                  <FormRow>
                    <FormItem size='xs'>
                      <FormItemLabel
                        required
                        optional
                        tooltip='Extra Small Field'
                      >
                        Extra Small Field
                      </FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Extra small input' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem size='sm'>
                      <FormItemLabel required optional tooltip='Small Field'>
                        Small Field
                      </FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Small input' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem size='md'>
                      <FormItemLabel required optional tooltip='Default Field'>
                        Default Field
                      </FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Default input' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a default field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem size='lg'>
                      <FormItemLabel required optional tooltip='Large Field'>
                        Large Field
                      </FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Large input' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a large field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                </FormGroup>
              </FormSection>
            </div>

            <Subtitle>Layouts</Subtitle>
            <div className='flex flex-col gap-8'>
              <FormSection>
                <FormGroup>
                  <FormRow>
                    <FormItem layout='vertical'>
                      <FormItemLabel>Vertical Layout</FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Default vertical layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem size='xs' layout='horizontal'>
                      <FormItemLabel>Horizontal Layout</FormItemLabel>
                      <FormItemContent>
                        <Input size='xs' placeholder='Horizontal layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                  <FormRow>
                    <FormItem size='sm' layout='horizontal'>
                      <FormItemLabel>Horizontal Layout</FormItemLabel>
                      <FormItemContent>
                        <Input size='sm' placeholder='Horizontal layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                  <FormRow>
                    <FormItem size='md' layout='horizontal'>
                      <FormItemLabel>Horizontal Layout</FormItemLabel>
                      <FormItemContent>
                        <Input size='md' placeholder='Horizontal layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                  <FormRow>
                    <FormItem size='lg' layout='horizontal'>
                      <FormItemLabel>Horizontal Layout</FormItemLabel>
                      <FormItemContent>
                        <Input size='lg' placeholder='Horizontal layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem layout='inline'>
                      <FormItemLabel>Inline Layout</FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Inline layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                    <FormItem layout='inline'>
                      <FormItemLabel>Inline Layout</FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Inline layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                    <FormItem layout='inline'>
                      <FormItemLabel>Inline Layout</FormItemLabel>
                      <FormItemContent>
                        <Input placeholder='Inline layout' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            This is a very small field
                          </FormItemDescription>
                          <FormItemHelperText>
                            This is Helper Text
                          </FormItemHelperText>
                        </FormItemHelpers>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                </FormGroup>
              </FormSection>
            </div>

            <Subtitle>With Helpers</Subtitle>
            <div className='flex flex-col gap-8'>
              <FormSection title='Password' description='Enter your password'>
                <FormGroup title='Password' description='Enter your password'>
                  <FormRow>
                    <FormItem>
                      <FormItemLabel tooltip='Must be at least 8 characters'>
                        Password
                      </FormItemLabel>
                      <FormItemContent>
                        <Input type='password' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            Use 8+ characters
                          </FormItemDescription>
                          <FormItemHelperText position='right'>
                            Strong
                          </FormItemHelperText>
                        </FormItemHelpers>
                      </FormItemContent>
                    </FormItem>
                    <FormItem>
                      <FormItemLabel tooltip='Must be at least 8 characters'>
                        Password
                      </FormItemLabel>
                      <FormItemContent>
                        <Input type='password' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            Use 8+ characters
                          </FormItemDescription>
                          <FormItemHelperText position='right'>
                            Strong
                          </FormItemHelperText>
                        </FormItemHelpers>
                      </FormItemContent>
                    </FormItem>
                    <FormItem>
                      <FormItemLabel tooltip='Must be at least 8 characters'>
                        Password
                      </FormItemLabel>
                      <FormItemContent>
                        <Input type='password' />
                        <FormItemHelpers>
                          <FormItemDescription>
                            Use 8+ characters
                          </FormItemDescription>
                          <FormItemHelperText position='right'>
                            Strong
                          </FormItemHelperText>
                        </FormItemHelpers>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>

                  <FormRow>
                    <FormItem>
                      <FormItemLabel required>Required Field</FormItemLabel>
                      <FormItemContent>
                        <Input />
                        <FormItemDescription>
                          This field cannot be empty
                        </FormItemDescription>
                        <FormItemError>This field is required</FormItemError>
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                </FormGroup>
              </FormSection>
            </div>

            <Subtitle>Groups and Sections</Subtitle>
            <Form>
              <FormSection
                title='Personal Information'
                description='Enter your personal details'
              >
                <FormGroup title='Name' description='Your full name'>
                  <FormRow>
                    <FormItem>
                      <FormItemLabel>First Name</FormItemLabel>
                      <FormItemContent>
                        <Input />
                      </FormItemContent>
                    </FormItem>
                    <FormItem>
                      <FormItemLabel>Last Name</FormItemLabel>
                      <FormItemContent>
                        <Input />
                      </FormItemContent>
                    </FormItem>
                  </FormRow>
                </FormGroup>

                <FormGroup title='Contact' description='How can we reach you?'>
                  <FormItem>
                    <FormItemLabel>Email</FormItemLabel>
                    <FormItemContent>
                      <Input type='email' />
                      <FormItemDescription>
                        We'll never share your email
                      </FormItemDescription>
                    </FormItemContent>
                  </FormItem>
                </FormGroup>

                <FormActions>
                  <Button variant='outline'>Cancel</Button>
                  <Button>Save Changes</Button>
                </FormActions>
              </FormSection>
            </Form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
