
import React from 'react';
import { Home, FolderOpen, Bookmark, Bell, PlusCircle, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: FolderOpen, label: 'Categories', active: false },
  { icon: Bookmark, label: 'Saved', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: User, label: 'Profile', active: false },
];

const MobileNavigation = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black py-2 px-6 z-50">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href="#" 
              className={`flex flex-col items-center p-2 ${
                item.active ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <button className="absolute -top-6 left-1/2 transform -translate-x-1/2 outline-button p-3 rounded-full hover-bounce">
        <PlusCircle className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default MobileNavigation;
