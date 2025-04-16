
import React from 'react';
import { Home, MessageCircle, Bookmark, Bell, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Mock data
const unreadNotifications = 3;
const unreadMessages = 2;

const navItems = [
  { icon: Home, label: 'Home', active: true, badge: 0 },
  { icon: MessageCircle, label: 'My Threads', active: false, badge: 0 },
  { icon: Bookmark, label: 'Bookmarked', active: false, badge: 0 },
  { icon: Bell, label: 'Notifications', active: false, badge: unreadNotifications },
  { icon: User, label: 'Profile', active: false, badge: 0 },
];

const MobileNavigation = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t-2 border-border py-2 px-6 z-40">
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
              
              {item.badge > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
                >
                  {item.badge}
                </Badge>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
