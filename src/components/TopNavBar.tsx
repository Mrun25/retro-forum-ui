
import React from 'react';
import { MessageSquare, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const TopNavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-retro-bg/80 dark:bg-disco-bg/80 backdrop-blur-sm border-b border-retro-yellow/30 dark:border-disco-blue/30 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-retro-text dark:text-white mr-6">
            Retro<span className="text-retro-coral dark:text-disco-magenta">.</span>
          </h1>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="retro-box p-2 rounded-full hover:scale-105 transition-all duration-300" aria-label="Messages">
            <MessageSquare className="h-5 w-5 text-retro-primary dark:text-disco-violet" />
          </button>
          <button className="retro-box p-2 rounded-full hover:scale-105 transition-all duration-300" aria-label="Notifications">
            <Bell className="h-5 w-5 text-retro-coral dark:text-disco-magenta" />
          </button>
          <ThemeToggle />
          <button className="retro-box p-1 rounded-full hover:scale-105 transition-all duration-300" aria-label="User profile">
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
