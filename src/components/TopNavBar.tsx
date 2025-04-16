
import React, { useState } from 'react';
import { MessageSquare, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, onClose }) => {
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
        <button className="w-full text-center text-sm text-primary hover:underline">
          Mark all as read
        </button>
      </div>
    </div>
  );
};

interface MessageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageDropdown: React.FC<MessageDropdownProps> = ({ isOpen, onClose }) => {
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
        <button className="w-full text-center text-sm text-primary hover:underline">
          View all messages
        </button>
      </div>
    </div>
  );
};

const TopNavBar = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background py-3 px-4 border-b-2 border-border">
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
              className="outline-card p-2 rounded-full hover-bounce" 
              aria-label="Messages"
              onClick={() => {
                setIsMessagesOpen(!isMessagesOpen);
                setIsNotificationsOpen(false);
              }}
            >
              <MessageSquare className="h-5 w-5 text-secondary" />
            </button>
            <MessageDropdown 
              isOpen={isMessagesOpen} 
              onClose={() => setIsMessagesOpen(false)} 
            />
          </div>
          
          <div className="relative">
            <button 
              className="outline-card p-2 rounded-full hover-bounce" 
              aria-label="Notifications"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsMessagesOpen(false);
              }}
            >
              <Bell className="h-5 w-5 text-primary" />
            </button>
            <NotificationDropdown 
              isOpen={isNotificationsOpen} 
              onClose={() => setIsNotificationsOpen(false)} 
            />
          </div>
          
          <ThemeToggle />
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="outline-card p-1 rounded-full hover-bounce" aria-label="User profile">
                <img
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
                  alt="User avatar"
                  className="h-7 w-7 rounded-full"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4 border-b border-border">
                <div className="flex items-start gap-3">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
                    alt="User avatar"
                    className="h-12 w-12 rounded-full border-2 border-border"
                  />
                  <div>
                    <h3 className="font-medium">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">alex.johnson@example.com</p>
                    <p className="text-xs text-muted-foreground mt-1">Member since April 2023</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-sm">
                  <div className="border border-border rounded-md p-2">
                    <div className="font-medium">42</div>
                    <div className="text-xs text-muted-foreground">Threads</div>
                  </div>
                  <div className="border border-border rounded-md p-2">
                    <div className="font-medium">185</div>
                    <div className="text-xs text-muted-foreground">Upvotes</div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full text-left p-2 text-sm hover:bg-accent rounded-md">
                  Profile Settings
                </button>
                <button className="w-full text-left p-2 text-sm hover:bg-accent rounded-md">
                  Account Settings
                </button>
                <button className="w-full text-left p-2 text-sm hover:bg-accent rounded-md">
                  Help Center
                </button>
                <button className="w-full text-left p-2 text-destructive hover:bg-accent rounded-md">
                  Sign Out
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="md:hidden mt-3 px-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default TopNavBar;
