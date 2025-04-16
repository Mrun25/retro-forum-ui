
import React, { useState } from 'react';
import { 
  Home, 
  MessageCircle, 
  Bookmark, 
  Bell, 
  MessageSquare, 
  Settings, 
  Trash2
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useNavigate, useLocation } from 'react-router-dom';

// Mock data for user threads
const userThreads = [
  { id: 1, title: "How to optimize React performance?" },
  { id: 2, title: "Best practices for state management" },
  { id: 3, title: "CSS Grid vs Flexbox" }
];

// Mock notifications data
const notifications = [
  { id: 1, content: "Someone replied to your thread", read: false },
  { id: 2, content: "Your post received 10 upvotes", read: false },
  { id: 3, content: "New features added to the forum", read: true }
];

// Mock bookmarked threads data
const bookmarkedThreads = [
  { id: 1, title: "Guide to Tailwind CSS" },
  { id: 2, title: "React Server Components explained" }
];

// Mock messages data
const messages = [
  { id: 1, from: "user123", preview: "Hey, check out my new post!", read: false },
  { id: 2, from: "designer42", preview: "Thanks for your help yesterday", read: false }
];

const LeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Home');
  const [showContent, setShowContent] = useState<string | null>(null);
  
  const unreadNotifications = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => !m.read).length;

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setShowContent(section === showContent ? null : section);
  };

  const handleDeleteThread = (id: number) => {
    console.log(`Deleting thread with id: ${id}`);
    // Here you would typically call an API to delete the thread
  };

  const markNotificationsAsRead = () => {
    console.log('Marking all notifications as read');
    // Here you would typically update the read status in your database
  };

  const navItems = [
    { icon: Home, label: 'Home', content: null },
    { icon: MessageCircle, label: 'My Threads', content: 'my-threads' },
    { icon: Bookmark, label: 'Bookmarked', content: 'bookmarked' },
    { icon: Bell, label: 'Notifications', content: 'notifications', badge: unreadNotifications },
    { icon: MessageSquare, label: 'Messages', content: 'messages', badge: unreadMessages },
    { icon: Settings, label: 'Settings', content: 'settings' },
  ];

  return (
    <aside className="sticky top-0 h-screen md:flex flex-col w-60 border-r-2 border-border overflow-y-auto">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                className={`flex items-center w-full p-2 rounded-md transition-colors ${
                  activeSection === item.label 
                    ? 'bg-accent text-accent-foreground border border-black dark:border-white' 
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => handleSectionClick(item.label)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
                {item.badge ? (
                  <Badge variant="destructive" className="ml-auto">{item.badge}</Badge>
                ) : null}
              </button>

              {/* Content sections that appear when a sidebar item is clicked */}
              {showContent === item.label && item.content && (
                <div className="mt-2 pl-10 pr-2 py-2 bg-background border border-border rounded-md">
                  {item.content === 'my-threads' && (
                    <div className="space-y-2">
                      <h3 className="font-medium">My Threads</h3>
                      {userThreads.map(thread => (
                        <div key={thread.id} className="flex items-center justify-between text-sm">
                          <span className="truncate">{thread.title}</span>
                          <button 
                            className="text-destructive hover:text-destructive/80"
                            onClick={() => handleDeleteThread(thread.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.content === 'notifications' && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Notifications</h3>
                        <button 
                          className="text-xs text-primary"
                          onClick={markNotificationsAsRead}
                        >
                          Mark all as read
                        </button>
                      </div>
                      {notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`text-sm p-2 rounded-md ${notification.read ? 'bg-muted/50' : 'bg-muted'}`}
                        >
                          {notification.content}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.content === 'bookmarked' && (
                    <div className="space-y-2">
                      <h3 className="font-medium">Bookmarked</h3>
                      {bookmarkedThreads.map(thread => (
                        <div key={thread.id} className="text-sm">
                          {thread.title}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.content === 'messages' && (
                    <div className="space-y-2">
                      <h3 className="font-medium">Messages</h3>
                      {messages.map(message => (
                        <div 
                          key={message.id} 
                          className={`text-sm p-2 rounded-md ${message.read ? 'bg-muted/50' : 'bg-muted'}`}
                        >
                          <strong>{message.from}:</strong> {message.preview}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.content === 'settings' && (
                    <div className="space-y-2">
                      <h3 className="font-medium">Settings</h3>
                      <div className="text-sm">Profile</div>
                      <div className="text-sm">Theme</div>
                      <div className="text-sm">Notifications</div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
