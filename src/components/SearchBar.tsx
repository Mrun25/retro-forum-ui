
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
      <div className="flex items-center px-4 py-2 w-full rounded-full border-2 border-black bg-white shadow-outline">
        <Search className="h-5 w-5 text-black flex-shrink-0" />
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
            className="outline-pill bg-accent text-xs flex-shrink-0 hover-bounce-sm"
          >
            {selectedCategory}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black rounded-xl shadow-outline z-50 py-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-accent/20"
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
