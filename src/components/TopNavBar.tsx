import React, { useState } from 'react';
import { MessageSquare, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { toast } from 'sonner';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMarkAllRead: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, onClose, onMarkAllRead }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-0 mt-2 w-80 bg-background border-2 border-border rounded-xl shadow-outline z-50">
      <div className="p-3 border-b-2 border-border">
        <h3 className="font-medium">Notifications</h3>
      </div>
      <div className="p-3 max-h-96 overflow-y-auto">
        <div className="space-y-3">
          <div className="outline-card p-3 hover-bounce-sm">
            <p className="text-sm">
              <span className="font-medium">minimalDesigner</span> replied to your thread
            </p>
            <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
          </div>
          <div className="outline-card p-3 hover-bounce-sm">
            <p className="text-sm">
              <span className="font-medium">cssWizard</span> mentioned you in a comment
            </p>
            <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
          </div>
          <div className="outline-card p-3 hover-bounce-sm">
            <p className="text-sm">
              Your thread "<span className="font-medium">CSS Grid vs Flexbox</span>" received 10 upvotes
            </p>
            <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
          </div>
        </div>
      </div>
      <div className="p-3 border-t-2 border-border">
        <button 
          className="w-full text-center text-sm text-primary hover:underline"
          onClick={() => {
            onMarkAllRead();
            toast.success('All notifications marked as read');
          }}
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
};

interface MessageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMarkAllRead: () => void;
}

const MessageDropdown: React.FC<MessageDropdownProps> = ({ isOpen, onClose, onMarkAllRead }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute right-0 mt-2 w-80 bg-background border-2 border-border rounded-xl shadow-outline z-50">
      <div className="p-3 border-b-2 border-border">
        <h3 className="font-medium">Messages</h3>
      </div>
      <div className="p-3 max-h-96 overflow-y-auto">
        <div className="space-y-3">
          <div className="outline-card p-3 hover-bounce-sm">
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
          <div className="outline-card p-3 hover-bounce-sm">
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
      </div>
      <div className="p-3 border-t-2 border-border">
        <button 
          className="w-full text-center text-sm text-primary hover:underline"
          onClick={() => {
            onMarkAllRead();
            toast.success('All messages marked as read');
          }}
        >
          View all messages
        </button>
      </div>
    </div>
  );
};

const TopNavBar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(2);

  return (
    <header className="sticky top-0 z-50 bg-background pt-2 pb-2 px-4 border-b-2 border-border">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-6">
            Retro<span className="text-primary">.</span>
          </h1>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              className="outline-card p-2 rounded-full hover-bounce relative" 
              aria-label="Messages"
              onClick={() => {
                setIsMessagesOpen(!isMessagesOpen);
                setIsNotificationsOpen(false);
              }}
            >
              <MessageSquare className="h-5 w-5 text-secondary" />
              {unreadMessages > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                  {unreadMessages}
                </span>
              )}
            </button>
            <MessageDropdown 
              isOpen={isMessagesOpen} 
              onClose={() => setIsMessagesOpen(false)} 
              onMarkAllRead={() => setUnreadMessages(0)} 
            />
          </div>
          
          <div className="relative">
            <button 
              className="outline-card p-2 rounded-full hover-bounce relative" 
              aria-label="Notifications"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsMessagesOpen(false);
              }}
            >
              <Bell className="h-5 w-5 text-primary" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                  {unreadNotifications}
                </span>
              )}
            </button>
            <NotificationDropdown 
              isOpen={isNotificationsOpen} 
              onClose={() => setIsNotificationsOpen(false)} 
              onMarkAllRead={() => setUnreadNotifications(0)} 
            />
          </div>
          
          <ThemeToggle />
          
          <button 
            className="outline-card p-1 rounded-full hover-bounce" 
            aria-label="User profile"
            onClick={() => setIsProfileOpen(true)}
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
              alt="User avatar"
              className="h-7 w-7 rounded-full"
            />
          </button>
        </div>
      </div>
      <div className="md:hidden mt-2 px-4">
        <SearchBar />
      </div>
      
      <UserProfile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
    </header>
  );
};

export default TopNavBar;
