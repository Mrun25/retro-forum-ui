
import React from 'react';
import { MessageSquare, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const TopNavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white py-3 px-4 border-b-2 border-black">
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
          <button className="outline-card p-2 rounded-full hover-bounce" aria-label="Messages">
            <MessageSquare className="h-5 w-5 text-secondary" />
          </button>
          <button className="outline-card p-2 rounded-full hover-bounce" aria-label="Notifications">
            <Bell className="h-5 w-5 text-primary" />
          </button>
          <ThemeToggle />
          <button className="outline-card p-1 rounded-full hover-bounce" aria-label="User profile">
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
              alt="User avatar"
              className="h-7 w-7 rounded-full"
            />
          </button>
        </div>
      </div>
      <div className="md:hidden mt-3 px-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default TopNavBar;
