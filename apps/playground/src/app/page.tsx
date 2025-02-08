'use client';

import { Subtitle } from '@/components/subtitle';
import { Title } from '@/components/title';
import {
  Button,
  IconButton,
  Badge,
  Label,
  Kbd,
  Checkbox,
  Switch,
  Separator,
  Dropdown,
  Pagination,
  Progress,
  Popover,
  Input,
  Tooltip,
  Resizable,
} from '@utima/ui';
import {
  Check,
  ChevronLeft,
  Cloud,
  CreditCard,
  Download,
  GitBranchPlus,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Mailbox,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';
import { Breadcrumb } from '@utima/ui';

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
    </div>
  );
}
