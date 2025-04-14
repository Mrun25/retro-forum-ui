import React, { useState } from 'react';
import ThreadCard from './ThreadCard';
import { ArrowDownAZ, FlameKindling, UserRound, ThumbsUp, MessageSquare } from 'lucide-react';

// Mock data for thread cards
const threadsData = [
  {
    id: 1,
    title: "What's your favorite CSS framework in 2025?",
    category: "Development",
    categoryColor: "retro-box-primary",
    content: "I've been using Tailwind for the past few years, but curious if there are any new contenders worth checking out. What are y'all using these days?",
    username: "cssWizard",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dusty",
    replyCount: 32,
    timeAgo: "2h ago",
    upvotes: 45,
    tags: ["css", "frontend", "webdev"]
  },
  {
    id: 2,
    title: "Show off your minimal desk setup!",
    category: "Showcase",
    categoryColor: "retro-box-mint",
    content: "Just redesigned my home office and focusing on minimalism. Would love to see your setups for inspiration! Here's mine with just the essentials.",
    username: "minimalDesigner",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Coco",
    replyCount: 28,
    timeAgo: "5h ago",
    upvotes: 72,
    tags: ["workspace", "design", "productivity"]
  },
  {
    id: 3,
    title: "AI tools for content creation - worth it?",
    category: "Marketing",
    categoryColor: "retro-box-yellow",
    content: "Been experimenting with different AI tools for generating blog post ideas and social media content. Curious about what tools others find actually useful vs just hype.",
    username: "contentCreator",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
    replyCount: 56,
    timeAgo: "3h ago",
    upvotes: 38,
    tags: ["ai", "content", "marketing"]
  },
  {
    id: 4,
    title: "Creating UI animations that don't annoy users",
    category: "Design",
    categoryColor: "retro-box-light",
    content: "Looking for the sweet spot where animations enhance UX without slowing down the interface or becoming distracting. Any guidelines you follow?",
    username: "motionDesigner",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Max",
    replyCount: 41,
    timeAgo: "7h ago",
    upvotes: 63,
    tags: ["animation", "ui", "ux"]
  },
  {
    id: 5,
    title: "Remote work productivity hacks?",
    category: "General",
    categoryColor: "retro-box-primary",
    content: "Working from home full-time now and struggling with focus. What are your best tips for staying productive when your bed is just a few steps away?",
    username: "remoteWorker",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Cali",
    replyCount: 72,
    timeAgo: "1d ago",
    upvotes: 92,
    tags: ["productivity", "remote", "work"]
  }
];

const sortOptions = [
  { label: "Latest", icon: ArrowDownAZ },
  { label: "Trending", icon: FlameKindling },
  { label: "My Activity", icon: UserRound },
  { label: "Most Liked", icon: ThumbsUp },
  { label: "Most Commented", icon: MessageSquare }
];

const ThreadFeed = () => {
  const [selectedSort, setSelectedSort] = useState("Latest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedThreads, setDisplayedThreads] = useState(threadsData);

  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    
    let sortedThreads = [...threadsData];
    
    switch(sortOption) {
      case "Latest":
        sortedThreads.sort((a, b) => a.timeAgo.localeCompare(b.timeAgo));
        break;
      case "Most Liked":
        sortedThreads.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case "Most Commented":
        sortedThreads.sort((a, b) => b.replyCount - a.replyCount);
        break;
    }
    
    if (selectedCategory) {
      sortedThreads = sortedThreads.filter(thread => thread.category === selectedCategory);
    }
    
    setDisplayedThreads(sortedThreads);
    setIsDropdownOpen(false);
  };

  const filterByCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setDisplayedThreads(threadsData);
    } else {
      setSelectedCategory(category);
      setDisplayedThreads(threadsData.filter(thread => thread.category === category));
    }
  };

  const categories = [...new Set(threadsData.map(thread => thread.category))];

  return (
    <div className="flex-1 py-6 px-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Community Discussions</h2>
        
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="outline-card px-4 py-2 flex items-center gap-2 hover-bounce-sm"
          >
            <span>Sort: {selectedSort}</span>
            <ArrowDownAZ className="h-4 w-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-background border-2 border-[var(--outline-color)] rounded-xl shadow-outline z-40 py-1">
              {sortOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleSortChange(option.label)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-accent/20 ${selectedSort === option.label ? 'font-medium bg-accent/10' : ''}`}
                >
                  <option.icon className="h-4 w-4" />
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className={`outline-pill whitespace-nowrap ${
              selectedCategory === category ? 'bg-accent' : 'bg-background'
            }`}
          >
            {category}
          </button>
        ))}
        {selectedCategory && (
          <button
            onClick={() => {
              setSelectedCategory(null);
              setDisplayedThreads(threadsData);
            }}
            className="outline-pill bg-destructive text-destructive-foreground whitespace-nowrap"
          >
            Clear Filter
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-5">
        {displayedThreads.map((thread) => (
          <ThreadCard key={thread.id} {...thread} />
        ))}
      </div>
    </div>
  );
};

export default ThreadFeed;
