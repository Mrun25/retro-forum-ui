
import React, { useState } from 'react';
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
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <aside className="hidden md:flex flex-col w-60 border-r-2 border-border sticky-sidebar">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href="#" 
                className={`nav-item ${activeItem === item.label ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.label);
                }}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
