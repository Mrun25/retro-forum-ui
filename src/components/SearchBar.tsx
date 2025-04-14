
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const categories = [
  'All Categories',
  'Design',
  'Development',
  'Marketing',
  'General',
  'Support',
  'Showcase',
  'Off-Topic'
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xl">
      <div className="retro-box retro-box-primary flex items-center px-4 py-2 w-full">
        <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search discussions..."
          className="bg-transparent border-none outline-none px-3 py-1 w-full"
        />
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="retro-pill retro-pill-primary text-xs flex-shrink-0"
          >
            {selectedCategory}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-disco-bg border-2 dark:border-disco-blue rounded-xl shadow-lg z-50 py-1 glow">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-retro-primary/20 dark:hover:bg-disco-blue/20"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
