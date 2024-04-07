import './componentOverrides';
import './app.css';
import { Avatar, Button, Layout, Menu } from '@utima/ui';
import {
  Contact,
  Home,
  LayoutDashboard,
  PlusCircle,
  User,
  Lock,
  LogOut,
  Cog,
  MenuIcon,
} from 'lucide-react';

function App() {
  return (
    <Layout.Root>
      <Layout.Header>
        <Layout.SidebarTrigger>
          <MenuIcon />
        </Layout.SidebarTrigger>
      </Layout.Header>
      <Layout.Sidebar>
        <Menu.Root>
          <Menu.Content>
            <Menu.Item>
              <Menu.Link>
                <Home className='size-5' /> Home
              </Menu.Link>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Label>Group 1</Menu.Label>
            <Menu.Item>
              <Menu.Link>
                <LayoutDashboard className='size-5' /> Dashboard
              </Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Sub>
                <Menu.SubTrigger>
                  <Menu.Link>
                    <Contact className='size-5' /> Contacts
                  </Menu.Link>
                </Menu.SubTrigger>
                <Menu.SubContent>
                  <Menu.SubItem>
                    <Menu.Link>
                      <User className='size-5' /> Profile
                    </Menu.Link>
                  </Menu.SubItem>
                  <Menu.SubItem>
                    <Menu.Link>
                      <Lock className='size-5' /> Account
                    </Menu.Link>
                  </Menu.SubItem>
                  <Menu.Separator />
                  <Menu.SubItem>
                    <Menu.Sub>
                      <Menu.SubTrigger>
                        <Menu.Link><span className='w-5'></span> Dashboard</Menu.Link>
                      </Menu.SubTrigger>
                      <Menu.SubContent>
                        <Menu.Label>Group 1</Menu.Label>
                        <Menu.SubItem>
                          <Menu.Link>Profile</Menu.Link>
                        </Menu.SubItem>
                        <Menu.SubItem>
                          <Menu.Link>Account</Menu.Link>
                        </Menu.SubItem>
                        <Menu.SubItem>
                          <Menu.Link>Security</Menu.Link>
                        </Menu.SubItem>
                      </Menu.SubContent>
                    </Menu.Sub>
                  </Menu.SubItem>
                </Menu.SubContent>
              </Menu.Sub>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link>
                <LogOut className='size-5' /> Logout
              </Menu.Link>
            </Menu.Item>
            <Menu.Item>
              <Menu.Link>
                <Cog className='size-5' /> Settings
              </Menu.Link>
            </Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </Layout.Sidebar>
      <Layout.Content>
        <div className='flex flex-col gap-5 p-5'>
          <h4 className='text-xl font-semibold text-foreground'>Buttons</h4>
          <div className='flex flex-wrap gap-5'>
            <div className='divide-x flex align-center [&>*]:rounded-none [&>:first-child]:rounded-l [&>:first-child]:-mr-[1px] [&>:last-child]:rounded-r'>
              <Button variant='warning' icon={<PlusCircle size={18} />}>
                Primary
              </Button>
              <Button variant='primary' icon={<PlusCircle size={18} />}>
                Secondary
              </Button>
              <Button variant='primary'>Accent</Button>
              <Button loading variant='primary'>
                Danger
              </Button>
            </div>
            <Button variant='success'>Success</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='warning'>Warning</Button>
            <Button variant='secondary' asChild>
              <a href='/'>asChild</a>
            </Button>
          </div>
          <div className='flex flex-wrap gap-5'>
            <Button outline>
              <PlusCircle size={14} />
              Primary
            </Button>
            <Button outline variant='secondary'>
              Secondary
            </Button>
            <Button outline variant='danger'>
              Danger
            </Button>
            <Button outline variant='success'>
              Success
            </Button>
            <Button outline variant='ghost'>
              Ghost
            </Button>
            <Button outline variant='link'>
              Link
            </Button>
            <Button outline variant='warning'>
              Warning
            </Button>
            <Button variant='secondary' asChild>
              <a href='/'>asChild</a>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-5 p-5'>
          <h4 className='text-xl font-semibold text-foreground'>Avatar</h4>
          <div className='flex flex-wrap gap-5'>
            <Avatar />
            <Avatar src='https://i.pravatar.cc/300' />
          </div>
        </div>
      </Layout.Content>
    </Layout.Root>
  );
}

export default App;
