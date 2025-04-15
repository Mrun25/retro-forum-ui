
import React, { useState } from 'react';
import { Home, MessageCircle, Bookmark, Bell, MessageSquare, Settings, User } from 'lucide-react';
import { toast } from 'sonner';

const initialMyThreads = [
  {
    id: 1,
    title: "My CSS Framework Question",
    timeAgo: "2d ago",
  },
  {
    id: 2,
    title: "My Thoughts on AI Tools",
    timeAgo: "5d ago",
  }
];

const LeftSidebar = ({ setActiveSection }) => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [myThreads, setMyThreads] = useState(initialMyThreads);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(2);

  // Navigation items with additional data for unread counts
  const navItems = [
    { icon: Home, label: 'Home', unreadCount: 0 },
    { icon: MessageCircle, label: 'My Threads', unreadCount: 0 },
    { icon: Bookmark, label: 'Bookmarked', unreadCount: 0 },
    { icon: Bell, label: 'Notifications', unreadCount: unreadNotifications },
    { icon: MessageSquare, label: 'Messages', unreadCount: unreadMessages },
    { icon: Settings, label: 'Settings', unreadCount: 0 },
  ];

  const handleNavClick = (label) => {
    setActiveMenu(label);
    setActiveSection(label);
    
    // Mark notifications as read when opening that section
    if (label === 'Notifications' && unreadNotifications > 0) {
      setUnreadNotifications(0);
      toast.success('Notifications marked as read');
    }
    
    // Mark messages as read when opening that section
    if (label === 'Messages' && unreadMessages > 0) {
      setUnreadMessages(0);
      toast.success('Messages marked as read');
    }
  };

  return (
    <aside className="fixed left-0 top-16 w-64 outline-card bg-background h-[calc(100vh-4rem)] overflow-y-auto z-30">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                className={`nav-item relative w-full text-left ${activeMenu === item.label ? 'active outline-card' : ''}`}
                onClick={() => handleNavClick(item.label)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                
                {item.unreadCount > 0 && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-5 w-5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                    {item.unreadCount}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
