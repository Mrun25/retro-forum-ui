
import React from 'react';
import { Home, FolderOpen, MessageCircle, Bookmark, Bell, MessageSquare, Settings, PlusCircle } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: FolderOpen, label: 'Categories', active: false },
  { icon: MessageCircle, label: 'My Threads', active: false },
  { icon: Bookmark, label: 'Bookmarked', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: MessageSquare, label: 'Messages', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

const LeftSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-60 p-4 border-r border-retro-yellow/30 dark:border-disco-blue/30">
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <button className="retro-box retro-box-coral mt-6 w-full py-3 px-4 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-white bg-retro-coral dark:bg-disco-magenta dark:border-disco-magenta glow-magenta">
        <PlusCircle className="h-5 w-5" />
        <span className="font-medium">New Thread</span>
      </button>
    </aside>
  );
};

export default LeftSidebar;
