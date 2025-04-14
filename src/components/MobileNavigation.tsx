
import React from 'react';
import { Home, Bookmark, Bell, MessageSquare, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', active: true, unreadCount: 0 },
  { icon: Bookmark, label: 'Bookmarked', active: false, unreadCount: 0 },
  { icon: Bell, label: 'Notifications', active: false, unreadCount: 3 },
  { icon: MessageSquare, label: 'Messages', active: false, unreadCount: 2 },
  { icon: User, label: 'Profile', active: false, unreadCount: 0 },
];

const MobileNavigation = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t-2 border-[var(--outline-color)] py-2 px-6 z-40">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href="#" 
              className={`flex flex-col items-center p-2 relative ${
                item.active ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
              
              {item.unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                  {item.unreadCount}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
