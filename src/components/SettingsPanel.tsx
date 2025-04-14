
import React from 'react';
import { toast } from 'sonner';
import ThemeToggle from './ThemeToggle';

const SettingsPanel = () => {
  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Settings</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile</h3>
          <div className="outline-card p-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
                alt="User avatar"
                className="h-16 w-16 rounded-full border-2 border-border"
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
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Appearance</h3>
          <div className="outline-card p-4">
            <div className="flex items-center justify-between">
              <span>Theme Mode</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <div className="outline-card p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked className="accent-primary h-5 w-5" />
            </div>
            <div className="flex justify-between items-center">
              <span>Thread Activity Notifications</span>
              <input type="checkbox" defaultChecked className="accent-primary h-5 w-5" />
            </div>
            <div className="flex justify-between items-center">
              <span>Direct Message Notifications</span>
              <input type="checkbox" defaultChecked className="accent-primary h-5 w-5" />
            </div>
          </div>
        </div>
        
        <button 
          className="outline-pill bg-primary text-primary-foreground w-full py-2"
          onClick={() => toast.success('Settings saved!')}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
