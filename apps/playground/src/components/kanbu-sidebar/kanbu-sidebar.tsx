import { Sidebar } from '@utima/ui';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Settings2,
  SquareTerminal,
  ChevronDown,
  Users,
  MessageCircle,
  PlayCircle,
  HelpCircle,
  Settings,
  FileText,
  ShoppingBag,
  MessagesSquare,
  Building2,
} from 'lucide-react';

import { AgentSwitcher } from './agent-switcher';
import { NavMain } from '../../components/sidebar/nav-main';
import { NavUser } from '../../components/sidebar/nav-user';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  agents: [
    {
      name: 'AI Honza',
      logo: ShoppingBag,
      plan: 'E-commerce',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  agentNav: [
    {
      title: 'Zdroje dat',
      url: '/data-sources',
      icon: FileText,
    },
    {
      title: 'Konfigurace',
      url: '/configuration',
      icon: Settings,
    },
    {
      title: 'Často kladené otázky',
      url: '/faq',
      icon: HelpCircle,
    },
    {
      title: 'Operátoři',
      url: '/operators',
      icon: Users,
    },
    {
      title: 'Playground',
      url: '/playground',
      icon: PlayCircle,
      highlight: true,
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  globalNav: [
    {
      title: 'Konverzace',
      url: '/conversations',
      icon: MessageCircle,
      isActive: true,
    },
    {
      title: 'Uživatelé',
      url: '/users',
      icon: Users,
    },
  ],
  // Admin navigation items
  adminNav: [
    {
      title: 'Organizace',
      url: '/organizations',
      icon: Building2,
    },
    {
      title: 'Chaty',
      url: '/chats',
      icon: MessagesSquare,
    },
  ],
};

export function KanbuSidebar() {
  return (
    <Sidebar.Root>
      <Sidebar.Header>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex items-center gap-2'>
            <img
              src='https://app.kanbu.ai/assets/logo-black-BQvXwfSn.svg'
              alt='Kanbu logo'
              className='h-7 w-auto rounded'
            />
          </div>
          <button className='text-muted-foreground hover:text-foreground flex items-center text-sm'>
            CS
            <ChevronDown className='ml-1 size-4' />
          </button>
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <NavMain items={data.globalNav} />
        <div className='border-border mx-2 rounded-md border bg-white'>
          <div className='mt-2 px-2'>
            <AgentSwitcher />
          </div>
          <NavMain items={data.agentNav} />
        </div>
        <NavMain items={data.adminNav} label='Superadmin' />
      </Sidebar.Content>
      <Sidebar.Footer>
        <NavUser user={data.user} />
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>
  );
}
