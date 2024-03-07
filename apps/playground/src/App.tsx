import './componentOverrides';
import './app.css';
import { Avatar, Button, Layout, Menu } from '@utima/ui';
import { PlusCircle } from 'lucide-react';
import DashBoard from "../icons/dashboard.svg"
import { Link } from "react-router-dom";


function App() {
  return (
    <Layout.Root>
      <Layout.Header>
        <div className='bg-black h-full'>ahoj</div>
      </Layout.Header>
      <Layout.Wrapper>
        <Layout.SideBar>
          {' '}
          <Menu.Root>
            <Menu.Item icon={DashBoard} label="Home" />
            <Menu.Item label="About" />
            <Menu.Item icon={DashBoard} label="Services">
              <Menu.Item label="Web Dev" />
              <Menu.Item
                label="Design"
              />
              <Menu.Item  icon={DashBoard} label="SEO" />
            </Menu.Item>
            <Menu.Item label="Content" />
          </Menu.Root>
        </Layout.SideBar>
        <Layout.Content>
          <div className='bg-red-100 flex flex-col'>
            ahoj
            <div className='h-screen'>ahoj</div>
            <div className='h-screen'>ahoj</div>
            <div className='h-screen'>ahoj</div>
            <div className='h-screen'>ahoj</div>
          </div>
        </Layout.Content>
      </Layout.Wrapper>
    </Layout.Root>
    // <div>
    //   <div className='flex flex-col gap-5 p-5'>
    //     <h4 className='text-xl font-semibold text-foreground'>Buttons</h4>
    //     <div className='flex flex-wrap gap-5'>
    //       <div className='divide-x flex align-center [&>*]:rounded-none [&>:first-child]:rounded-l [&>:first-child]:-mr-[1px] [&>:last-child]:rounded-r'>
    //         <Button variant='warning' icon={<PlusCircle size={18} />}>
    //           Primary
    //         </Button>
    //         <Button variant='primary' icon={<PlusCircle size={18} />}>
    //           Secondary
    //         </Button>
    //         <Button variant='primary'>Accent</Button>
    //         <Button loading variant='primary'>
    //           Danger
    //         </Button>
    //       </div>
    //       <Button variant='success'>Success</Button>
    //       <Button variant='ghost'>Ghost</Button>
    //       <Button variant='link'>Link</Button>
    //       <Button variant='warning'>Warning</Button>
    //       <Button variant='secondary' asChild>
    //         <a href='/'>asChild</a>
    //       </Button>
    //     </div>
    //     <div className='flex flex-wrap gap-5'>
    //       <Button size='lg' outline>
    //         <PlusCircle size={14} />
    //         Primary
    //       </Button>
    //       <Button outline variant='secondary'>
    //         Secondary
    //       </Button>
    //       <Button outline variant='danger'>
    //         Danger
    //       </Button>
    //       <Button outline variant='success'>
    //         Success
    //       </Button>
    //       <Button outline variant='ghost'>
    //         Ghost
    //       </Button>
    //       <Button outline variant='link'>
    //         Link
    //       </Button>
    //       <Button outline variant='warning'>
    //         Warning
    //       </Button>
    //       <Button variant='secondary' asChild>
    //         <a href='/'>asChild</a>
    //       </Button>
    //     </div>
    //   </div>
    //   <div className='flex flex-col gap-5 p-5'>
    //     <h4 className='text-xl font-semibold text-foreground'>Avatar</h4>
    //     <div className='flex flex-wrap gap-5'>
    //       <Avatar />
    //       <Avatar src='https://i.pravatar.cc/300' />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
