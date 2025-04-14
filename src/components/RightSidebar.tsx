
import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

const trendingTags = [
  { name: 'design', count: 243 },
  { name: 'javascript', count: 187 },
  { name: 'productivity', count: 132 },
  { name: 'inspiration', count: 98 },
  { name: 'ux', count: 76 }
];

const recentThreads = [
  { title: "What's your favorite prototyping tool?", author: "designguru", timeAgo: "1h ago" },
  { title: "React 19 features discussion", author: "reactfan", timeAgo: "3h ago" },
  { title: "Show off your desk setup!", author: "workspacepro", timeAgo: "5h ago" }
];

const RightSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-72 p-4 border-l border-retro-yellow/30 dark:border-disco-blue/30">
      {/* User Profile Snippet */}
      <div className="retro-box retro-box-primary p-4 mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix"
            alt="User avatar"
            className="h-12 w-12 rounded-full border-2 border-retro-primary dark:border-disco-violet"
          />
          <div>
            <h3 className="font-medium dark:text-white">Alex Johnson</h3>
            <p className="text-xs text-muted-foreground">Member since Sep 2023</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div>
            <p className="text-lg font-semibold dark:text-white">42</p>
            <p className="text-xs text-muted-foreground">Threads</p>
          </div>
          <div>
            <p className="text-lg font-semibold dark:text-white">256</p>
            <p className="text-xs text-muted-foreground">Replies</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex">
              <p className="text-lg font-semibold dark:text-white">18</p>
              <Award className="h-4 w-4 text-retro-yellow dark:text-disco-yellow" />
            </div>
            <p className="text-xs text-muted-foreground">Awards</p>
          </div>
        </div>
      </div>
      
      {/* Trending Tags */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-retro-coral dark:text-disco-magenta" />
          <h3 className="font-medium dark:text-white">Trending Tags</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <a 
              href="#" 
              key={tag.name}
              className="retro-pill bg-muted text-muted-foreground hover:bg-retro-primary/20 dark:hover:bg-disco-violet/20 transition-colors duration-200"
            >
              #{tag.name}
              <span className="ml-1 text-xs opacity-70">({tag.count})</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Recent Discussions */}
      <div>
        <h3 className="font-medium mb-3 dark:text-white">Recent Discussions</h3>
        <div className="space-y-3">
          {recentThreads.map((thread, index) => (
            <a 
              href="#" 
              key={index}
              className="retro-box block p-3 transition-all duration-200 hover:-translate-y-1"
            >
              <h4 className="text-sm font-medium line-clamp-1 dark:text-white">{thread.title}</h4>
              <div className="flex justify-between mt-2">
                <p className="text-xs text-muted-foreground">by {thread.author}</p>
                <p className="text-xs text-muted-foreground">{thread.timeAgo}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
