
import React, { useState } from 'react';
import { Home, MessageCircle, Bookmark, Bell, MessageSquare, Settings, Trash2, User } from 'lucide-react';
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

const LeftSidebar = () => {
  const [activeSection, setActiveSection] = useState('Home');
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

  const handleNavClick = (label: string) => {
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

  const handleDeleteThread = (id: number) => {
    setMyThreads(myThreads.filter(thread => thread.id !== id));
    toast.success('Thread deleted successfully');
  };

  // Render content based on active section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'My Threads':
        return (
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold mb-4">My Threads</h3>
            {myThreads.length > 0 ? (
              myThreads.map(thread => (
                <div key={thread.id} className="outline-card p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{thread.title}</p>
                    <p className="text-xs text-muted-foreground">{thread.timeAgo}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteThread(thread.id)}
                    className="outline-pill bg-destructive text-destructive-foreground p-1"
                    aria-label="Delete thread"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">You haven't created any threads yet.</p>
            )}
          </div>
        );
        
      case 'Notifications':
        return (
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="outline-card p-3">
              <p className="text-sm">
                <span className="font-medium">minimalDesigner</span> replied to your thread
              </p>
              <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
            </div>
            <div className="outline-card p-3">
              <p className="text-sm">
                <span className="font-medium">cssWizard</span> mentioned you in a comment
              </p>
              <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
            </div>
            <div className="outline-card p-3">
              <p className="text-sm">
                Your thread "<span className="font-medium">CSS Grid vs Flexbox</span>" received 10 upvotes
              </p>
              <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
            </div>
          </div>
        );
        
      case 'Bookmarked':
        return (
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold mb-4">Bookmarked Threads</h3>
            <div className="outline-card p-3">
              <p className="font-medium">What's your favorite CSS framework in 2025?</p>
              <p className="text-xs text-muted-foreground">by cssWizard • 2h ago</p>
            </div>
            <div className="outline-card p-3">
              <p className="font-medium">AI tools for content creation - worth it?</p>
              <p className="text-xs text-muted-foreground">by contentCreator • 3h ago</p>
            </div>
          </div>
        );
        
      case 'Messages':
        return (
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold mb-4">Messages</h3>
            <div className="outline-card p-3">
              <div className="flex items-center gap-2">
                <img 
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Max" 
                  alt="User avatar" 
                  className="h-8 w-8 rounded-full border-2 border-border" 
                />
                <div>
                  <p className="text-sm font-medium">motionDesigner</p>
                  <p className="text-xs text-muted-foreground">Thanks for the help!</p>
                </div>
                <span className="ml-auto text-xs text-primary">5m</span>
              </div>
            </div>
            <div className="outline-card p-3">
              <div className="flex items-center gap-2">
                <img 
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Coco" 
                  alt="User avatar" 
                  className="h-8 w-8 rounded-full border-2 border-border" 
                />
                <div>
                  <p className="text-sm font-medium">minimalDesigner</p>
                  <p className="text-xs text-muted-foreground">I just shared my latest project</p>
                </div>
                <span className="ml-auto text-xs text-primary">1h</span>
              </div>
            </div>
          </div>
        );
        
      case 'Settings':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            
            <div className="space-y-3">
              <h4 className="font-medium">Profile</h4>
              <div className="outline-card p-3 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
                    alt="User avatar"
                    className="h-12 w-12 rounded-full border-2 border-border"
                  />
                  <button className="outline-pill bg-accent px-3">Change Avatar</button>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Display Name</label>
                  <input type="text" defaultValue="Felix" className="outline-card w-full p-2" />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Bio</label>
                  <textarea defaultValue="Web developer and design enthusiast." className="outline-card w-full p-2 h-20" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Preferences</h4>
              <div className="outline-card p-3 space-y-3">
                <div className="flex justify-between items-center">
                  <span>Notification Emails</span>
                  <input type="checkbox" defaultChecked className="accent-primary h-5 w-5" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Thread Activity Notifications</span>
                  <input type="checkbox" defaultChecked className="accent-primary h-5 w-5" />
                </div>
              </div>
            </div>
            
            <button 
              className="outline-pill bg-primary text-primary-foreground w-full"
              onClick={() => toast.success('Settings saved!')}
            >
              Save Changes
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <aside className="hidden md:flex flex-col w-64 border-r-2 border-border h-[calc(100vh-4rem)] sticky top-16">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                className={`nav-item relative w-full text-left ${activeSection === item.label ? 'active' : ''}`}
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
      
      {activeSection !== 'Home' && (
        <div className="border-t-2 border-border overflow-y-auto max-h-[calc(100vh-16rem)]">
          {renderSectionContent()}
        </div>
      )}
    </aside>
  );
};

export default LeftSidebar;
