'use client';

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
  X,
  Calendar,
  Smile,
  Calculator,
  FileText,
  FolderPlus,
  File,
  Folder,
  Search,
} from 'lucide-react';
import {
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Collapsible,
  Dialog,
  Drawer,
  Dropdown,
  IconButton,
  Input,
  Kbd,
  Label,
  Pagination,
  Popover,
  Progress,
  Resizable,
  ScrollArea,
  Select,
  Separator,
  Skeleton,
  Switch,
  Table,
  Tabs,
  TextArea,
  toast,
  Tooltip,
  Command,
  Sheet,
  FormField,
  Slider,
} from '@utima/ui';
import { Subtitle } from '@/components/subtitle';
import { Title } from '@/components/title';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card.',
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
    paymentMethod: 'Credit Card.',
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
    paymentMethod: 'Credit Card.',
  },
];

export default function Home() {
  return (
    <div className='grid mt-12 items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex flex-col gap-4'>
        <Title>&lt;Button /&gt;</Title>
        <Subtitle>Variants</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <IconButton size='xs' variant='primary' loading>
              <Download />
            </IconButton>
          </div>
          <div>
            <IconButton size='sm' variant='destructive' circle disabled loading>
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
        <Title>&lt;Badge /&gt;</Title>
        <Subtitle>Variants</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap'>
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
        <div className='flex flex-row gap-4 flex-wrap items-center'>
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
        <div className='flex flex-row gap-4 flex-wrap'>
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
              <span className='size-1.5 rounded-full bg-success'></span>Custom
              Status
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
        <div className='flex flex-row gap-4 flex-wrap'>
          <div>
            <Kbd variant='outline'>Outline ⌘</Kbd>
          </div>
          <div>
            <Kbd variant='ghost'>Ghost ⌘</Kbd>
          </div>
        </div>

        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-row gap-4 flex-wrap items-center'>
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
                className='text-primary-foreground/50 bg-transparent border-border/50'
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
              className='opacity-50 pointer-events-none'
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
        <div className='flex flex-row gap-4 items-center'>
          <div className='flex items-center gap-2'>
            <Checkbox id='checkbox-primary' variant='primary' defaultChecked />
            <Label htmlFor='checkbox-primary'>Primary</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='checkbox-success' variant='success' defaultChecked />
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
            <Checkbox id='checkbox-outline' variant='outline' defaultChecked />
            <Label htmlFor='checkbox-outline'>Outline</Label>
          </div>
        </div>

        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-row gap-4 items-center'>
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
            <Checkbox id='checkbox-disabled-checked' disabled defaultChecked />
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
        <div className='flex flex-row gap-4 items-center'>
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
            <Switch id='switch-secondary' variant='secondary' defaultChecked />
            <Label htmlFor='switch-secondary'>Secondary</Label>
          </div>
        </div>

        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-row gap-4 items-center'>
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
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href='/'>Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Separator />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Ellipsis />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Separator />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Link href='/'>Documents</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Separator />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Breadcrumb.Page>Current Page</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Title>&lt;Dropdown /&gt;</Title>
        <div className='flex flex-col gap-4'>
          <div>
            <Dropdown.Root>
              <Dropdown.Trigger asChild>
                <Button>Open</Button>
              </Dropdown.Trigger>
              <Dropdown.Portal>
                <Dropdown.Content className='w-56'>
                  <Dropdown.Label>My Account</Dropdown.Label>
                  <Dropdown.Separator />
                  <Dropdown.Group>
                    <Dropdown.Item>
                      <User />
                      <span>Profile</span>
                      <Kbd variant='ghost' size='sm'>
                        ⇧⌘P
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <CreditCard />
                      <span>Billing</span>
                      <Kbd variant='ghost' size='sm'>
                        ⌘B
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Settings />
                      <span>Settings</span>
                      <Kbd variant='ghost' size='sm'>
                        ⌘S
                      </Kbd>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Keyboard />
                      <span>Keyboard shortcuts</span>
                      <Kbd variant='ghost' size='sm'>
                        ⌘K
                      </Kbd>
                    </Dropdown.Item>
                  </Dropdown.Group>
                  <Dropdown.Separator />
                  <Dropdown.Group>
                    <Dropdown.Item>
                      <Users />
                      <span>Team</span>
                    </Dropdown.Item>
                    <Dropdown.Sub>
                      <Dropdown.SubTrigger>
                        <UserPlus />
                        <span>Invite users</span>
                      </Dropdown.SubTrigger>
                      <Dropdown.Portal>
                        <Dropdown.SubContent>
                          <Dropdown.Item>
                            <Mail />
                            <span>Email</span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <MessageSquare />
                            <span>Message</span>
                          </Dropdown.Item>
                          <Dropdown.Separator />
                          <Dropdown.Item>
                            <PlusCircle />
                            <span>More...</span>
                          </Dropdown.Item>
                        </Dropdown.SubContent>
                      </Dropdown.Portal>
                    </Dropdown.Sub>
                    <Dropdown.Item>
                      <Plus />
                      <span>New Team</span>
                      <Kbd variant='ghost' size='sm'>
                        ⌘+T
                      </Kbd>
                    </Dropdown.Item>
                  </Dropdown.Group>
                  <Dropdown.Separator />
                  <Dropdown.Item>
                    <GitBranchPlus />
                    <span>GitHub</span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <LifeBuoy />
                    <span>Support</span>
                  </Dropdown.Item>
                  <Dropdown.Item disabled>
                    <Cloud />
                    <span>API</span>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                  <Dropdown.RadioItem value='1'>Test</Dropdown.RadioItem>
                  <Dropdown.RadioItem value='2'>Test</Dropdown.RadioItem>
                  <Dropdown.Separator />
                  <Dropdown.CheckboxItem>Test</Dropdown.CheckboxItem>
                  <Dropdown.CheckboxItem>Test</Dropdown.CheckboxItem>
                  <Dropdown.Separator />
                  <Dropdown.Item>
                    <LogOut />
                    <span>Log out</span>
                    <Kbd variant='ghost' size='sm'>
                      ⇧⌘Q
                    </Kbd>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Portal>
            </Dropdown.Root>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Title>&lt;Pagination /&gt;</Title>
        <Subtitle>Default</Subtitle>
        <div className='flex flex-col gap-4'>
          <Pagination.Root>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item selected>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>
        </div>

        <Subtitle>With ellipsis</Subtitle>
        <div className='flex flex-col gap-4'>
          <Pagination.Root>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item selected>5</Pagination.Item>
              <Pagination.Item>6</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>
        </div>

        <Subtitle>Sizes</Subtitle>
        <div className='flex flex-col gap-4'>
          <Pagination.Root size='xs'>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item selected>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>

          <Pagination.Root size='sm'>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item selected>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>

          <Pagination.Root size='md'>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item selected>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>

          <Pagination.Root size='lg'>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item selected>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>

          <Pagination.Root size='lg'>
            <Pagination.Content>
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item selected>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>
        </div>

        <Subtitle>States</Subtitle>
        <div className='flex flex-col gap-4'>
          <Pagination.Root>
            <Pagination.Content>
              <Pagination.Prev disabled />
              <Pagination.Item selected>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
            </Pagination.Content>
          </Pagination.Root>

          <Pagination.Root>
            <Pagination.Content>
              <Pagination.Prev asChild>
                <a href='#'>
                  <ChevronLeft />
                  As Child
                </a>
              </Pagination.Prev>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item selected>3</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next disabled>Custom Next</Pagination.Next>
            </Pagination.Content>
          </Pagination.Root>
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
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant='outline'>Open Popover</Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content align='start'>
                <div className='grid gap-4'>
                  <div className='space-y-2'>
                    <h4 className='font-medium leading-none'>Dimensions</h4>
                    <p className='text-sm text-muted-foreground'>
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
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Title>&lt;Tooltip /&gt;</Title>
        <div className='flex flex-row gap-4'>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button variant='outline'>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content>
                  <p>Hello</p>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Title>&lt;Resizable /&gt;</Title>
        <div className='flex flex-row gap-4'>
          <Resizable.Group
            direction='horizontal'
            className='max-w-md rounded-lg border md:min-w-[450px]'
          >
            <Resizable.Panel defaultSize={50}>
              <div className='flex h-[200px] items-center justify-center p-6'>
                <span className='font-semibold'>One</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={50}>
              <Resizable.Group direction='vertical'>
                <Resizable.Panel defaultSize={25}>
                  <div className='flex h-full items-center justify-center p-6'>
                    <span className='font-semibold'>Two</span>
                  </div>
                </Resizable.Panel>
                <Resizable.Handle />
                <Resizable.Panel defaultSize={75}>
                  <div className='flex h-full items-center justify-center p-6'>
                    <span className='font-semibold'>Three</span>
                  </div>
                </Resizable.Panel>
              </Resizable.Group>
            </Resizable.Panel>
          </Resizable.Group>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Title>&lt;Dialog /&gt;</Title>
        <div className='flex flex-row gap-4'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant='outline'>Edit Profile</Button>
            </Dialog.Trigger>
            <Dialog.Content className='sm:max-w-[425px]'>
              <Dialog.Header>
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description>
                  Make changes to your profile here. Click save when you're
                  done.
                </Dialog.Description>
              </Dialog.Header>
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
              <Dialog.Footer>
                <Button type='submit'>Save changes</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;AlertDialog /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <Button variant='outline'>Show Dialog</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content>
                  <AlertDialog.Header>
                    <AlertDialog.Title>
                      Are you absolutely sure?
                    </AlertDialog.Title>
                    <AlertDialog.Description>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialog.Description>
                  </AlertDialog.Header>
                  <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action>Continue</AlertDialog.Action>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Table /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head className='w-[100px]'>Invoice</Table.Head>
                  <Table.Head>Status</Table.Head>
                  <Table.Head>Method</Table.Head>
                  <Table.Head className='text-right'>Amount</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {invoices.map((invoice) => (
                  <Table.Row key={invoice.invoice}>
                    <Table.Cell className='font-medium'>
                      {invoice.invoice}
                    </Table.Cell>
                    <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                    <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                    <Table.Cell className='text-right'>
                      {invoice.totalAmount}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.Cell colSpan={3}>Total</Table.Cell>
                  <Table.Cell className='text-right'>$2,500.00</Table.Cell>
                </Table.Row>
              </Table.Footer>
            </Table.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;ScrollArea /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <ScrollArea className='h-72 w-48 rounded-md border'>
              <div className='p-4'>
                <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
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
            <Avatar.Root size='xs'>
              <Avatar.Image src='https://github.com/shadcn.png' alt='@shadcn' />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size='sm'>
              <Avatar.Image src='https://github.com/shadcn.png' alt='@shadcn' />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size='md'>
              <Avatar.Image src='https://github.com/shadcn.png' alt='@shadcn' />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size='lg'>
              <Avatar.Image src='https://github.com/shadcn.png' alt='@shadcn' />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size='xl'>
              <Avatar.Image src='https://github.com/shadcn.png' alt='@shadcn' />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </div>

          <Subtitle>With Fallback</Subtitle>
          <div className='flex items-center gap-4'>
            <Avatar.Root>
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback>AB</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback>🎉</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback className='bg-primary text-primary-foreground'>
                UI
              </Avatar.Fallback>
            </Avatar.Root>
          </div>

          <Subtitle>Invalid Image</Subtitle>
          <div className='flex items-center gap-4'>
            <Avatar.Root>
              <Avatar.Image src='/broken-image.jpg' alt='@broken' />
              <Avatar.Fallback>BK</Avatar.Fallback>
            </Avatar.Root>
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
            <Skeleton className='h-12 w-12 rounded-full' />
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
            <Select.Root size='xs'>
              <Select.Trigger className='w-[180px]'>
                <Select.Value placeholder='Extra small' />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value='apple'>Apple</Select.Item>
                    <Select.Item value='banana'>Banana</Select.Item>
                    <Select.Item value='blueberry'>Blueberry</Select.Item>
                    <Select.Item value='grapes'>Grapes</Select.Item>
                    <Select.Item value='pineapple'>Pineapple</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <Select.Root size='sm'>
              <Select.Trigger className='w-[180px]'>
                <Select.Value placeholder='Small' />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value='apple'>Apple</Select.Item>
                    <Select.Item value='banana'>Banana</Select.Item>
                    <Select.Item value='blueberry'>Blueberry</Select.Item>
                    <Select.Item value='grapes'>Grapes</Select.Item>
                    <Select.Item value='pineapple'>Pineapple</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <Select.Root size='md'>
              <Select.Trigger className='w-[180px]'>
                <Select.Value placeholder='Medium (default)' />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value='apple'>Apple</Select.Item>
                    <Select.Item value='banana'>Banana</Select.Item>
                    <Select.Item value='blueberry'>Blueberry</Select.Item>
                    <Select.Item value='grapes'>Grapes</Select.Item>
                    <Select.Item value='pineapple'>Pineapple</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

            <Select.Root size='lg'>
              <Select.Trigger className='w-[180px]'>
                <Select.Value placeholder='Large' />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value='apple'>Apple</Select.Item>
                    <Select.Item value='banana'>Banana</Select.Item>
                    <Select.Item value='blueberry'>Blueberry</Select.Item>
                    <Select.Item value='grapes'>Grapes</Select.Item>
                    <Select.Item value='pineapple'>Pineapple</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <Subtitle>Default Example</Subtitle>
          <Select.Root>
            <Select.Trigger className='w-[180px]'>
              <Select.Value placeholder='Select a fruit' />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value='apple'>Apple</Select.Item>
                  <Select.Item value='banana'>Banana</Select.Item>
                  <Select.Item value='blueberry'>Blueberry</Select.Item>
                  <Select.Item value='grapes'>Grapes</Select.Item>
                  <Select.Item value='pineapple'>Pineapple</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Tabs. /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Tabs.Root defaultValue='account' className='w-[400px]'>
              <Tabs.List className='grid w-full grid-cols-2'>
                <Tabs.Trigger value='account'>Account</Tabs.Trigger>
                <Tabs.Trigger value='password'>Password</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value='account'>
                <div className='width-96 h-32 border border-border bg-muted flex items-center justify-center rounded-md text-sm font-medium'>
                  Account
                </div>
              </Tabs.Content>
              <Tabs.Content value='password'>
                <div className='width-96 h-32 border border-border bg-muted flex items-center justify-center rounded-md text-sm font-medium'>
                  Password
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Card /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Card.Root className='w-80'>
              <Card.Header>
                <Card.Title>Create project</Card.Title>
                <Card.Description>
                  Deploy your new project in one-click.
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <form>
                  <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' placeholder='Name of your project' />
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='framework'>Framework</Label>
                      <Select.Root>
                        <Select.Trigger id='framework'>
                          <Select.Value placeholder='Select' />
                        </Select.Trigger>
                        <Select.Content position='popper'>
                          <Select.Item value='next'>Next.js</Select.Item>
                          <Select.Item value='sveltekit'>SvelteKit</Select.Item>
                          <Select.Item value='astro'>Astro</Select.Item>
                          <Select.Item value='nuxt'>Nuxt.js</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
                </form>
              </Card.Content>
              <Card.Footer className='flex justify-between'>
                <Button variant='outline'>Cancel</Button>
                <Button>Deploy</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Alert /&gt;</Title>
          <Subtitle>Default</Subtitle>
          <Alert.Root>
            <Terminal className='size-4' />
            <Alert.Title>Heads up!</Alert.Title>
            <Alert.Description>
              You can add components and dependencies to your app using the cli.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Primary</Subtitle>
          <Alert.Root variant='primary'>
            <Terminal className='size-4' />
            <Alert.Title>Welcome!</Alert.Title>
            <Alert.Description>
              Get started with your new project by exploring the documentation.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Outline</Subtitle>
          <Alert.Root variant='outline'>
            <Terminal className='size-4' />
            <Alert.Title>Welcome!</Alert.Title>
            <Alert.Description>
              Get started with your new project by exploring the documentation.
            </Alert.Description>
          </Alert.Root>

          <Alert.Root variant='primary'>
            <MessageSquare className='size-4' />
            <Alert.Description>
              New message from your team. Click here to read it.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Success</Subtitle>
          <Alert.Root variant='success'>
            <Check className='size-4' />
            <Alert.Title>Successfully saved!</Alert.Title>
            <Alert.Description>
              Your changes have been saved to the cloud.
            </Alert.Description>
          </Alert.Root>

          <Alert.Root variant='success'>
            <Check className='size-4' />
            <Alert.Description>
              Your profile has been updated successfully.
            </Alert.Description>
          </Alert.Root>

          <Alert.Root variant='success'>
            <Check className='size-4' />
            <Alert.Title>Payment processed</Alert.Title>
            <Alert.Description>
              <div className='mb-3'>
                Your payment has been successfully processed and confirmed.
              </div>
              <Button size='sm' variant='outline'>
                View Receipt
              </Button>
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Destructive</Subtitle>
          <Alert.Root variant='destructive'>
            <AlertCircle className='size-4' />
            <Alert.Title>Error</Alert.Title>
            <Alert.Description>
              Your session has expired. Please log in again.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Without Icon</Subtitle>
          <Alert.Root>
            <Alert.Title>Note</Alert.Title>
            <Alert.Description>
              This is a simple alert without an icon.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>Without Title</Subtitle>
          <Alert.Root>
            <Terminal className='size-4' />
            <Alert.Description>
              You can also create alerts without titles for simple messages.
            </Alert.Description>
          </Alert.Root>

          <Subtitle>With Custom Content</Subtitle>
          <Alert.Root>
            <Terminal className='size-4' />
            <Alert.Title>Deployment Started</Alert.Title>
            <Alert.Description>
              <div className='mb-3'>
                Your application is being deployed to production.
              </div>
              <div className='flex gap-3'>
                <Button size='sm' variant='outline'>
                  View Logs
                </Button>
                <Button size='sm'>Open Dashboard</Button>
              </div>
            </Alert.Description>
          </Alert.Root>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Accordion /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Accordion.Root type='single' collapsible className='w-full'>
              <Accordion.Item value='item-1'>
                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                <Accordion.Content>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='item-2'>
                <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                <Accordion.Content>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='item-3'>
                <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                <Accordion.Content>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Collapsible /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Collapsible.Root className='w-[350px] space-y-2'>
              <div className='flex items-center justify-between space-x-4 px-4'>
                <h4 className='text-sm font-semibold'>
                  @peduarte starred 3 repositories
                </h4>
                <Collapsible.Trigger asChild>
                  <Button variant='ghost' size='sm'>
                    <ChevronsUpDown className='h-4 w-4' />
                    <span className='sr-only'>Toggle</span>
                  </Button>
                </Collapsible.Trigger>
              </div>
              <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                @radix-ui/primitives
              </div>
              <Collapsible.Content className='space-y-2'>
                <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                  @radix-ui/colors
                </div>
                <div className='rounded-md border px-4 py-2 font-mono text-sm shadow-sm'>
                  @stitches/react
                </div>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Drawer /&gt;</Title>
          <div className='flex flex-row gap-4'>
            <Drawer.Root>
              <Drawer.Trigger asChild>
                <Button variant='outline'>Open Drawer</Button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay />
                <Drawer.Content>
                  <div className='mx-auto w-full max-w-sm'>
                    <Drawer.Header>
                      <Drawer.Handle />
                      <Drawer.Title>Move Goal</Drawer.Title>
                      <Drawer.Description>
                        Set your daily activity goal.
                      </Drawer.Description>
                    </Drawer.Header>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
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
            <Input addonBefore='http://' placeholder='example.com' />
            <Input addonAfter='.com' placeholder='domain' />
            <Input
              addonBefore={<Mail className='size-4' />}
              placeholder='Enter email'
            />
            <Input
              addonAfter={<Check className='size-4' />}
              placeholder='Verified input'
            />
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
            <TextArea placeholder='Default textarea' />
            <TextArea
              variant='destructive'
              placeholder='Destructive textarea'
            />
            <TextArea variant='success' placeholder='Success textarea' />
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-4'>
            <TextArea size='xs' placeholder='Extra small textarea' />
            <TextArea size='sm' placeholder='Small textarea' />
            <TextArea size='md' placeholder='Default textarea' />
            <TextArea size='lg' placeholder='Large textarea' />
          </div>

          <Subtitle>With addons</Subtitle>
          <div className='flex flex-col gap-4'>
            <TextArea
              addonBefore={<MessageSquare className='size-4' />}
              placeholder='Enter message'
            />
            <TextArea
              addonAfter={<Check className='size-4' />}
              placeholder='Verified message'
            />
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-col gap-4'>
            <TextArea placeholder='Disabled textarea' disabled />
            <TextArea placeholder='Required textarea' required />
            <TextArea placeholder='Read only textarea' readOnly />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Command /&gt;</Title>
          <Subtitle>Default</Subtitle>
          <div className='flex flex-col gap-4'>
            <Command.Root>
              <Command.Input placeholder='Type a command or search...' />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading='Suggestions'>
                  <Command.Item>
                    <Calendar className='mr-2 size-4' />
                    <span>Calendar</span>
                  </Command.Item>
                  <Command.Item>
                    <Smile className='mr-2 size-4' />
                    <span>Search Emoji</span>
                  </Command.Item>
                  <Command.Item>
                    <Calculator className='mr-2 size-4' />
                    <span>Calculator</span>
                  </Command.Item>
                </Command.Group>
                <Command.Separator />
                <Command.Group heading='Settings'>
                  <Command.Item>
                    <User className='mr-2 size-4' />
                    <span>Profile</span>
                    <Kbd className='ml-auto' size='sm'>
                      ⌘P
                    </Kbd>
                  </Command.Item>
                  <Command.Item>
                    <CreditCard className='mr-2 size-4' />
                    <span>Billing</span>
                    <Kbd className='ml-auto' size='sm'>
                      ⌘B
                    </Kbd>
                  </Command.Item>
                  <Command.Item>
                    <Settings className='mr-2 size-4' />
                    <span>Settings</span>
                    <Kbd className='ml-auto' size='sm'>
                      ⌘S
                    </Kbd>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command.Root>
          </div>

          <Subtitle>With Loading State</Subtitle>
          <div className='flex flex-col gap-4'>
            <Command.Root>
              <Command.Input placeholder='Loading example...' loading />
              <Command.List>
                <Command.Empty loading loadingMessage='Fetching results...' />
              </Command.List>
            </Command.Root>
          </div>

          <Subtitle>In Dialog</Subtitle>
          <div className='flex flex-col gap-4'>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant='outline'>
                  <Search className='mr-2 size-4' />
                  Search Commands
                </Button>
              </Dialog.Trigger>
              <Command.Dialog>
                <Command.Input placeholder='Type a command or search...' />
                <Command.List>
                  <Command.Empty>No results found.</Command.Empty>
                  <Command.Group heading='Quick Actions'>
                    <Command.Item>
                      <Plus className='mr-2 size-4' />
                      <span>Create New Project</span>
                    </Command.Item>
                    <Command.Item>
                      <FileText className='mr-2 size-4' />
                      <span>Create New Document</span>
                    </Command.Item>
                    <Command.Item>
                      <FolderPlus className='mr-2 size-4' />
                      <span>Create New Folder</span>
                    </Command.Item>
                  </Command.Group>
                  <Command.Separator />
                  <Command.Group heading='Recent'>
                    <Command.Item>
                      <File className='mr-2 size-4' />
                      <span>design-system.fig</span>
                    </Command.Item>
                    <Command.Item>
                      <File className='mr-2 size-4' />
                      <span>presentation.pdf</span>
                    </Command.Item>
                    <Command.Item>
                      <Folder className='mr-2 size-4' />
                      <span>Project Assets</span>
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command.Dialog>
            </Dialog.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Sheet /&gt;</Title>
          <Subtitle>Default</Subtitle>
          <div className='flex flex-row gap-4'>
            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Open Sheet</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content>
                  <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>
                    <Sheet.Description>
                      Make changes to your profile here. Click save when you're
                      done.
                    </Sheet.Description>
                  </Sheet.Header>
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
                  <Sheet.Footer>
                    <Button type='submit'>Save changes</Button>
                  </Sheet.Footer>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>
          </div>

          <Subtitle>Side Variants</Subtitle>
          <div className='flex flex-row gap-4'>
            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Top Sheet</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content side='top'>
                  <Sheet.Header>
                    <Sheet.Title>Top Sheet</Sheet.Title>
                    <Sheet.Description>
                      This sheet slides in from the top of the screen.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>

            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Right Sheet</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content side='right'>
                  <Sheet.Header>
                    <Sheet.Title>Right Sheet</Sheet.Title>
                    <Sheet.Description>
                      This sheet slides in from the right of the screen.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>

            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Bottom Sheet</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content side='bottom'>
                  <Sheet.Header>
                    <Sheet.Title>Bottom Sheet</Sheet.Title>
                    <Sheet.Description>
                      This sheet slides in from the bottom of the screen.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>

            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Left Sheet</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content side='left'>
                  <Sheet.Header>
                    <Sheet.Title>Left Sheet</Sheet.Title>
                    <Sheet.Description>
                      This sheet slides in from the left of the screen.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>
          </div>

          <Subtitle>Custom Close Icon</Subtitle>
          <div className='flex flex-row gap-4'>
            <Sheet.Root>
              <Sheet.Trigger asChild>
                <Button variant='outline'>Custom Close</Button>
              </Sheet.Trigger>
              <Sheet.Portal>
                <Sheet.Overlay />
                <Sheet.Content
                  closeIcon={<Menu className='size-4' />}
                  closeLabel='Menu'
                >
                  <Sheet.Header>
                    <Sheet.Title>Custom Close Icon</Sheet.Title>
                    <Sheet.Description>
                      This sheet uses a custom close icon and label.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet.Portal>
            </Sheet.Root>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Title>&lt;Slider /&gt;</Title>
          <Subtitle>Variants</Subtitle>
          <div className='flex flex-col gap-4 max-w-md'>
            <Slider defaultValue={[50]} variant='primary' />
            <Slider defaultValue={[75]} variant='success' />
            <Slider defaultValue={[25]} variant='destructive' />
            <Slider defaultValue={[60]} variant='secondary' />
            <Slider defaultValue={[40]} variant='outline' />
          </div>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-8 max-w-md'>
            <FormField.Root size='xs'>
              <FormField.Label>Extra Small</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[25]} size='xs' />
                <FormField.Description>
                  Extra small slider with matching form field size
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='sm'>
              <FormField.Label>Small</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[50]} size='sm' />
                <FormField.Description>
                  Small slider with matching form field size
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='md'>
              <FormField.Label>Medium (Default)</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[75]} size='md' />
                <FormField.Description>
                  Default size slider with matching form field size
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='lg'>
              <FormField.Label>Large</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[85]} size='lg' />
                <FormField.Description>
                  Large slider with matching form field size
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>Layouts</Subtitle>
          <div className='flex flex-col gap-8 max-w-md'>
            <FormField.Root layout='vertical'>
              <FormField.Label>Vertical Layout</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[50]} />
                <FormField.Description>
                  Label appears above the slider
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root layout='horizontal'>
              <FormField.Label>Horizontal Layout</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[60]} />
                <FormField.Description>
                  Label appears beside the slider
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root layout='inline'>
              <FormField.Label>Inline Layout</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[70]} />
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>With Helpers</Subtitle>
          <div className='flex flex-col gap-8 max-w-md'>
            <FormField.Root>
              <FormField.Label tooltip='Drag to adjust volume'>
                Volume
              </FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[75]} />
                <FormField.Helpers>
                  <FormField.Description>
                    Adjust system volume
                  </FormField.Description>
                  <FormField.HelperText position='right'>
                    75%
                  </FormField.HelperText>
                </FormField.Helpers>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root error='Value must be between 20 and 80'>
              <FormField.Label required>Range Selection</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[10, 90]} variant='destructive' />
                <FormField.Description>
                  Select a range between 20 and 80
                </FormField.Description>
                <FormField.Error>
                  Value must be between 20 and 80
                </FormField.Error>
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>States</Subtitle>
          <div className='flex flex-col gap-4 max-w-md'>
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
          <div className='flex flex-col gap-4 max-w-md'>
            <FormField.Root>
              <FormField.Label>Step 10</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[50]} step={10} />
                <FormField.Description>
                  Slider with step value of 10
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root>
              <FormField.Label>Fine Control</FormField.Label>
              <FormField.Content>
                <Slider
                  defaultValue={[0.1, 0.2, 0.7]}
                  onValueChange={(value) => console.log(value)}
                  max={1}
                  step={0.1}
                />
                <FormField.Description>
                  Slider with decimal steps (0.1)
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>Vertical Orientation</Subtitle>
          <div className='flex flex-row gap-8 h-48'>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Primary</Label>
              <Slider defaultValue={[30]} orientation='vertical' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Success</Label>
              <Slider
                defaultValue={[50]}
                orientation='vertical'
                variant='success'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Destructive</Label>
              <Slider
                defaultValue={[70]}
                orientation='vertical'
                variant='destructive'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Secondary</Label>
              <Slider
                defaultValue={[40]}
                orientation='vertical'
                variant='secondary'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Outline</Label>
              <Slider
                defaultValue={[60]}
                orientation='vertical'
                variant='outline'
              />
            </div>
          </div>

          <Subtitle>Vertical Sizes</Subtitle>
          <div className='flex flex-row gap-8 h-48'>
            <div className='flex flex-col gap-2 items-center'>
              <Label size='xs'>XS</Label>
              <Slider defaultValue={[30]} orientation='vertical' size='xs' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label size='sm'>SM</Label>
              <Slider defaultValue={[40]} orientation='vertical' size='sm' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>MD</Label>
              <Slider defaultValue={[50]} orientation='vertical' size='md' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label size='lg'>LG</Label>
              <Slider defaultValue={[60]} orientation='vertical' size='lg' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label size='xl'>XL</Label>
              <Slider defaultValue={[70]} orientation='vertical' size='xl' />
            </div>
          </div>

          <Subtitle>Vertical Range</Subtitle>
          <div className='flex flex-row gap-8 h-48'>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Primary</Label>
              <Slider defaultValue={[20, 80]} orientation='vertical' />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Success</Label>
              <Slider
                defaultValue={[30, 60]}
                orientation='vertical'
                variant='success'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>With Steps</Label>
              <Slider
                defaultValue={[25, 75]}
                orientation='vertical'
                step={25}
              />
            </div>
          </div>

          <Subtitle>Thumb Shapes</Subtitle>
          <div className='flex flex-col gap-4 max-w-md'>
            <FormField.Root>
              <FormField.Label>Circle (Default)</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[50]} shape='circle' />
              </FormField.Content>
            </FormField.Root>

            <FormField.Root>
              <FormField.Label>Boxed</FormField.Label>
              <FormField.Content>
                <Slider defaultValue={[50]} shape='square' />
              </FormField.Content>
            </FormField.Root>

            <FormField.Root>
              <FormField.Label>Boxed Range</FormField.Label>
              <FormField.Content>
                <Slider
                  defaultValue={[30, 70]}
                  shape='square'
                  variant='success'
                />
              </FormField.Content>
            </FormField.Root>

            <FormField.Root>
              <FormField.Label>Boxed with Steps</FormField.Label>
              <FormField.Content>
                <Slider
                  defaultValue={[25]}
                  shape='square'
                  step={25}
                  variant='destructive'
                />
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>Vertical with Shapes</Subtitle>
          <div className='flex flex-row gap-8 h-48'>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Circle</Label>
              <Slider
                defaultValue={[30]}
                orientation='vertical'
                shape='circle'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Boxed</Label>
              <Slider
                defaultValue={[50]}
                orientation='vertical'
                shape='square'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Label>Boxed Range</Label>
              <Slider
                defaultValue={[20, 80]}
                orientation='vertical'
                shape='square'
                variant='success'
              />
            </div>
            <div className='flex flex-col gap-2 items-center'>
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
          <Title>&lt;FormField /&gt;</Title>

          <Subtitle>Sizes</Subtitle>
          <div className='flex flex-col gap-8'>
            <FormField.Root size='xs'>
              <FormField.Label required optional tooltip='Extra Small Field'>
                Extra Small Field
              </FormField.Label>
              <FormField.Content>
                <Input placeholder='Extra small input' />
                <FormField.Helpers>
                <FormField.Description>
                  This is a very small field
                </FormField.Description>
                <FormField.HelperText>This is Helper Text</FormField.HelperText>
                </FormField.Helpers>
                <FormField.Error>This field is required</FormField.Error>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='sm'>
              <FormField.Label required optional tooltip='Small Field'>
                Small Field
              </FormField.Label>
              <FormField.Content>
                <Input placeholder='Small input' />
                <FormField.Helpers>
                  <FormField.Description>
                    This is a small field
                  </FormField.Description>
                  <FormField.HelperText>
                    This is Helper Text
                  </FormField.HelperText>
                </FormField.Helpers>
                <FormField.Error>This field is required</FormField.Error>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='md'>
              <FormField.Label required optional tooltip='Default Field'>
                Default Field
              </FormField.Label>
              <FormField.Content>
                <Input placeholder='Default input' />
                <FormField.Helpers>
                  <FormField.Description>
                    This is a default field
                  </FormField.Description>
                  <FormField.HelperText>
                    This is Helper Text
                  </FormField.HelperText>
                </FormField.Helpers>
                <FormField.Error>This field is required</FormField.Error>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root size='lg'>
              <FormField.Label required optional tooltip='Large Field'>
                Large Field
              </FormField.Label>
              <FormField.Content>
                <Input placeholder='Large input' />
                <FormField.Helpers>
                  <FormField.Description>
                    This is a large field
                  </FormField.Description>
                  <FormField.HelperText>
                    This is Helper Text
                  </FormField.HelperText>
                </FormField.Helpers>
                <FormField.Error>This field is required</FormField.Error>
              </FormField.Content>
            </FormField.Root>
          </div>

          <Subtitle>Layouts</Subtitle>
          <div className='flex flex-col gap-8'>
            <FormField.Root layout='vertical'>
              <FormField.Label>Vertical Layout</FormField.Label>
              <FormField.Content>
                <Input placeholder='Default vertical layout' />
                <FormField.Description>
                  Label appears above the input
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root layout='horizontal'>
              <FormField.Label>Horizontal Layout</FormField.Label>
              <FormField.Content>
                <Input placeholder='Horizontal layout' />
                <FormField.Description>
                  Label appears beside the input
                </FormField.Description>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root layout='inline'>
              <FormField.Label>Inline Layout</FormField.Label>
              <FormField.Content>
                <Input placeholder='Inline layout' />
              </FormField.Content>
            </FormField.Root>
          </div>
          <Subtitle>With Helpers</Subtitle>
          <div className='flex flex-col gap-8'>
            <FormField.Root>
              <FormField.Label tooltip='Must be at least 8 characters'>
                Password
              </FormField.Label>
              <FormField.Content>
                <Input type='password' />
                <FormField.Helpers>
                  <FormField.Description>
                    Use 8+ characters
                  </FormField.Description>
                  <FormField.HelperText position='right'>
                    Strong
                  </FormField.HelperText>
                </FormField.Helpers>
              </FormField.Content>
            </FormField.Root>

            <FormField.Root error='This field is required'>
              <FormField.Label required>Required Field</FormField.Label>
              <FormField.Content>
                <Input />
                <FormField.Description>
                  This field cannot be empty
                </FormField.Description>
                <FormField.Error>This field is required</FormField.Error>
              </FormField.Content>
            </FormField.Root>
          </div>

          <FormField.Root>
            <Subtitle>Groups and Sections</Subtitle>
            <FormField.Section
              title='Personal Information'
              description='Enter your personal details'
            >
              <FormField.Group title='Name' description='Your full name'>
                <FormField.Row>
                  <FormField.Root>
                    <FormField.Label>First Name</FormField.Label>
                    <FormField.Content>
                      <Input />
                    </FormField.Content>
                  </FormField.Root>
                  <FormField.Root>
                    <FormField.Label>Last Name</FormField.Label>
                    <FormField.Content>
                      <Input />
                    </FormField.Content>
                  </FormField.Root>
                </FormField.Row>
              </FormField.Group>

              <FormField.Group
                title='Contact'
                description='How can we reach you?'
              >
                <FormField.Root>
                  <FormField.Label>Email</FormField.Label>
                  <FormField.Content>
                    <Input type='email' />
                    <FormField.Description>
                      We'll never share your email
                    </FormField.Description>
                  </FormField.Content>
                </FormField.Root>
              </FormField.Group>

              <FormField.Actions>
                <Button variant='outline'>Cancel</Button>
                <Button>Save Changes</Button>
              </FormField.Actions>
            </FormField.Section>
          </FormField.Root>
        </div>
      </div>
    </div>
  );
}
